import React, { useState, useEffect } from "react"
import * as S from "./SingleProductContainer.styles"
import { increment } from "../../store/cart"
import { useSelector, useDispatch } from "react-redux"
import IngredientTag from "../ingredientTag/IngredientTag"
import { getAdditives } from "../../store/products"

const SingleProductContainer = ({ handleExit, item }) => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.cart)
    const [ingredients, setIngredients] = useState(item.description ? item.description.split(",") : "")
    const [size, setSize] = useState(item.small)
    const [type, setType] = useState("italian")
    const [finalPrice, setFinalPrice] = useState()

    useEffect(() => {
        dispatch(getAdditives())
    }, [])

    const { additives } = useSelector((state) => state.products)

    const transformDescriptionIntoArray = (des) => {
        return des
            .split(",")
            .sort((a, b) => a.length - b.length)
            .map((ingredient, index) => {
                return {
                    id: index,
                    ingredient,
                    deleted: false,
                }
            })
    }

    const [ingredientsState, setIngredientsState] = useState(
        item.description ? transformDescriptionIntoArray(item.description) : null
    )

    const sumAllAdditivesPrice = (data) => {
        return data.filter((items) => items.price && !items.deleted).reduce((prev, cur) => prev + Number(cur.price), 0)
    }

    const calculateTotalPrice = (additives, product) => {
        return (additives + Number(product)).toFixed(2)
    }

    const AddAdditionalIngredient = (selection) => {
        if (ingredients.includes(selection.title.toLowerCase())) {
            return
        } else {
            setIngredientsState([
                ...ingredientsState,
                {
                    ingredient: selection.title.toLowerCase(),
                    id: ingredientsState.length,
                    price: Number(selection.price),
                },
            ])
            setIngredients([...ingredients, selection.title.toLowerCase()])
        }
    }

    const deleteIgredient = (product) => {
        setIngredients(ingredients.filter((ingredient) => ingredient !== product.ingredient))
        setIngredientsState(
            ingredientsState.map((item) => {
                if (item.id === product.id) {
                    return { ...item, deleted: true }
                }
                return item
            })
        )
    }

    const moveIngredientBack = (product) => {
        setIngredientsState(
            ingredientsState.map((item) => {
                if (item.id === product.id) {
                    return { ...item, deleted: false }
                }
                return item
            })
        )
        setIngredients([...ingredients, product.ingredient])
    }

    useEffect(() => {
        setFinalPrice(calculateTotalPrice(sumAllAdditivesPrice(ingredientsState !== "" ? ingredientsState : 0), size))
    }, [ingredientsState, size])

    return (
        <>
            {item && (
                <S.ProductContainer id={item.id} className="here">
                    <S.ProductSection>
                        <S.ImageWrapper>
                            <S.ExitBtn onClick={handleExit} />
                            {item.category.toLowerCase() === "pica" ? (
                                <S.SizeLine>
                                    <S.ProductImage
                                        src={item.imageurl}
                                        alt="alt"
                                        expand={size === item.big ? true : false}
                                    />
                                </S.SizeLine>
                            ) : (
                                <S.ProductImage
                                    src={item.imageurl}
                                    alt="alt"
                                    expand={size === item.big ? true : false}
                                />
                            )}
                        </S.ImageWrapper>
                        <S.ProductInfoWrapper>
                            <S.Title>{item.title}</S.Title>
                            {item.category.toLowerCase() === "pica" && (
                                <S.SmallText>
                                    Size {size === item.small ? "30cm" : "42cm"}, {type}
                                </S.SmallText>
                            )}
                            <S.IngredientsWrapper>
                                {ingredientsState !== null
                                    ? ingredientsState.map((product, index) => (
                                          <IngredientTag
                                              id={index}
                                              key={index}
                                              deleted={product.deleted}
                                              handleDelete={() => {
                                                  deleteIgredient(product)
                                              }}
                                              handleUndo={() => {
                                                  moveIngredientBack(product)
                                              }}
                                          >
                                              {product.ingredient}
                                          </IngredientTag>
                                      ))
                                    : null}
                            </S.IngredientsWrapper>
                            {item.category.toLowerCase() === "pica" && (
                                <>
                                    <S.description>Choose size:</S.description>
                                    <S.StyledPizza
                                        big="true"
                                        onClick={() => {
                                            setSize(item.big)
                                        }}
                                    />
                                    <S.StyledPizza
                                        onClick={() => {
                                            setSize(item.small)
                                        }}
                                    />
                                </>
                            )}
                            {item.category.toLowerCase() === "pica" && (
                                <S.TypeWrapper>
                                    <S.TypeButtons
                                        active={type === "italian" ? true : false}
                                        handleClick={() => {
                                            setType("italian")
                                        }}
                                    >
                                        Italian
                                    </S.TypeButtons>
                                    <S.TypeButtons
                                        handleClick={() => {
                                            setType("american")
                                        }}
                                        active={type === "american" ? true : false}
                                    >
                                        American
                                    </S.TypeButtons>
                                </S.TypeWrapper>
                            )}
                            {item.category === "pica" && (
                                <S.StyledAdditives
                                    additives={additives}
                                    handleAdd={(selection) => {
                                        AddAdditionalIngredient(selection)
                                    }}
                                />
                            )}
                            {data.cart.filter(
                                (product) => product.title === item.title && product.description === ingredients
                            ) && (
                                <S.ButtonWrapper>
                                    <S.StyledButton
                                        handleClick={() =>
                                            dispatch(
                                                increment({
                                                    id: item.id,
                                                    title: item.title,
                                                    description: ingredients.toString(),
                                                    price: finalPrice,
                                                })
                                            )
                                        }
                                    >
                                        Add to Cart for {finalPrice} €
                                    </S.StyledButton>
                                </S.ButtonWrapper>
                            )}
                        </S.ProductInfoWrapper>
                    </S.ProductSection>
                </S.ProductContainer>
            )}
        </>
    )
}

export default SingleProductContainer

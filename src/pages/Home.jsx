import React, { useEffect } from "react"
import Container from "../components/Container/Container"
import ProductsList from "../components/ProductsList/ProductsList"
import Menu from "../components/menu/Menu"
import Filters from "../components/filters/Filters"
import SelectDropDown from "../components/SelectDropDown/SelectDropDown"
import CategoriesList from "../components/categoriesList/CategoriesList"
import {
    loadProducts,
    categoriesFiltered,
    loadCategories,
    productsSortedByPrice,
    resetProducts,
    filterProducts,
} from "../store/products"
import { useSelector, useDispatch } from "react-redux"

const Home = () => {
    const dispatch = useDispatch()

    dispatch(loadCategories())

    useEffect(() => {
        dispatch(loadProducts())
    }, [])

    const data = useSelector((state) => state.entities.products)
    const categories = data.categories

    return (
        <>
            <Container>
                <Filters
                    handleClick={() => {
                        console.log("hi")
                        dispatch(loadProducts())
                    }}
                >
                    <SelectDropDown
                        options={[
                            { value: "lowest price", label: "Lowest price" },
                            { value: "highest price", label: "Highest price" },
                            { value: "popularity", label: "the most popular" },
                        ]}
                        handleChange={(value) => {
                            dispatch(productsSortedByPrice(value))
                        }}
                    />
                </Filters>
                <Menu>
                    <CategoriesList categories={categories} />
                    <ProductsList items={data.list} />
                </Menu>
            </Container>
        </>
    )
}

export default Home

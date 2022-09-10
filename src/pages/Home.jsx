import React, { useEffect, useState } from "react"
import Container from "../components/Container/Container"
import ProductsList from "../components/ProductsList/ProductsList"
import Menu from "../components/menu/Menu"
import Footer from "../components/footer/Footer"
import Filters from "../components/filters/Filters"
import SelectDropDown from "../components/SelectDropDown/SelectDropDown"
import SearchBox from "../components/searchBox/SearchBox"
import MainContainer from "../components/mainContainer/MainContainer"
import CategoriesList from "../components/categoriesList/CategoriesList"
import { open } from "../../src/store/cart"
import { loadProducts, loadCategories, productsSortedByPrice, searchProducts } from "../store/products"
import { useSelector, useDispatch } from "react-redux"
import MobileCartIcon from "../components/mobileCartIcon/MobileCartIcon"
import { useNavigate } from "react-router-dom"
import MobileSideMenu from "../components/mobileSideMenu/MobileSideMenu"

const Home = () => {
    const navigate = useNavigate()
    const [spin, setSpin] = useState(false)
    const dispatch = useDispatch()
    const cartData = useSelector((state) => state.cart)
    const mobileSideBarStatus = cartData.status
    const totalQuantity = cartData.cart.reduce((a, b) => a + b.quantity, 0)

    dispatch(loadCategories())

    useEffect(() => {
        dispatch(loadProducts())
    }, [])

    const data = useSelector((state) => state.products)
    const categories = data.categories

    return (
        <>
            <MainContainer>
                <Container>
                    <MobileSideMenu
                        open={mobileSideBarStatus}
                        categories={categories}
                        handleClick={() => {
                            dispatch(open(false))
                        }}
                    />
                    <Filters
                        handleClick={() => {
                            setSpin(true)
                            dispatch(loadProducts())
                            setTimeout(() => {
                                setSpin(false)
                            }, 200)
                        }}
                        spin={spin}
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
                        <SearchBox
                            placeholder="Search"
                            name="query"
                            handleChange={(query) => {
                                const data = dispatch(searchProducts(query))
                                if (query.length === 0) {
                                    dispatch(loadProducts())
                                }
                            }}
                        />
                    </Filters>
                    <Menu>
                        <CategoriesList categories={categories} />
                        <ProductsList items={data.list} />
                        <MobileCartIcon
                            quantity={totalQuantity}
                            handleClick={() => {
                                navigate("/cart")
                            }}
                        />
                    </Menu>
                </Container>
                <Footer />
            </MainContainer>
        </>
    )
}

export default Home

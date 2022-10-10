import React, { useEffect, useState } from "react"
import Container from "../components/Container/Container"
import Hero from "../components/hero/Hero"
import Menu from "../components/menu/Menu"
import Footer from "../components/footer/Footer"
import Filters from "../components/filters/Filters"
import MainContainer from "../components/mainContainer/MainContainer"
import CategoriesList from "../components/categoriesList/CategoriesList"
import { open } from "../store/cart"
import { Outlet, useSearchParams } from "react-router-dom"
import { loadProducts } from "../store/products"
import { useSelector, useDispatch } from "react-redux"
import MobileCartIcon from "../components/mobileCartIcon/MobileCartIcon"
import { useNavigate } from "react-router-dom"
import MobileSideMenu from "../components/mobileSideMenu/MobileSideMenu"

const Products = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [selectParams, setSelectParams] = useSearchParams()
    const [spin, setSpin] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadProducts())
    }, [])

    const handleChange = (value) => {
        const title = value
        if (title) {
            setSearchParams({ title })
        } else {
            setSearchParams({})
        }
    }

    const handleSelect = (value) => {
        const sort = value
        if (sort) {
            setSelectParams({ sort })
        } else {
            setSearchParams({})
        }
    }

    const cartData = useSelector((state) => state.cart)
    const mobileSideBarStatus = cartData.status
    const totalQuantity = cartData.cart.reduce((a, b) => a + b.quantity, 0)

    return (
        <>
            <MainContainer>
                <Container>
                    <MobileSideMenu
                        open={mobileSideBarStatus}
                        handleExit={() => {
                            dispatch(open(false))
                        }}
                        handleClick={() => {
                            navigate("/account")
                        }}
                    />
                    <Hero />
                    <Filters
                        handleClick={() => {
                            setSpin(true)
                            dispatch(loadProducts())
                            setTimeout(() => {
                                setSpin(false)
                            }, 200)
                        }}
                        spin={spin}
                        handleSelect={(value) => {
                            handleSelect(value)
                        }}
                        handleChange={(value) => {
                            handleChange(value)
                        }}
                    ></Filters>
                    <Menu>
                        <CategoriesList />
                        <MobileCartIcon
                            quantity={totalQuantity}
                            handleClick={() => {
                                navigate("/cart")
                            }}
                        />
                        <Outlet />
                    </Menu>
                </Container>
                <Footer />
            </MainContainer>
        </>
    )
}

export default Products

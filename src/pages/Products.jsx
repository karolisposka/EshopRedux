import React, { useEffect, useState, useRef } from "react"
import Container from "../components/Container/Container"
import Hero from "../components/hero/Hero"
import Menu from "../components/menu/Menu"
import Footer from "../components/footer/Footer"
import Filters from "../components/filters/Filters"
import MainContainer from "../components/mainContainer/MainContainer"
import CategoriesList from "../components/categoriesList/CategoriesList"
import { open } from "../store/cart"
import { Outlet, useSearchParams } from "react-router-dom"
import { loadProducts, loadCategories } from "../store/products"
import { useSelector, useDispatch } from "react-redux"
import MobileCartIcon from "../components/mobileCartIcon/MobileCartIcon"
import { useNavigate } from "react-router-dom"
import MobileSideMenu from "../components/mobileSideMenu/MobileSideMenu"

const Products = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [selectParams, setSelectParams] = useSearchParams()
    const [display, setDisplay] = useState(false)
    const ref = useRef(null)
    const [spin, setSpin] = useState(false)
    const dispatch = useDispatch()
    const { list, categories } = useSelector((state) => state.products)

    useEffect(() => {
        if (list.length !== 0) {
            return
        } else {
            dispatch(loadProducts())
        }
    }, [list])

    useEffect(() => {
        if (categories.length !== 0) {
            return
        } else {
            dispatch(loadCategories())
        }
    }, [categories])

    const mapCategories = (categories) => {
        return categories.map((item) => ({
            path: "/" + item,
            text: item,
        }))
    }

    const handleChange = (value) => {
        const title = value.toLowerCase()
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

    const handleClick = () => {
        setDisplay(true)
        setTimeout(() => {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 500)
    }

    const cartData = useSelector((state) => state.cart)
    const mobileSideBarStatus = cartData.status
    const totalQuantity = cartData.cart.reduce((a, b) => a + b.quantity, 0)

    return (
        <>
            <MainContainer>
                <MobileSideMenu
                    open={mobileSideBarStatus}
                    routes={mapCategories(categories)}
                    handleExit={() => {
                        dispatch(open(false))
                    }}
                    handleClick={() => {
                        navigate("/account")
                    }}
                />
                <Hero
                    handleClick={() => {
                        handleClick()
                    }}
                />
                {display && (
                    <>
                        <Container>
                            <Filters
                                ref={ref}
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
                                <CategoriesList routes={mapCategories(categories)} />
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
                    </>
                )}
            </MainContainer>
        </>
    )
}

export default Products

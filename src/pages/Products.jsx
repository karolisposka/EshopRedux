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
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const [selectParams, setSelectParams] = useSearchParams()
    const ref = useRef(null)
    const [spin, setSpin] = useState(false)
    const cartData = useSelector((state) => state.cart)
    const { categories } = useSelector((state) => state.products)
    const mobileSideBarStatus = cartData.status

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

    //event handlers. Those contain useSearchParams setters

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
        setTimeout(() => {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
    }

    return (
        <MainContainer>
            <>
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
            </>
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
                        handleClick={() => {
                            navigate("/cart")
                        }}
                    />
                    <Outlet />
                </Menu>
            </Container>
            <Footer />
        </MainContainer>
    )
}

export default Products

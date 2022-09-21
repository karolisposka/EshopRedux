import React from "react"
import Container from "../components/Container/Container"
import Footer from "../components/footer/Footer"
import MainContainer from "../components/mainContainer/MainContainer"
import Hero from "../components/hero/Hero"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    return (
        <MainContainer>
            <Hero
                handleClick={() => {
                    navigate("/products")
                }}
            />
            <Footer />
        </MainContainer>
    )
}

export default Home

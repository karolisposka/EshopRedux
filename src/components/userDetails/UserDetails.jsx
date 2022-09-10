import React from "react"
import MainContainer from "../mainContainer/MainContainer"
import Container from "../Container/Container"
import Footer from "../footer/Footer"
import Carousel from "../carousel/Carousel"

const UserDetails = () => {
    return (
        <MainContainer>
            <Container>
                <Carousel items={["test", "test", "test"]} />
            </Container>
            <Footer />
        </MainContainer>
    )
}

export default UserDetails

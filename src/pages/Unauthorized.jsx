import React from "react"
import Container from "../components/Container/Container"
import Title from "../components/title/Title"
import Button from "../components/Button/Button"
import Footer from "../components/footer/Footer"
import FlexContainer from "../components/accountContainer/flexContainer/FlexContainer"
import { useNavigate } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate()
    return (
        <>
            <Container>
                <Title>Unauthorized</Title>
                <FlexContainer>
                    <Button
                        handleClick={() => {
                            navigate("/")
                        }}
                    >
                        Back to main page
                    </Button>
                </FlexContainer>
            </Container>
            <Footer />
        </>
    )
}

export default Unauthorized

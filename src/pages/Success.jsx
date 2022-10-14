import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { orderDispatched } from "../store/cart"
import { useDispatch } from "react-redux"
import Title from "../components/title/Title"
import UnauthorizedContainer from "../components/unAuthorizedContainer/UnauthorizedContainer"
import Button from "../components/Button/Button"
import Container from "../components/Container/Container"

const Success = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(orderDispatched())
    }, [])

    return (
        <Container>
            <Title>Payment completed</Title>
            <UnauthorizedContainer>
                <Button
                    handleClick={() => {
                        navigate("/")
                    }}
                >
                    Back to Store
                </Button>
            </UnauthorizedContainer>
        </Container>
    )
}

export default Success

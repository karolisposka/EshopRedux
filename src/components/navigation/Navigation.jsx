import React from "react"
import * as S from "./Navigation.styles"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Navigation = () => {
    const navigate = useNavigate()
    const loadersState = useSelector((state) => state.entities.products.loading)

    return (
        <S.NavigationContainer>
            <S.ItemsContainer>
                <S.LogoWrapper
                    onClick={() => {
                        navigate("/")
                    }}
                >
                    <S.LogoImg src="./logo.png" alt="logo" />
                    {loadersState && <S.StyledLoader />}
                </S.LogoWrapper>
                <S.CartWrapper>
                    <S.CartItemsNumber>3</S.CartItemsNumber>
                    <S.CartIcon
                        onClick={() => {
                            navigate("/cart")
                        }}
                    />
                </S.CartWrapper>
            </S.ItemsContainer>
        </S.NavigationContainer>
    )
}

export default Navigation

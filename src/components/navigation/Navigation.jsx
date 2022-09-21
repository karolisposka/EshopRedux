import React from "react"
import * as S from "./Navigation.styles"
import Logo from "../../assets/LogoRound.png"
import { useSelector, useDispatch } from "react-redux"
import { open } from "../../store/cart"
import { useNavigate } from "react-router-dom"

const Navigation = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loadersState = useSelector((state) => state.products.loading)
    const key = useSelector((state) => state.users.key)
    const status = useSelector((state) => state.cart.status)
    const data = useSelector((state) => state.cart)
    const totalQuantity = data.cart.reduce((a, b) => a + b.quantity, 0)

    return (
        <S.NavigationContainer>
            <S.Section>
                <S.ItemsContainer>
                    <S.LogoWrapper
                        onClick={() => {
                            navigate("/")
                        }}
                    >
                        <S.LogoImg src={Logo} alt="logo" />
                        {(loadersState || data.loading) && <S.StyledLoader />}
                    </S.LogoWrapper>
                    <S.BurgerMenu
                        onClick={() => {
                            dispatch(open(true))
                        }}
                    />
                    <S.CartWrapper>
                        <a
                            onClick={() => {
                                navigate("/admin")
                            }}
                        >
                            admin
                        </a>
                        <S.UserIcon
                            onClick={() => {
                                {
                                    !key ? navigate("/account") : navigate("/userDetails")
                                }
                            }}
                        />
                        <S.CartItemsNumber>{totalQuantity}</S.CartItemsNumber>
                        <S.CartIcon
                            onClick={() => {
                                navigate("/cart")
                            }}
                        />
                    </S.CartWrapper>
                </S.ItemsContainer>
            </S.Section>
        </S.NavigationContainer>
    )
}

export default Navigation

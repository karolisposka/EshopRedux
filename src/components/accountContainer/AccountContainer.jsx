import React from "react"
import PropTypes from "prop-types"
import * as S from "./AccountContainer.styles"
import { useLocation } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import { useSelector } from "react-redux"

const AccountContainer = ({ children, state }) => {
    const path = useLocation()
    const test = useSelector((state) => state.users.expanded)

    return (
        <S.Container>
            <S.Section>
                <CSSTransition in={test} timeout={500} classNames="overlay">
                    {path.pathname === "/account" ? (
                        <S.Overlay classNames="overlay">
                            <S.TextWrapper>
                                <S.Title>Welcome Back!</S.Title>
                                <S.Text>Log in to go further</S.Text>
                            </S.TextWrapper>
                        </S.Overlay>
                    ) : (
                        <S.Overlay classNames="overlay">
                            <S.TextWrapper>
                                <S.Title>Welcome!</S.Title>
                                <S.Text>Create account for further actions</S.Text>
                            </S.TextWrapper>
                        </S.Overlay>
                    )}
                </CSSTransition>
                <S.FormContainer>{children}</S.FormContainer>
            </S.Section>
        </S.Container>
    )
}

AccountContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AccountContainer

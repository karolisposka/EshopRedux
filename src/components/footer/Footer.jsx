import React from "react"
import * as S from "./Footer.styles"
import FooterListItem from "../footerListItem/FooterListItem"
import { Outlet } from "react-router-dom"

const Footer = () => {
    const list = [
        { title: "Services", to: "/services" },
        { title: "About", to: "/about" },
        { title: "Contacts", to: "/contacts" },
    ]

    return (
        <S.StyledContainer>
            <S.Section>
                <S.NavigationContainer>
                    <S.ItemsListContainer>
                        <S.ItemsList>
                            {list &&
                                list.map((item, index) => (
                                    <FooterListItem key={index} to={item.to} title={item.title}></FooterListItem>
                                ))}
                        </S.ItemsList>
                    </S.ItemsListContainer>
                    <S.NavSection></S.NavSection>
                </S.NavigationContainer>
                <S.InputContainer>
                    <S.Text>JOIN OUR NEWSLETTER</S.Text>
                    <S.Span>10% off for new subscribers</S.Span>
                    <S.Form>
                        <S.StyledInput
                            type="email"
                            placeholder="Enter your email address"
                            name="newsletter"
                            handleChange={() => {
                                alert("news letter")
                            }}
                        />
                        <S.StyledButton type="submit">Sign up</S.StyledButton>
                    </S.Form>
                </S.InputContainer>
            </S.Section>
        </S.StyledContainer>
    )
}

export default Footer

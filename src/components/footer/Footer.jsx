import React from "react"
import * as S from "./Footer.styles"
import FooterListItem from "../footerListItem/FooterListItem"

const Footer = () => {
    const list = [
        { title: "Services", text: "hello world nice to meet you " },
        { title: "About", text: "hello world nice to meet you " },
        { title: "Contacts", text: "hello world nice to meet you " },
    ]

    return (
        <S.StyledContainer>
            <S.Section>
                <S.ItemsListContainer>
                    <S.ItemsList>
                        {list &&
                            list.map((item, index) => (
                                <FooterListItem key={index} title={item.title} text={item.text} />
                            ))}
                    </S.ItemsList>
                </S.ItemsListContainer>
                <S.InputContainer>
                    <S.Text>JOIN OUR NEWSLETTER</S.Text>
                    <S.Span>10% off for new subscribers</S.Span>
                    <S.Form>
                        <S.StyledInput placeholder="Enter your email address" />
                        <S.StyledButton type="submit">Sign up</S.StyledButton>
                    </S.Form>
                </S.InputContainer>
            </S.Section>
        </S.StyledContainer>
    )
}

export default Footer

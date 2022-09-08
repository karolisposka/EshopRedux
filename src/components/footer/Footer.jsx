import React from "react"
import * as S from "./Footer.styles"

const Footer = () => {
    const list = ["Services", "about us", "contacts"]
    return (
        <S.StyledContainer>
            <S.ItemsListContainer>
                <S.ItemsList>{list && list.map((item) => <S.ListItem>{item}</S.ListItem>)}</S.ItemsList>
            </S.ItemsListContainer>
        </S.StyledContainer>
    )
}

export default Footer

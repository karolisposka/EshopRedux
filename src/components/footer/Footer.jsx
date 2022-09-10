import React from "react"
import * as S from "./Footer.styles"

const Footer = () => {
    const list = ["Services", "about us", "contacts"]

    return (
        <S.StyledContainer>
            <S.Section>
                <S.ItemsListContainer>
                    <S.ItemsList>
                        {list && list.map((item, index) => <S.ListItem key={index}>{item}</S.ListItem>)}
                    </S.ItemsList>
                </S.ItemsListContainer>
            </S.Section>
        </S.StyledContainer>
    )
}

export default Footer

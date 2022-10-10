import React from "react"
import * as S from "./FooterListItem.styles"

const FooterListItem = ({ title, handleClick }) => {
    return (
        <>
            <S.ListItem onClick={handleClick}>
                <S.Text>{title}</S.Text>
            </S.ListItem>
        </>
    )
}

export default FooterListItem

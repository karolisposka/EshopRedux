import React from "react"
import * as S from "./FooterListItem.styles"

const FooterListItem = ({ title, to }) => {
    return (
        <>
            <S.ListItem to={to}>
                <S.Text>{title}</S.Text>
            </S.ListItem>
        </>
    )
}

export default FooterListItem

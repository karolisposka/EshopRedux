import React from "react"
import * as S from "./HorizontalNav.styles"

const HorizontalNav = ({ links }) => {
    return (
        <S.HorizontalNav>
            {links && links.map((item, index) => <S.StyledNavLink to={item.to} title={item.title} key={index} />)}
        </S.HorizontalNav>
    )
}

export default HorizontalNav

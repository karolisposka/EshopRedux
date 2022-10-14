import React from "react"
import PropTypes from "prop-types"
import * as S from "./HorizontalNav.styles"

const HorizontalNav = ({ links }) => {
    return (
        <S.HorizontalNav>
            {links && links.map((item, index) => <S.StyledNavLink to={item.to} title={item.title} key={index} />)}
        </S.HorizontalNav>
    )
}

HorizontalNav.propTypes = {
    links: PropTypes.shape({
        to: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }),
}

export default HorizontalNav

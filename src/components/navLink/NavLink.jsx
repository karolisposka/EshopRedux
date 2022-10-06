import React from "react"
import * as S from "./NavLink.styles"

const NavLink = ({ to, title, className }) => {
    return (
        <S.NavLink className={className} to={to}>
            {title}
        </S.NavLink>
    )
}

export default NavLink

import React from "react"
import * as S from "./MobileSideMenu.styles"

const MobileSideMenu = ({ categories, open, handleClick }) => {
    return (
        <S.SideMenuContainer open={open}>
            <S.Exit onClick={handleClick} />
            <S.StyledCategoriesList categories={categories} />
        </S.SideMenuContainer>
    )
}

export default MobileSideMenu

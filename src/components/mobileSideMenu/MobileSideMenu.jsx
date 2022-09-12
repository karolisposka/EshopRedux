import React from "react"
import * as S from "./MobileSideMenu.styles"
import { useSelector } from "react-redux/es/exports"

const MobileSideMenu = ({ categories, open, handleClick, handleExit }) => {
    const key = useSelector((state) => state.users.key)
    return (
        <S.SideMenuContainer open={open}>
            <S.Exit onClick={handleExit} />
            <S.AccountBtn onClick={handleClick}>{key ? "Account" : "Login"}</S.AccountBtn>
            <S.StyledCategoriesList categories={categories} />
        </S.SideMenuContainer>
    )
}

export default MobileSideMenu

import React from "react"
import * as S from "./VerticalNavigation.styles"
import NavigationComponent from "../navigationComponent/NavigationComponent"

const VerticalNavigation = ({ items, handleClick }) => {
    return (
        <S.Container>
            <S.AdminBtn to="/admin">admin</S.AdminBtn>
            <S.UserDetailsList>
                {items && items.map((item, index) => <NavigationComponent key={index} text={item.text} to={item.to} />)}
                <S.LogoutBtn onClick={handleClick}>LOGOUT</S.LogoutBtn>
            </S.UserDetailsList>
        </S.Container>
    )
}

export default VerticalNavigation

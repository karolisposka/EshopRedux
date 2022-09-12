import React from "react"
import * as S from "./UserDetailsList.styles"
import UserDetailsListItem from "../userDetailsListItem/UserDetailsListItem"

const UserDetailsList = ({ items, handleClick }) => {
    console.log(items)
    return (
        <S.Container>
            <S.UserDetailsList>
                {items &&
                    items.map((item, index) => (
                        <UserDetailsListItem key={index} text={item.text} handleClick={item.handleClick} />
                    ))}
                <S.LogoutBtn onClick={handleClick}>LOGOUT</S.LogoutBtn>
            </S.UserDetailsList>
        </S.Container>
    )
}

export default UserDetailsList

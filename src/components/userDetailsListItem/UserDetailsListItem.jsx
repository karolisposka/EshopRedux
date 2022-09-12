import React from "react"
import * as S from "./UserDetailsListItem.styles"

const UserDetailsListItem = ({ text, handleClick }) => {
    return <S.ListItem onClick={handleClick}>{text}</S.ListItem>
}

export default UserDetailsListItem

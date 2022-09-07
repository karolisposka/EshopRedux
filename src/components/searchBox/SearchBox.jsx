import React, { useState } from "react"
import * as S from "./SearchBox.styles"

const SearchBox = ({ name, placeholder, handleChange }) => {
    const [inputValue, setInputValue] = useState()
    return (
        <S.SearchBoxContainer>
            <S.Icon />
            <S.Input
                name={name}
                placeholder={placeholder}
                onChange={(e) => {
                    handleChange(e.target.value)
                }}
                value={inputValue}
            />
        </S.SearchBoxContainer>
    )
}

export default SearchBox

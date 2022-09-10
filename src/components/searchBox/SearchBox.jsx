import React, { useState } from "react"
import PropTypes from "prop-types"
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

SearchBox.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default SearchBox

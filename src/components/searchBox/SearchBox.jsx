import React, { useState } from "react"
import PropTypes from "prop-types"
import * as S from "./SearchBox.styles"

const SearchBox = ({ name, placeholder, handleChange, className }) => {
    const [inputValue, setInputValue] = useState()
    const [display, setDisplay] = useState(false)
    const [expanded, setExpanded] = useState(false)

    const displaySearchField = () => {
        setDisplay(!display)
        setTimeout(() => {
            setExpanded(!expanded)
        }, 400)
    }

    return (
        <S.SearchBoxContainer className={className} expanded={display}>
            <S.Icon
                onClick={() => {
                    displaySearchField()
                }}
            />
            {expanded && (
                <S.Input
                    expanded={expanded}
                    name={name}
                    placeholder={placeholder}
                    onChange={(e) => {
                        handleChange(e.target.value)
                    }}
                    value={inputValue}
                />
            )}
        </S.SearchBoxContainer>
    )
}

SearchBox.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default SearchBox

import React from "react"
import * as S from "./SelectDropDown.styles"
import PropTypes from "prop-types"

const SelectDropDown = ({ handleChange, options, className }) => {
    return (
        <>
            <S.StyledSelect
                className={className}
                options={options}
                onChange={(e) => {
                    handleChange(e.value)
                }}
            />
        </>
    )
}

SelectDropDown.propTypes = {
    handleChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string,
        })
    ),
}

export default SelectDropDown

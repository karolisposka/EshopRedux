import React, { useState } from "react"
import * as S from "./SelectDropDown.styles"
import Select from "react-select"

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

export default SelectDropDown

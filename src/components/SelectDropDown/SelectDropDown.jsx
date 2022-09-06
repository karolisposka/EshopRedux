import React, { useState } from "react"
import Select from "react-select"

const SelectDropDown = ({ handleChange, options, className }) => {
    return (
        <>
            <Select
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

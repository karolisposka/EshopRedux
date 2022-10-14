import React from "react"
import PropTypes from "prop-types"
import { CSSTransition } from "react-transition-group"
import * as S from "./Filters.styles"

const options = [
    { value: "lowest price", label: "Lowest price" },
    { value: "highest price", label: "Highest price" },
    { value: "popularity", label: "the most popular" },
]

const Filters = ({ handleClick, handleSelect, handleChange, spin }) => {
    return (
        <>
            <S.FiltersContainer>
                <S.FiltersWrapper>
                    <CSSTransition in={spin} timeout={200} classNames="fade">
                        <S.RefreshIcon onClick={handleClick} />
                    </CSSTransition>
                    <S.StyledSearchBox placeholder="...Search" handleChange={handleChange} name="search" />
                    <S.Select
                        options={options}
                        handleChange={(value) => {
                            handleSelect(value)
                        }}
                    />
                </S.FiltersWrapper>
            </S.FiltersContainer>
        </>
    )
}

Filters.propTypes = {
    handleClick: PropTypes.func.isRequired,
    handleSelect: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    spin: PropTypes.bool,
}

export default Filters

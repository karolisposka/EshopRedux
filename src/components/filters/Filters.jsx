import React from "react"
import * as S from "./Filters.styles"

const Filters = ({ children, handleClick }) => {
    return (
        <>
            <S.FiltersContainer>
                <S.Category></S.Category>
                <S.RefreshIcon onClick={handleClick} />
                <S.FiltersWrapper>
                    <S.FilterIcon />
                    {children}
                </S.FiltersWrapper>
            </S.FiltersContainer>
        </>
    )
}

export default Filters

import React from "react"
import * as S from "./Filters.styles"

const Filters = ({ children }) => {
    return (
        <>
            <S.FiltersContainer>
                <S.FilterIcon />
                {children}
            </S.FiltersContainer>
        </>
    )
}

export default Filters

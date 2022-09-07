import React from "react"
import { CSSTransition } from "react-transition-group"
import * as S from "./Filters.styles"

const Filters = ({ children, handleClick, spin }) => {
    return (
        <>
            <S.FiltersContainer>
                <S.Category></S.Category>
                <CSSTransition in={spin} timeout={200} classNames="fade">
                    <S.RefreshIcon onClick={handleClick} />
                </CSSTransition>
                <S.FiltersWrapper>
                    <S.FilterIcon />
                    {children}
                </S.FiltersWrapper>
            </S.FiltersContainer>
        </>
    )
}

export default Filters

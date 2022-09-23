import React from "react"
import PropTypes from "prop-types"
import * as S from "./BackToStore.styles"

const BackToStore = ({ handleClick }) => {
    return (
        <>
            <S.Container>
                <S.Icon />
                <S.Text>Your bag is empty</S.Text>
                <S.StyledButton handleClick={handleClick}>Back to store</S.StyledButton>
            </S.Container>
        </>
    )
}

BackToStore.propTypes = {
    handleClick: PropTypes.func.isRequired,
}

export default BackToStore

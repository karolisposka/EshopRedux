import React from "react"
import PropTypes from "prop-types"
import * as S from "./BackToStore.styles"

const BackToStore = ({ handleClick }) => {
    return (
        <>
            <S.Container>
                <S.Icon />
                <S.Text>Your bag is empty</S.Text>
                <S.Button onClick={handleClick}>Back to store</S.Button>
            </S.Container>
        </>
    )
}

BackToStore.propTypes = {
    handleClick: PropTypes.func.isRequired,
}

export default BackToStore

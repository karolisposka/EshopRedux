import React from "react"
import loader from "../../assets/loader.svg"
import PropTypes from "prop-types"
import * as S from "./Loader.styles"

const Loader = ({ className }) => {
    return (
        <>
            <S.Loader className={className} src={loader} alt="...loading" />
        </>
    )
}

Loader.propTypes = {
    className: PropTypes.string,
}

export default Loader

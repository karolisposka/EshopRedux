import React from "react"
import PropTypes from "prop-types"
import * as S from "./Button.styles"

const Button = ({ type, children, className, handleClick }) => {
    return (
        <S.Button type={type} className={className} onClick={handleClick}>
            {children}
        </S.Button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(["submit", "reset", "button"]),
    children: PropTypes.node.isRequired,
    handleClick: PropTypes.func,
}

Button.defaultProps = {
    type: "button",
}

export default Button

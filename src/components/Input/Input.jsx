import React, { useState } from "react"
import * as S from "./Input.styles"
import PropTypes from "prop-types"

const Input = ({ className, placeholder, name, type, value, handleChange, label, comment, handleBlur }) => {
    const [showComment, setShowComment] = useState(false)
    return (
        <S.InputContainer className={className}>
            {label && <S.Label>{label}</S.Label>}
            <S.InputWrapper>
                <S.Input
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    onChange={(e) => {
                        handleChange(e)
                    }}
                    onBlur={handleBlur}
                    value={value}
                />
                {comment && (
                    <S.CommentIcon
                        onMouseOver={() => {
                            setShowComment(true)
                        }}
                        onMouseLeave={() => {
                            setShowComment(false)
                        }}
                    />
                )}
                {showComment && (
                    <S.Comment>
                        <S.CommentText>{comment}</S.CommentText>
                    </S.Comment>
                )}
            </S.InputWrapper>
        </S.InputContainer>
    )
}

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(["text", "number", "email", "password", "file"]).isRequired,
}

export default Input

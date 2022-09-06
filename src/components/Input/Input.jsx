import React, { useState } from "react"
import * as S from "./Input.styles"
import PropTypes from "prop-types"

const Input = ({ placeholder, name, type, value, handleChange, label, comment }) => {
    const [showComment, setShowComment] = useState(false)
    return (
        <S.InputContainer>
            <S.Label>{label}</S.Label>
            <S.InputWrapper>
                <S.Input
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    onChange={(e) => {
                        handleChange(e)
                    }}
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
    type: PropTypes.oneOf(["text", "number", "email", "password"]).isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default Input

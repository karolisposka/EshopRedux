import React, { useState } from "react";
import * as S from "./Input.styles";
import PropTypes from "prop-types";

const Input = ({ placeholder, name, type, handleSubmit }) => {
  const [inputValue, setInputValue] = useState();
  return (
    <S.InputContainer>
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(inputValue);
        }}
      >
        <S.Input
          placeholder={placeholder}
          name={name}
          type={type}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
        <S.StyledButton type="submit">Add</S.StyledButton>
      </S.Form>
    </S.InputContainer>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "email", "password"]).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Input;

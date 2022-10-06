import Styled from "styled-components"
import Button from "../Button/Button"

export const Container = Styled.div`
    margin:1rem;
`

export const Form = Styled.form`
    max-width:800px;
    font-family: ${(props) => props.theme.fonts.names.primary};
    margin:0 auto;

`
export const StyledButton = Styled(Button)`
    margin:0 1rem;

`

export const Title = Styled.h4`
    margin:0 1rem;

`

import Styled from "styled-components"

export const Title = Styled.h2`
    margin:2rem;
    padding:2rem;
    font-family:${(props) => props.theme.fonts.names.primary};
    text-transform:uppercase;
    border-bottom: 1px solid rgba(0,0,0,0.3);
    
`

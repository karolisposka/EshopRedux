import Styled from "styled-components"

export const Notification = Styled.div`
    width:calc(100% -5rem);
    background:${(props) => (props.status === "err" ? `#D2001A` : `#38E54D`)};
    padding:1rem;
    border-radius:0.5rem;
    font-family:${(props) => props.theme.fonts.names.primary};
    color:${(props) => props.theme.colors.background.lightest};
`

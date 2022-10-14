import Styled, { keyframes } from "styled-components"

const render = keyframes`
    0%{
        transform:translateY(-50px);
        opacity:0;
    }
    50% {
        opacity:0.5;
    }
    100%{
        transform: translateY(0);
        opacity:1;
    }

`

export const Notification = Styled.div`
    width:calc(100% -5rem);
    background:${(props) => (props.status === "err" ? `#D2001A` : `#38E54D`)};
    padding:1rem;
    border-radius:0.5rem;
    font-family:${(props) => props.theme.fonts.names.primary};
    color:${(props) => props.theme.colors.background.lightest};
    animation: ${render} 0.2s ease-in;
`

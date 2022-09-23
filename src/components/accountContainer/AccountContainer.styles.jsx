import Styled from "styled-components"

export const Container = Styled.div`
    max-width:600px;
    margin:0 auto;
    padding:1rem;
`

export const Section = Styled.section`
    margin:0 auto;
    overflow: hidden;
    position:relative;
    border:1px solid rgba(0,0,0,0.3);
    border-radius:2rem;
    box-sizing:border-box;
    height:40rem;
    display:flex;
    align-items:center;
    justify-content:Center;
`

export const Overlay = Styled.div`
    font-family:${(props) => props.theme.fonts.names.primary};
    align-items:flex-start;
    background: ${(props) => props.theme.colors.background.info};
    background-repeat: no-repeat;
    background-size:cover;
    clip-path: ellipse(80% 24% at 51% 0%);
    display:flex;
    flex-direction:column;
    height:100vh;
    z-index:3;
    justify-content:flex-start;
    left:0;
    padding:2rem;
    position:absolute;
    top:0;
    width:100%;
    transition:1s ease-in-out;
    &.overlay-enter {
        width:100%;
        height: 100vh;  
    }
    &.overlay-enter-active {
        width:100%;
        height:2000vh;
    }
    &.overlay-exit {
        width:100%;
        height:2000vh;
        
    }
    &.overlay-exit-active {
        width:100%;
        height:100vh;
    }
`

export const TextWrapper = Styled.section`
    padding:1rem;

`

export const Title = Styled.h4`
    margin:0;
    color: ${(props) => props.theme.colors.fonts.light};


   
`

export const Text = Styled.p`
    color: ${(props) => props.theme.colors.fonts.light};

`

export const FormContainer = Styled.div`
    align-self:flex-end;
    width:80%;
    padding-bottom:4rem;
`

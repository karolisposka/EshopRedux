import Styled from "styled-components"

export const Container = Styled.div`
    flex:3;
    box-sizing:border-box;
    margin:1rem;
    max-width:1200px;
    @media(max-width:576px){
        width:calc(100% - 2rem);
    }

`

import Styled from "styled-components"

export const ReducerContainer = Styled.div`
  display:flex;
  height:1.5rem;
`

export const DecrementBtn = Styled.button`
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  width:2.5rem;
  height:2rem;
  border:none;
  font-size:1.2rem;
  font-weight:700;
  color:${(props) => props.theme.colors.fonts.light};
  background:${(props) => props.theme.colors.background.info};
  @media(max-width:768px){
    height:1.5rem !important;
    font-size:0.5rem;
  }
`

export const QuantitySpan = Styled.span`
  padding:0 0.8rem;
  height:2rem;
  display:flex;
  align-items:center;
  border-top:1px solid rgba(0,0,0,0.3);
  border-bottom:1px solid rgba(0,0,0,0.3);
  box-sizing:border-box;
  @media(max-width:768px){
    height:1.5rem;
    padding:0.4rem;
  }
  
`

export const IncrementBtn = Styled.button`
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  width:2rem;
  height:2rem;
  border:none;
  font-weight:700;
  font-size:1.2rem;
  color:${(props) => props.theme.colors.fonts.light};
  background:${(props) => props.theme.colors.background.info};
  @media(max-width:768px){
    height:1.5rem !important;
    font-size:0.5rem;
  }
`

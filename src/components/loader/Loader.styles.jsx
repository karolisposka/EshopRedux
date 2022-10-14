import Styled, { keyframes } from "styled-components"

const rotate = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`

export const StyledContainer = Styled.div`
  display:Flex;
  justify-content:center;
  align-items:Center;
  width:100%;
  min-height:62vh;

`

export const Loader = Styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  &&:after{
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 1rem solid #3AB0FF;
    border-color: #3AB0FF transparent #3AB0FF transparent;
    animation: ${rotate} 1.2s infinite;
  }
`

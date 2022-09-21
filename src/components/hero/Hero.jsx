import React from "react"
import * as S from "./Hero.styles"

const Hero = ({ handleClick }) => {
    return (
        <S.MainContainer>
            <S.ContentSection>
                <S.Image />
                <S.TextWrapper>
                    <S.Text>
                        <S.Span>Free delivery from 25$</S.Span>, don't wait and order now!
                    </S.Text>
                    <S.ShopNowBtn handleClick={handleClick}>Shop now!</S.ShopNowBtn>
                </S.TextWrapper>
            </S.ContentSection>
        </S.MainContainer>
    )
}

export default Hero

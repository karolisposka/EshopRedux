import React from "react"
import * as S from "./Hero.styles"

const Hero = () => {
    return (
        <S.MainContainer>
            <S.ContentSection>
                <S.TextWrapper>
                    <S.Text>
                        <S.Span>Free delivery from 25 €</S.Span> don't wait and order now!
                    </S.Text>
                </S.TextWrapper>
            </S.ContentSection>
        </S.MainContainer>
    )
}

export default Hero

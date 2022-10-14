import React from "react"
import * as S from "./Hero.styles"

const Hero = ({ handleClick }) => {
    return (
        <S.MainContainer>
            <S.Overlay>
                <S.ContentSection>
                    <S.TextWrapper>
                        <S.Title>
                            Welcome to <S.Span>FOOD STORE!</S.Span>
                        </S.Title>
                        <S.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur excepturi est.
                        </S.Text>
                    </S.TextWrapper>
                    <S.Button onClick={handleClick}>
                        <S.Arrow />
                    </S.Button>
                </S.ContentSection>
            </S.Overlay>
        </S.MainContainer>
    )
}

export default Hero

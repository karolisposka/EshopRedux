import React from "react"
import * as S from "./AccountPromo.styles"

const AccountPageInfo = ({ className, flex }) => {
    return (
        <S.Container className={className}>
            <S.ContentSection flex={flex}>
                <S.TextWrapper>
                    <S.HistoryIcon />
                    <S.Title>Track your orders any time!</S.Title>
                    <S.Description>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ut harum quas animi eum.
                    </S.Description>
                </S.TextWrapper>
                <S.TextWrapper>
                    <S.AddressBook />
                    <S.Title>Save your shipping information</S.Title>
                    <S.Description>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ut harum quas animi eum.
                    </S.Description>
                </S.TextWrapper>
                <S.TextWrapper>
                    <S.HistoryIcon />
                    <S.Title>Track your orders any time!</S.Title>
                    <S.Description>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ut harum quas animi eum.
                    </S.Description>
                </S.TextWrapper>
                <S.TextWrapper>
                    <S.HistoryIcon />
                    <S.Title>Track your orders any time!</S.Title>
                    <S.Description>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ut harum quas animi eum.
                    </S.Description>
                </S.TextWrapper>
            </S.ContentSection>
            <S.StyledButton>Sign Up Now!</S.StyledButton>
        </S.Container>
    )
}

export default AccountPageInfo

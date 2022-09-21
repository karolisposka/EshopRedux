import React from "react"
import * as S from "./AccountPromo.styles"

const AccountPageInfo = ({ className, flex }) => {
    return (
        <S.Section className={className} flex={flex}>
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
        </S.Section>
    )
}

export default AccountPageInfo

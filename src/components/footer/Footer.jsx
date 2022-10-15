import React, { useState } from "react"
import * as S from "./Footer.styles"
import FooterListItem from "../footerListItem/FooterListItem"

const Footer = () => {
    const list = ["contacts", "about", "services"]
    const [section, setSection] = useState(list[0])

    const footerSections = (section) => {
        if (section === "contacts") {
            return (
                <S.SectionText1>
                    <S.PlainText>
                        <S.MobileIcon /> +370 67462267
                    </S.PlainText>
                    <S.PlainText>
                        <S.MailIcon /> loremIpsum@lorem.org
                    </S.PlainText>
                    <S.PlainText>
                        <S.GlobeIcon />
                        Seskines sodu 12, Vilnius
                    </S.PlainText>
                </S.SectionText1>
            )
        }
        if (section === "about") {
            return (
                <S.SectionText2>
                    <S.PlainText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ratione in harum?
                    </S.PlainText>
                </S.SectionText2>
            )
        }
        if (section === "services") {
            return (
                <S.SectionText3>
                    <S.PlainText>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis facilis quia itaque rem
                        accusamus qui quasi minus quo ratione maxime.
                    </S.PlainText>
                </S.SectionText3>
            )
        }
    }

    return (
        <S.StyledContainer>
            <S.Section>
                <S.NavigationContainer>
                    <S.ItemsListContainer>
                        <S.ItemsList>
                            {list &&
                                list.map((item, index) => (
                                    <FooterListItem
                                        key={index}
                                        title={item}
                                        handleClick={() => {
                                            setSection(item)
                                        }}
                                    />
                                ))}
                        </S.ItemsList>
                    </S.ItemsListContainer>
                    <S.NavSection>{footerSections(section)}</S.NavSection>
                </S.NavigationContainer>
            </S.Section>
        </S.StyledContainer>
    )
}

export default Footer

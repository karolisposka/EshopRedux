import React, { useState } from "react"
import * as S from "./Footer.styles"
import FooterListItem from "../footerListItem/FooterListItem"

const Footer = () => {
    const list = ["services", "about", "contacts"]
    const [section, setSection] = useState(list[0])

    const footerSections = (section) => {
        if (section === "services") {
            return (
                <S.SectionText>
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
                </S.SectionText>
            )
        }
        if (section === "about") {
            return (
                <S.SectionText>
                    <S.Title>About</S.Title>
                </S.SectionText>
            )
        }
        if (section === "contacts") {
            return (
                <S.SectionText>
                    <S.Title>Contacts</S.Title>
                </S.SectionText>
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
                                    ></FooterListItem>
                                ))}
                        </S.ItemsList>
                    </S.ItemsListContainer>
                    <S.NavSection>{footerSections(section)}</S.NavSection>
                </S.NavigationContainer>
                <S.InputContainer>
                    <S.Text>JOIN OUR NEWSLETTER</S.Text>
                    <S.Span>10% off for new subscribers</S.Span>
                    <S.Form>
                        <S.StyledInput
                            type="email"
                            placeholder="Enter your email address"
                            name="newsletter"
                            handleChange={() => {
                                alert("news letter")
                            }}
                        />
                        <S.StyledButton type="submit">Sign up</S.StyledButton>
                    </S.Form>
                </S.InputContainer>
            </S.Section>
        </S.StyledContainer>
    )
}

export default Footer

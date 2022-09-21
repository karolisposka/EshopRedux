import React, { useState } from "react"
import { TransitionGroup, cssTransition } from "react-transition-group"
import * as S from "./FooterListItem.styles"

const FooterListItem = ({ title, text }) => {
    const [expanded, setExpanded] = useState(false)
    return (
        <>
            <S.ListItem
                onClick={() => {
                    setExpanded(!expanded)
                }}
            >
                {title}
            </S.ListItem>
            <S.TextWrapper expanded={expanded}> {text}</S.TextWrapper>
        </>
    )
}

export default FooterListItem

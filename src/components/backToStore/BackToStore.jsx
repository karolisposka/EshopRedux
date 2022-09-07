import React from "react"
import * as S from "./BackToStore.styles"
import { useNavigate } from "react-router-dom"

const BackToStore = () => {
    const navigate = useNavigate()
    return (
        <>
            <S.Container>
                <S.Icon />
                <S.Text>Your bag is empty</S.Text>
                <S.Button
                    onClick={() => {
                        navigate("/")
                    }}
                >
                    Back to store
                </S.Button>
            </S.Container>
        </>
    )
}

export default BackToStore

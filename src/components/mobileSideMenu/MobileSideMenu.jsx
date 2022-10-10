import React, { useEffect } from "react"
import * as S from "./MobileSideMenu.styles"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { loadCategories } from "../../store/products"
import { useNavigate } from "react-router-dom"

const MobileSideMenu = ({ open, handleExit }) => {
    const key = useSelector((state) => state.users.key)
    const navigate = useNavigate()
    const categories = useSelector((state) => state.products.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCategories())
    }, [])

    return (
        <S.SideMenuContainer open={open}>
            <S.Exit onClick={handleExit} />
            <S.AccountBtn
                onClick={() => {
                    !key ? navigate("/account") : navigate("/userDetails")
                }}
            >
                {key ? "Account" : "Login"}
            </S.AccountBtn>
            <S.StyledCategoriesList />
        </S.SideMenuContainer>
    )
}

export default MobileSideMenu

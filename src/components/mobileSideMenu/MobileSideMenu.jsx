import React from "react"
import * as S from "./MobileSideMenu.styles"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux/es/exports"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"

const MobileSideMenu = ({ open, handleExit, routes }) => {
    const key = useSelector((state) => state.users.key)
    const { pathname } = useLocation()
    console.log(pathname)
    const navigate = useNavigate()

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
            {routes ? <S.StyledCategoriesList routes={routes} /> : <div>loading </div>}
        </S.SideMenuContainer>
    )
}

MobileSideMenu.propTypes = {
    open: PropTypes.bool.isRequired,
}

export default MobileSideMenu

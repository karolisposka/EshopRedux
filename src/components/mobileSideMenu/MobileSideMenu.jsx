import React from "react"
import * as S from "./MobileSideMenu.styles"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { allDataDeleted } from "../../store/userOrders"
import { userKeyDeleted } from "../../store/users"
import PropTypes from "prop-types"

const MobileSideMenu = ({ open, handleExit, routes }) => {
    const key = useSelector((state) => state.users.key)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <S.SideMenuContainer open={open}>
            <S.Exit onClick={handleExit} />(
            <S.AccountBtn
                onClick={() => {
                    !key ? navigate("/account") : navigate("/userDetails")
                }}
            >
                {key ? "Account" : "Login"}
            </S.AccountBtn>
            {key && (
                <S.AccountBtn
                    onClick={() => {
                        dispatch(allDataDeleted())
                        dispatch(userKeyDeleted())
                        setTimeout(() => {
                            navigate("/")
                        }, [])
                    }}
                >
                    LOGOUT
                </S.AccountBtn>
            )}
            {routes ? <S.StyledCategoriesList routes={routes} /> : <div>loading </div>}
        </S.SideMenuContainer>
    )
}

MobileSideMenu.propTypes = {
    open: PropTypes.bool.isRequired,
}

export default MobileSideMenu

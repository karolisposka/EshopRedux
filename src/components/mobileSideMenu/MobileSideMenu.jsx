import React from "react"
import * as S from "./MobileSideMenu.styles"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useLocation } from "react-router-dom"
import { allDataDeleted } from "../../store/userOrders"
import { userKeyDeleted } from "../../store/users"
import PropTypes from "prop-types"
import Loader from "../loader/Loader"

const MobileSideMenu = ({ open, handleExit, routes }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const key = useSelector((state) => state.users.key)
    const { pathname } = useLocation()

    return (
        <S.SideMenuContainer open={open}>
            <S.Exit onClick={handleExit} />
            {pathname.toLowerCase().includes("userdetails") || pathname.toLowerCase().includes("account") ? (
                <S.Back
                    onClick={() => {
                        navigate("/")
                    }}
                />
            ) : (
                <S.MobileMenuBtn
                    onClick={() => {
                        !key ? navigate("/account") : navigate("/userDetails")
                    }}
                >
                    {key ? "Account" : "Login"}
                </S.MobileMenuBtn>
            )}
            {routes ? <S.StyledCategoriesList routes={routes} /> : <Loader />}
            {key && (
                <S.MobileMenuBtn
                    onClick={() => {
                        dispatch(allDataDeleted())
                        dispatch(userKeyDeleted())
                        setTimeout(() => {
                            navigate("/")
                        }, [500])
                    }}
                >
                    LOGOUT
                </S.MobileMenuBtn>
            )}
        </S.SideMenuContainer>
    )
}

MobileSideMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    handleExit: PropTypes.func.isRequired,
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ),
}

export default MobileSideMenu

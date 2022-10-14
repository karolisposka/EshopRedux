import React from "react"
import PropTypes from "prop-types"
import * as S from "./AdminPageLayout.styles"

const AdminPageLayout = ({ children }) => {
    return <S.Container>{children}</S.Container>
}

AdminPageLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AdminPageLayout

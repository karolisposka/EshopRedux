import React from "react"
import Container from "../components/Container/Container"
import { Outlet } from "react-router-dom"
import HorizontalNav from "../components/horizontalNav/HorizontalNav"
import AdminPageLayout from "../components/adminPageLayout/AdminPageLayout"

const Admin = () => {
    const links = [
        {
            to: "form",
            title: "Add Product",
        },
        {
            to: "",
            title: "Orders",
        },
        {
            to: "completed",
            title: "Completed Orders",
        },
    ]
    return (
        <Container>
            <HorizontalNav links={links} />
            <AdminPageLayout>
                <Outlet />
            </AdminPageLayout>
        </Container>
    )
}

export default Admin

import React, { useState } from "react"
import * as S from "./UserDetails.styles"
import MainContainer from "../mainContainer/MainContainer"
import Container from "../Container/Container"
import Footer from "../footer/Footer"
import AddressBook from "../addressBook/AddressBook"
import UserDetailsList from "../userDetailsList/UserDetailsList"
import AddAddressForm from "../addAddressForm/AddAddressForm"
import { getUserDetails, setAddressAsDefault, deleteAddress, PostAddress, userKeyDeleted } from "../../store/users"
import { useDispatch, useSelector } from "react-redux"

const UserDetails = () => {
    const [showForm, setShowForm] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)

    const userData = useSelector((state) => state.users)
    const address = userData.address
    const dispatch = useDispatch()
    const checkStatus = (status) => {
        if (status === 0) {
            return 1
        } else {
            return 0
        }
    }

    const renderSwitch = (param) => {
        switch (param) {
            case 1: {
                return (
                    <S.TitleContainer>
                        <S.TextWrapper>
                            <S.StyledOrdersIcon />
                            <S.Title>my Orders</S.Title>
                        </S.TextWrapper>
                    </S.TitleContainer>
                )
            }
            case 2: {
                return (
                    <S.TitleContainer>
                        <S.TextWrapper>
                            <S.StyledHistoryIcon />
                            <S.Title>Orders History</S.Title>
                        </S.TextWrapper>
                    </S.TitleContainer>
                )
            }
            case 3: {
                return (
                    <S.TitleContainer>
                        <S.TextWrapper>
                            <S.Title> Address Book </S.Title>
                            <S.AddAddress
                                onClick={() => {
                                    setShowForm(!showForm)
                                }}
                            >
                                {showForm ? "Close form" : "Add New Address"}
                            </S.AddAddress>
                            {showForm && (
                                <AddAddressForm
                                    handleSubmit={(values) => {
                                        console.log(values)
                                        dispatch(PostAddress(values))
                                    }}
                                    handleClose={() => {
                                        setShowForm(false)
                                    }}
                                />
                            )}
                            <AddressBook
                                data={userData}
                                handleDelete={(id) => {
                                    dispatch(deleteAddress(id))
                                }}
                            />
                        </S.TextWrapper>
                    </S.TitleContainer>
                )
            }
            default: {
                return alert("error")
            }
        }
    }

    const listItems = [
        {
            text: "user details",
            cool: "test",
            handleClick: () => {
                setPageNumber(1)
            },
        },
        {
            text: "orders history",
            cool: "test",
            handleClick: () => {
                setPageNumber(2)
            },
        },
        {
            text: "address book",
            cool: "test",
            handleClick: () => {
                setPageNumber(3)
                dispatch(getUserDetails())
            },
        },
    ]

    return (
        <MainContainer>
            <Container>
                {/* <S.StyledCarousel items={test} /> */}
                <S.ContentSection>
                    <UserDetailsList
                        items={listItems}
                        handleClick={() => {
                            dispatch(userKeyDeleted())
                        }}
                    />
                    <S.WindowWrapper>{renderSwitch(pageNumber)}</S.WindowWrapper>
                </S.ContentSection>
            </Container>
            <Footer />
        </MainContainer>
    )
}

export default UserDetails

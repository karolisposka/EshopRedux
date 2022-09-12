import React, { useState } from "react"
import * as S from "./UserDetails.styles"
import { CSSTransition } from "react-transition-group"
import MainContainer from "../mainContainer/MainContainer"
import Container from "../Container/Container"
import Footer from "../footer/Footer"
import AddressBook from "../addressBook/AddressBook"
import UserDetailsList from "../userDetailsList/UserDetailsList"
import AddAddressForm from "../addAddressForm/AddAddressForm"
import { getUserDetails, setAddressAsDefault, deleteAddress, PostAddress, userKeyDeleted } from "../../store/users"
import { useDispatch, useSelector } from "react-redux"

const UserDetails = () => {
    const dispatch = useDispatch()
    const [showForm, setShowForm] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)

    const userData = useSelector((state) => state.users)

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
                            {!showForm && (
                                <S.AddAddress
                                    onClick={() => {
                                        setShowForm(!showForm)
                                    }}
                                >
                                    Add New Address
                                </S.AddAddress>
                            )}
                            {showForm && (
                                <CSSTransition on={showForm} timeout={300} classNames="fade">
                                    <>
                                        <AddAddressForm
                                            handleSubmit={(values) => {
                                                dispatch(PostAddress(values))
                                            }}
                                            handleClose={() => {
                                                setShowForm(false)
                                            }}
                                        />
                                    </>
                                </CSSTransition>
                            )}

                            <AddressBook
                                data={userData}
                                handleChange={(data) => {
                                    dispatch(setAddressAsDefault({ id: data.id, status: checkStatus(data.status) }))
                                }}
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
            handleClick: () => {
                setPageNumber(1)
            },
        },
        {
            text: "orders history",
            handleClick: () => {
                setPageNumber(2)
            },
        },
        {
            text: "address book",
            handleClick: () => {
                setPageNumber(3)
            },
        },
    ]

    return (
        <MainContainer>
            <Container>
                <S.StyledCarousel items={listItems} />
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

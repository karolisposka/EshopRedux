import React, { useState, useEffect } from "react"
import * as S from "./AddressBook.styles"
import AddressCard from "../addressCard/AddressCard"
import ErrorNotification from "../errorNotification/ErrorNotification"
import { PostAddress, deleteAddress, setAddressAsDefault, getUserDetails } from "../../store/users"
import { useDispatch, useSelector } from "react-redux"
import NoData from "../noData/NoData"
import { CSSTransition, TransitionGroup } from "react-transition-group"

const AddressBook = () => {
    const dispatch = useDispatch()
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        dispatch(getUserDetails())
    }, [])

    const data = useSelector((state) => state.users)

    const handleSubmit = (values) => {
        dispatch(PostAddress(values))
    }
    const handleDelete = (value) => {
        dispatch(deleteAddress(value))
    }
    const handleChange = (values) => {
        const activeItems = data.address.filter((item) => item.default_status === 1)
        if (activeItems.length === 0 && values.status === 0) {
            dispatch(
                setAddressAsDefault({
                    id: values.id,
                    status: ChangeCheckBoxValue(values.status),
                })
            )
        }
        if (values.status === 1) {
            dispatch(
                setAddressAsDefault({
                    id: values.id,
                    status: ChangeCheckBoxValue(values.status),
                })
            )
        }
        if (activeItems.length >= 1 && values.status === 0) {
            return alert("invalid selection")
        }
    }

    const ChangeCheckBoxValue = (status) => {
        if (status === 1) {
            return 0
        } else {
            return 1
        }
    }

    return (
        <S.Container>
            <S.TitleWrapper>
                <S.AddressBookIcon />
                <S.Title>Address Book</S.Title>
                <TransitionGroup component="null">
                    {!showForm && (
                        <CSSTransition on={!showForm} timeout={200} classNames="opacity">
                            <S.DisplayFormBtn
                                onClick={() => {
                                    setShowForm(true)
                                }}
                            >
                                Add address
                            </S.DisplayFormBtn>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </S.TitleWrapper>
            <TransitionGroup component="null">
                {showForm && (
                    <CSSTransition on={showForm} timeout={200} classNames="display">
                        <S.StyledAddAddressForm
                            className="display"
                            handleClose={() => {
                                setShowForm(false)
                            }}
                            handleSubmit={(values) => {
                                handleSubmit(values)
                            }}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
            <S.AddressBook>
                {data.address.length > 0 ? (
                    data.address.map((item, index) => (
                        <AddressCard
                            key={index}
                            lastName={item.last_name}
                            firstName={item.first_name}
                            city={item.city}
                            address={item.address}
                            mobile={item.mobile}
                            postCode={item.post_node}
                            checked={item.default_status}
                            handleDelete={() => {
                                handleDelete(item.id)
                            }}
                            handleChange={() => {
                                handleChange({ id: item.id, status: item.default_status })
                            }}
                        />
                    ))
                ) : (
                    <NoData />
                )}
            </S.AddressBook>
        </S.Container>
    )
}

export default AddressBook

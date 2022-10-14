import React, { useState, useEffect } from "react"
import * as S from "./AddressBook.styles"
import Loader from "../loader/Loader"
import { PostAddress, getUserDetails } from "../../store/users"
import { useDispatch, useSelector } from "react-redux"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import AddressBookList from "../addressBookList/AddressBookList"

const AddressBook = () => {
    const dispatch = useDispatch()
    const [showForm, setShowForm] = useState(false)
    const { address, loading } = useSelector((state) => state.users)

    useEffect(() => {
        if (address.length !== 0) {
            return
        }
        dispatch(getUserDetails())
    }, [address])

    const handleSubmit = (values) => {
        dispatch(PostAddress(values))
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
                                handleClick={() => {
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
            {loading ? <Loader /> : <AddressBookList data={address} />}
        </S.Container>
    )
}

export default AddressBook

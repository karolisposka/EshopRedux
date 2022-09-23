import React, { useState } from "react"
import * as S from "./AddressBook.styles"
import AddressCard from "../addressCard/AddressCard"
import ErrorNotification from "../errorNotification/ErrorNotification"
import NoData from "../noData/NoData"
import { CSSTransition, TransitionGroup } from "react-transition-group"

const AddressBook = ({ data, handleChange, handleDelete, handleSubmit }) => {
    const [showForm, setShowForm] = useState(false)
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
                            handleSubmit={handleSubmit}
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

import React from "react"
import * as S from "./AddressBook.styles"
import AddressCard from "../addressCard/AddressCard"
import ErrorNotification from "../errorNotification/ErrorNotification"

const AddressBook = ({ data, handleChange, handleDelete }) => {
    return (
        <S.AddressBook>
            {data.address.length > 0 ? (
                data.address.map((item) => (
                    <AddressCard
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
                <ErrorNotification>No data found</ErrorNotification>
            )}
        </S.AddressBook>
    )
}

export default AddressBook

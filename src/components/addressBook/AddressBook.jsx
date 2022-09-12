import React from "react"
import * as S from "./AddressBook.styles"
import AddressCard from "../addressCard/AddressCard"

const AddressBook = ({ data, handleChange, handleDelete }) => {
    const setStatus = (status) => {
        if (status === 0) {
            return 1
        } else {
            return 0
        }
    }
    return (
        <S.AddressBook>
            {data.address ? (
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
                <div>{data.error.err}</div>
            )}
        </S.AddressBook>
    )
}

export default AddressBook

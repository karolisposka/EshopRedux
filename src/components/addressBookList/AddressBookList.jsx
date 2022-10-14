import React from "react"
import * as S from "./AddressBookList.styles"
import PropTypes from "prop-types"
import NoData from "../noData/NoData"
import { useDispatch } from "react-redux"
import { deleteAddress, setAddressAsDefault } from "../../store/users"
import AddressCard from "../addressCard/AddressCard"

const AddressBookList = ({ data }) => {
    const dispatch = useDispatch()

    const handleDelete = (value) => {
        dispatch(deleteAddress(value))
    }

    const ChangeCheckBoxValue = (status) => {
        if (status === 1) {
            return 0
        } else {
            return 1
        }
    }

    const handleChange = (values) => {
        const activeItems = data.filter((item) => item.default_status === 1)
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

    return (
        <>
            {data.length > 0 ? (
                <S.AddressBookList>
                    {data.map((item, index) => (
                        <AddressCard
                            key={index}
                            id={item.id}
                            lastName={item.last_name}
                            firstName={item.first_name}
                            city={item.city}
                            address={item.address}
                            mobile={item.mobile}
                            postCode={item.post_code}
                            checked={item.default_status}
                            handleDelete={() => {
                                handleDelete(item.id)
                            }}
                            handleChange={() => {
                                handleChange({ id: item.id, status: item.default_status })
                            }}
                        />
                    ))}
                </S.AddressBookList>
            ) : (
                <NoData text="No data found" />
            )}
        </>
    )
}

AddressBookList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            last_name: PropTypes.string.isRequired,
            first_name: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            mobile: PropTypes.string.isRequired,
            post_code: PropTypes.string.isRequired,
            default_status: PropTypes.oneOf([0, 1]),
        })
    ),
}

export default AddressBookList

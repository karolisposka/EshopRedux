import React from "react"
import * as S from "./AddressCard.styles"
import PropTypes from "prop-types"
import { useSelector } from "react-redux/es/exports"

const AddressCard = ({
    firstName,
    lastName,
    address,
    city,
    postCode,
    mobile,
    checked,
    handleChange,
    handleDelete,
    id,
}) => {
    const { loading } = useSelector((state) => state.users)
    return (
        <S.AddressCard key={id}>
            <S.AddressDetailsSection>
                <S.AddressDetails>{firstName + " " + lastName}</S.AddressDetails>
                <S.AddressDetails>{address}</S.AddressDetails>
                <S.AddressDetails>{city}</S.AddressDetails>
                <S.AddressDetails>{postCode}</S.AddressDetails>
                <S.AddressDetails>{mobile}</S.AddressDetails>
                <S.CheckBoxWrapper>
                    {loading ? (
                        <S.StyledLoader />
                    ) : (
                        <S.CheckBox
                            type="checkbox"
                            defaultChecked={checked === 0 ? false : true}
                            onChange={handleChange}
                            value={checked === 0 ? false : true}
                        />
                    )}
                    <S.Label>Set as default address </S.Label>
                </S.CheckBoxWrapper>
            </S.AddressDetailsSection>
            <S.DeleteButton onClick={handleDelete} />
        </S.AddressCard>
    )
}

AddressCard.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    postCode: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    checked: PropTypes.oneOf([0, 1]),
    handleChange: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
}

export default AddressCard

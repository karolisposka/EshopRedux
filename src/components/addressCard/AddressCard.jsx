import React from "react"
import * as S from "./AddressCard.styles"
import { useSelector } from "react-redux/es/exports"

const AddressCard = React.forwardRef(
    ({ firstName, lastName, address, city, postCode, mobile, checked, handleChange, handleDelete, id }, ref) => {
        const loading = useSelector((state) => state.users.loading)
        return (
            <S.AddressCard key={id} ref={ref}>
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
                                ref={ref}
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
)

export default AddressCard

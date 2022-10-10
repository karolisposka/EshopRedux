import Styled from "styled-components"
import { FaExclamation } from "react-icons/fa"
import Select from "react-select"

export const SelectContainer = Styled.div`
      

`

export const Icon = Styled(FaExclamation)`
    
    
`
export const StyledSelect = Styled(Select)`
    box-shadow:${(props) => props.theme.shadows.primary};
    font-family${(props) => props.theme.fonts.names.primary};
`

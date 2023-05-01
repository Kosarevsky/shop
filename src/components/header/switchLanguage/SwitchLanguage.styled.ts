import Select from "@mui/material/Select";
import styled from "styled-components";

const StyledSelect = styled(Select)`
    && {
        padding-right: 1rem;
        color: ${({ theme }) => theme.header.color};
        .MuiOutlinedInput-notchedOutline {
            border-width: 1px !important;
            border-color: ${({ theme }) => theme.header.color} !important;
        }
        .MuiSelect-icon {
            color: ${({ theme }) => theme.header.color};
        }
    }
`;

export default StyledSelect;

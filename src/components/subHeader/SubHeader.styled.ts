import TextField from "@mui/material/TextField";
import { GoSearch } from "react-icons/go";
import { MdClear } from "react-icons/md";
import styled from "styled-components";

const S = {
    container: styled.div`
        display: flex;
        padding: 10px 0;
        justify-content: space-between;
    `,
    logo: styled.div``,
    logoImg: styled.img``,
    center: styled.div``,
    right: styled.div``,
};

export const StyledTextField = styled(TextField)`
    & label.Mui-focused {
        color: ${({ theme }) => theme.text};
    }
    & .MuiOutlinedInput-root {
        fieldset {
            border-color: ${({ theme }) => theme.text};
        }
        &:hover fieldset {
            border-color: ${({ theme }) => theme.text};
        }
        &.Mui-focused fieldset {
            border-color: ${({ theme }) => theme.text};
        }
    }
`;

export const StyledGoSearch = styled(GoSearch)`
    color: ${({ theme }) => theme.text};
`;

export const StyledMdClear = styled(MdClear)`
    color: ${({ theme }) => theme.text};
`;

export default S;

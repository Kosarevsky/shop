import { Login } from '@mui/icons-material';
import styled from "styled-components";

export const StyledLogin = styled(Login)(({theme})=>({
    color: theme.header.color,
    height: "35px !important",
    width: "35px !important",
    margin: "0 2rem 0 0",
    "&:hover": {
        color: theme.header.color,
    }
}));



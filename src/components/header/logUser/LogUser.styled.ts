import { Login } from '@mui/icons-material';
import styled from "styled-components";

export const StyledLogin = styled(Login)(({theme})=>({
    color: theme.header.color,
    height: "35px !important",
    width: "35px !important",
    "&:hover": {
        color: theme.header.color,
    }
}));



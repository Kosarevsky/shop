import React from "react";

import S, { StyledLogin } from "./Header.styled";
import SwitchTheme from "./switchTheme/SwitchTheme";
import SwitchLanguage from "./switchLanguage/SwitchLanguage";
import { useNavigate } from "react-router-dom";
import TextField from "../ui/textField/TextField";
import useDebounceValue from "../hooks/useDebounceValue";


const logo = require("../../assets/img/logo.png");

const Header: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }

    const [query, debounceQuery, setQuery] = useDebounceValue("", 500)

    return (
        <S.header>
            <S.container>
                <S.logo onClick={handleClick}>
                    <S.logoImg alt="Logo" src={logo} />
                </S.logo>
                <S.center>
                    <TextField
                        label="Query"
                        value={query}
                        setValue={setQuery}
                    />
                </S.center>
                <S.right>
                    <SwitchTheme />
                    <S.link to="/login">
                        <StyledLogin />
                    </S.link>
                    <SwitchLanguage />
                </S.right>
            </S.container>
        </S.header>
    );
};

export default Header;

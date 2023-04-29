import React from "react";
import S from "./Header.styled";
import SwitchTheme from "./switchTheme/SwitchTheme";

const logo = require("../../assets/img/logo.png");

const Header: React.FC = () => {
    return (
        <S.container>
            <S.logo>
                <S.logoImg alt="Logo" src={logo} />
            </S.logo>
            <S.center>center</S.center>
            <S.right>
                <SwitchTheme />
            </S.right>
        </S.container>
    );
};

export default Header;

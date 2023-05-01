import React from "react";
import S from "./Header.styled";
import SwitchTheme from "./switchTheme/SwitchTheme";
import SwitchLanguage from "./switchLanguage/SwitchLanguage";
import LogUser from "./login/Login";

const logo = require("../../assets/img/logo.png");

const Header: React.FC = () => {
    return (
        <S.header>
            <S.container>
                <S.logo>
                    <S.logoImg alt="Logo" src={logo} />
                </S.logo>
                <S.center>center</S.center>
                <S.right>
                    <SwitchTheme />
                        <LogUser />
                    <SwitchLanguage />
                </S.right>
            </S.container>
        </S.header>
    );
};

export default Header;

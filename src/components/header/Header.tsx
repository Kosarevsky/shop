import React from "react";
import S from "./Header.styled";
import SwitchTheme from "./switchTheme/SwitchTheme";
import SwitchLanguage from "./switchLanguage/SwitchLanguage";
import { useTranslation } from 'react-i18next';

const logo = require("../../assets/img/logo.png");

const Header: React.FC = () => {
    const { t } = useTranslation();
    console.log(t("header.about"));
    return (
        <S.container>
            <S.logo>
                <S.logoImg alt="Logo" src={logo} />
            </S.logo>
            <S.center>center</S.center>
            <S.right>
                <SwitchTheme />
                <SwitchLanguage />
            </S.right>
        </S.container>
    );
};

export default Header;

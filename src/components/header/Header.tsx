import React from "react";
import S, { StyledLogin } from "./Header.styled";
import SwitchTheme from "./switchTheme/SwitchTheme";
import SwitchLanguage from "./switchLanguage/SwitchLanguage";
import { useNavigate } from "react-router-dom";
import ShopWrapper from "../shopWrapper/ShopWrapper.styled";

const logo = require("../../assets/img/logo.png");

const Header: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }

    return (
        <S.header>
            <ShopWrapper>
                <S.container>
                    <S.logo onClick={handleClick}>
                        <S.logoImg alt="Logo" src={logo} />
                    </S.logo>
                    <S.center>
                    </S.center>
                    <S.right>
                        <SwitchTheme />
                        <S.link to="/login">
                            <StyledLogin />
                        </S.link>
                        <SwitchLanguage />
                    </S.right>
                </S.container>
            </ShopWrapper>
        </S.header >
    );
};

export default Header;

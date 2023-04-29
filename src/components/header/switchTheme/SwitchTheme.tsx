import React from "react";
import S from "./SwitchTheme.styled";
import { MdWbSunny, MdDarkMode } from "react-icons/md";

const SwitchTheme: React.FC = () => {
    return (
        <S.container>
            <S.MdWbSunny />
            <S.MdDarkMode />
        </S.container>
    );
};

export default SwitchTheme;

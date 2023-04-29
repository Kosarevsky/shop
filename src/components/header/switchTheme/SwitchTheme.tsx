import React from "react";
import S from "./SwitchTheme.styled";
import Switch from "@mui/material/Switch";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { settingsAction } from "../../../store/settings/settingsSlice";
import { ThemeNameType } from "../../../theme/themes";

const SwitchTheme: React.FC = () => {
    const dispatch = useAppDispatch();
    const isDarkTheme = useAppSelector((state => state.settings.themeName===ThemeNameType.dark))
    const handleToggleTheme = () => {
        dispatch(settingsAction.toggleTheme());
    };

    return (
        <S.container>
            <S.MdWbSunny />
            <Switch checked={isDarkTheme} onClick={handleToggleTheme} defaultChecked color="default" />
            <S.MdDarkMode />
        </S.container>
    );
};

export default SwitchTheme;

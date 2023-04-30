import { useAppDispatch, useAppSelector } from "../../../store/store";
import { settingsAction } from "../../../store/settings/settingsSlice";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import StyledSelect from "./SwitchLanguage.styled";
import { LanguageType } from "../../../types/languageType";
import { useTranslation } from "react-i18next";
import { SelectChangeEvent } from "@mui/material";
import '../../../utils/i18n/config'
import { t } from "i18next";

const SwitchLanguage = () => {
    const { i18n } = useTranslation();

    const dispatch = useAppDispatch();
    const language = useAppSelector((state) => state.settings.language);


    const changeLanguage = (e: SelectChangeEvent<unknown>) => {
        i18n.changeLanguage(e.target.value as string);
        dispatch(settingsAction.changeLanguage(e.target.value));
    };

    return (
        <div>
            <div><h1>{t("title")}</h1></div>
            <div>{t("description.part1")}</div>
            <div>{t("description.part2")}</div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="switch-language-select-autowidth-label">
                    lng
                </InputLabel>
                <StyledSelect
                    labelId="switch-language-select-autowidth-label"
                    id="switch-language-select-autowidth"
                    value={language}
                    onChange={changeLanguage}
                    autoWidth
                    label="Age"
                >
                    {Object.values(LanguageType).map((item: string) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </StyledSelect>
            </FormControl>
        </div>
    );
};

export default SwitchLanguage;

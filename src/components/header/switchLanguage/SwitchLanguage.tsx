import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useTranslation } from "react-i18next";
import {
    LanguageType,
    settingsAction,
} from "../../../store/settings/settingsSlice";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import StyledSelect from "./SwitchLanguage.styled";
import { SelectChangeEvent } from "@mui/material";

const SwitchLanguage = () => {
    const { i18n } = useTranslation();
    const dispatch = useAppDispatch();
    const language = useAppSelector((state) => state.settings.language);

    const changeLanguage = (e: SelectChangeEvent<unknown>) => {
        console.log(321, e.target.value);
        //i18n.changeLanguage(language);
        dispatch(settingsAction.changeLanguage(e.target.value));
    };

    return (
        <div>
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

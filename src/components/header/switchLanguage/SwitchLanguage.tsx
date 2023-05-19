import { useAppDispatch, useAppSelector } from "../../../store/store";
import { settingsAction } from "../../../store/settings/settingsSlice";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import StyledSelect from "./SwitchLanguage.styled";
import { LanguageType } from "../../../types/languageType";
import { SelectChangeEvent } from "@mui/material";
import i18n from "../../../utils/i18nConfig";

const SwitchLanguage = () => {
    const dispatch = useAppDispatch();
    const language = useAppSelector((state) => state.settings.language);

    const changeLanguage = (e: SelectChangeEvent<unknown>) => {
        i18n.changeLanguage(e.target.value as string);
        dispatch(settingsAction.changeLanguage(e.target.value));
    };

    return (
        <div>
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
        </div>
    );
};

export default SwitchLanguage;

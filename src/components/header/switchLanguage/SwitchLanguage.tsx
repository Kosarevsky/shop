import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useTranslation } from 'react-i18next';
import { LanguageType, settingsAction } from "../../../store/settings/settingsSlice";

const SwitchLanguage = () => {
    const { i18n } = useTranslation();
    const dispatch = useAppDispatch();
    const language = useAppSelector((state) => state.settings.language);

    const changeLanguage = (e: SelectChangeEvent) => {
        console.log(321, e.target.value);
        //i18n.changeLanguage(e.target.value);
        dispatch(settingsAction.changeLanguage(e.target.value))
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={language}
                    onChange={changeLanguage}
                    autoWidth
                    label="Age"
                >
                    {
                        Object.values(LanguageType).map((item: string) => (
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        ))
                    }

                </Select>
            </FormControl>
        </div>
    );
};

export default SwitchLanguage;

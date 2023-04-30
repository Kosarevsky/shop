import '../utils/i18nConfig'
import { t } from "i18next";

export const HomePage = () => {
    return <div>
            <div><h1>{t("title")}</h1></div>
            <div>{t("description.part1")}</div>
            <div>{t("description.part2")}</div>
        </div>;
};



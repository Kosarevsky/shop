import FavouritesPage from "./FavouritesPage";
import { HomePage } from "./HomePage";
import { ThemeProvider } from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ShopWrapper from "./shopWrapper/ShopWrapper.styled";
import Header from "./header/Header";
import { useAppSelector } from "../store/store";
import { GlobalStyles } from "./GlobalStyles";
import { I18nextProvider, useTranslation } from "react-i18next";
import Login from "./header/login/Login";

const App: React.FC = () => {
    const theme = useAppSelector((state) => state.settings.theme);
    const { i18n } = useTranslation();
    return (
        <>
            <I18nextProvider i18n={i18n}>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <BrowserRouter>
                        <Header />
                        <ShopWrapper>
                            <Routes>
                                <Route path="/" element={<HomePage />}></Route>
                                <Route path="/login" element={<Login />}></Route>
                                <Route
                                    path="/favourites"
                                    element={<FavouritesPage />}
                                ></Route>
                            </Routes>
                        </ShopWrapper>
                    </BrowserRouter>
                </ThemeProvider>
            </I18nextProvider>
        </>
    );
};

export default App;

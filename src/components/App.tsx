import FavouritesPage from "./FavouritesPage";
import { HomePage } from "./HomePage";
import { ThemeProvider } from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ShopWrapper from "./shopWrapper/ShopWrapper.styled";
import Header from "./header/Header";
import { useAppSelector } from "../store/store";
import { GlobalStyles } from "./GlobalStyles";

const App: React.FC = () => {
    const theme = useAppSelector((state) => state.settings.theme);

    console.log(theme);
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <BrowserRouter>
                    <Header />
                    <ShopWrapper>
                        <Routes>
                            <Route path="/" element={<HomePage />}></Route>
                            <Route
                                path="/favourites"
                                element={<FavouritesPage />}
                            ></Route>
                        </Routes>
                    </ShopWrapper>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
};

export default App;

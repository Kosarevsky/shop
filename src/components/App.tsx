import FavouritesPage from "./FavouritesPage";
import { HomePage } from "./HomePage";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import ShopWrapper from "./shopWrapper/ShopWrapper.styled";
import Header from "./header/Header";
import { useAppSelector } from "../store/store";

function App() {
    const theme = useAppSelector((state) => state.settings.theme);

    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
}

export default App;

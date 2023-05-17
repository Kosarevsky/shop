import '../utils/i18nConfig'
import { t } from "i18next";
import CarouselComponent from './carousel/Carousel';
import Categories from './pages/categories/Categories';

export const HomePage = () => {
    return <div>
        <CarouselComponent />
        <Categories />
    </div>;
};



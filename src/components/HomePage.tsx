import '../utils/i18nConfig'
import CarouselComponent from './carousel/Carousel';
import Categories from './pages/home/categories/HomeCategories';
import ShopWrapper from './shopWrapper/ShopWrapper.styled';

export const HomePage = () => {
    return <div>
        <CarouselComponent />
        <ShopWrapper>
            <Categories />
        </ShopWrapper>
    </div>;
};



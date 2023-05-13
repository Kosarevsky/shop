import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import S from './Carousel.styled';
import { t } from "i18next"

const CarouselComponent: React.FC = () => {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop showThumbs={false} useKeyboardArrows autoPlay showStatus={false} swipeable>
                <div>
                    <img src={require("../../assets/img/carousel/carousel1.jpg")} alt='coolImg1' />
                    <S.container left={20}>
                        <h1>{t("carousel.slide_one.title")}</h1>
                        <h2>{t("carousel.slide_one.text")}</h2>
                    </S.container>
                </div>
                <div>
                    <img src={require("../../assets/img/carousel/carousel2.jpg")} alt='coolImg1' />
                    <S.container left={50}>
                        <h1>{t("carousel.slide_two.title")}</h1>
                        <h2>{t("carousel.slide_two.text")}</h2>
                    </S.container>
                </div>
                <div>
                    <img src={require("../../assets/img/carousel/carousel3.jpg")} alt='coolImg3' />
                    <S.container left={80}>
                        <h1>{t("carousel.slide_three.title")}</h1>
                        <h2>{t("carousel.slide_three.text")}</h2>
                    </S.container>
                </div>
            </Carousel >
        </div >
    );
};


export default CarouselComponent;

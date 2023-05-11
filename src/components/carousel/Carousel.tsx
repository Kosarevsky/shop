import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react';

const CarouselComponent = () => {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop showThumbs={false} useKeyboardArrows autoPlay showStatus={false} swipeable>
                <div>
                    <img src={require('../../assets/img/carousel/carousel1.jpg')} />
                </div>
                <div>
                    <img src={require('../../assets/img/carousel/carousel2.jpg')} />
                </div>
                <div>
                    <img src={require('../../assets/img/carousel/carousel3.jpg')} />
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselComponent;
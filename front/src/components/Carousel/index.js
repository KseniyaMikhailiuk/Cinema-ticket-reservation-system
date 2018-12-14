import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import filmImage from '../../images/assets/2.jpg'
import './carousel.scss'
import carouselItems from './carouselDB'

const FilmCarousel = () => (
    <Carousel className="film-carousel" 
        showArrows={true}
        showThumbs={false} 
        showIndicators={false} 
        infiniteLoop={true} 
        dynamicHeight={true} 
        autoPlay>
            {
                carouselItems
                    .map(item => 
                        <div>
                            <img src={filmImage}/>
                            <p className="legend">{item.legend}</p>
                        </div>
                    )
            }           
    </Carousel>
);

export default FilmCarousel;
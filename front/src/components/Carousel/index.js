import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import filmImage from '../../images/assets/2.jpg'
import './carousel.scss'

const FilmCarousel = () => (
    <Carousel className="film-carousel" showArrows={true} showThumbs={false} showIndicators={false} infiniteLoop={true} dynamicHeight={true} autoPlay>
                
        <div>
            <img src={filmImage}/>
            <p className="legend">Legend 1</p>
        </div>

        <div>
            <img src={filmImage}/>
            <p className="legend">Legend 2</p>
        </div>

        <div>
            <img src={filmImage}/>
            <p className="legend">Legend 3</p>
        </div>

        <div>
            <img src={filmImage}/>
            <p className="legend">Legend 3</p>
        </div>

    </Carousel>
);

export default FilmCarousel;
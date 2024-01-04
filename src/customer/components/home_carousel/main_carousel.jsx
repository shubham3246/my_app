import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { MainCarouselData } from './mainCarouselData';

const items = MainCarouselData.map((e) => <img src={e.image} alt=''/>);

const HomeCarousel = () => (
    <div className='home_carousel '>
<AliceCarousel
        items={items}
        disableDotsControls
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    </div>
    
);

export default HomeCarousel;
import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick"; 
import CarouselCard from './components/CarouselCard';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//carousel
const StyledCarouselWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > div.slick-slider {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 94%;
        height: 400px;

        & .slick-slide {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

const Carousels = () => {
    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
  return (
    <StyledCarouselWrapper className="slider-container">
        <Slider {...settings}>
            <CarouselCard/>
            <CarouselCard/>
            <CarouselCard/>
            <CarouselCard/>
        </Slider>
    </StyledCarouselWrapper>
  )
}

export default Carousels; 
import React, { useEffect } from 'react';

import Slider from 'react-slick';

const Banner = () => {

    const heroCarouselImages = [
        'https://github.com/mamun02090/chat-application/assets/63799967/2aaed783-53d3-44ff-a9d1-697b38cf476c',
        'https://github.com/mamun02090/chat-application/assets/63799967/3524b592-fa7e-4e28-a573-24c8f705154b',
        'https://github.com/mamun02090/chat-application/assets/63799967/d59313fa-ce3b-4fba-9ad8-62a27b9adcac',
      ]

    const settings = {
        className: 'center',
        infinite: true,
        dots: false,
        centerPadding: '60px',
        slidesToShow: 1,
        swipeToSlide: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
      }
    return (
        <div>
           
           <Slider {...settings}>
        {heroCarouselImages.map((image, index) => {
          return (
            // <img
            //   key={index}
            //   src={image}
            //   alt="hero"
            //   width={1440}
            //   height={810}
            // />
            <img src={image} alt="" srcset="" />
          )
        })}
      </Slider>
        </div>
    );
};

export default Banner;
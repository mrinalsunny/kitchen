// components/Hero.tsx
'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image'; // Optional: for optimized images
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero: React.FC = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 250,
      autoplaySpeed: 2500,
      cssEase: "linear"
    };

    return (
        <div className="container mx-auto pb-8">
            <Slider {...settings} className="carousel">
                <div className="relative">
                    <Image
                        src="/images/caro1.jpg"
                        alt="Slide 1"
                        layout="responsive"
                        width={1200}
                        height={500}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                        <h2 className="text-3xl font-bold">Welcome to Milan Pizza</h2>
                    </div>
                </div>
                <div className="relative">
                    <Image
                        src="/images/caro2.jpg"
                        alt="Slide 2"
                        layout="responsive"
                        width={1200}
                        height={500}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                        <h2 className="text-3xl font-bold">Delicious Pizzas and More</h2>
                    </div>
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
};

export default Hero;

import React, { useState } from "react";
import { json } from "react-router-dom";
import DealBannerComponent from "../Components/DealBannerComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

import HeadingComponent from "../Components/HeadingComp";
export default function DealOfTHeDay({ title, imgs }) {
  const settings = {
    // centerMode: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows:true,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows:false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows:false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows:false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };


  return (
    <div className="deal-heading-img-container mb-5 overflow-hidden1 ms-5 me-5">
      <div className="deal-heading">     
         <HeadingComponent title={title} />
      </div>
      <div className="deal-of-the-day-banner-parent-container d-flex1">
    <Slider {...settings} >
        {imgs.map((i) => {
          return <DealBannerComponent img={i} />;
        })}
    </Slider>
      
      
      </div>
    </div>
  );
}

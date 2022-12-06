import React from "react";
import HeadingComponent from "../Components/HeadingComp";
import TrendsForHerComp from "../Components/TrendsForHerComp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";

export default function TrendsForHer({ title, imgs }) {
  const settings = {
    // centerMode: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: true,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="trend-for-her-title-img ms-5 me-5">
    <div className="trend-for-her-title">
    <HeadingComponent title={title} />

    </div>
      <div className="trend-for-her-img-parent-container ">
      <Slider {...settings}>
      {imgs.map((i) => {
          return <TrendsForHerComp img={i} />;
        })}
        </Slider>
       
        
      </div>
    </div>
  );
}

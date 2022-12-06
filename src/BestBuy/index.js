import React from "react";
import HeadingComponent from "../Components/HeadingComp";
import BestBuyComp from "../Components/BestBuyComp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";

export default function BestBuy({ title, imgs }) {
  const settings = {
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
    <div className="best-buy-title-img ms-5 me-5">
      <div className="best-buy-title">
      <HeadingComponent title={title} />

      </div>
      <div className="best-buy-img-parent-container d-flex1 ">
      <Slider {...settings}>
      {imgs.map((i) => {
          return <BestBuyComp img={i} />;
        })}
        </Slider>
       
       
      </div>
    </div>
  );
}

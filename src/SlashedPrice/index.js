import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeadingComponent from "../Components/HeadingComp";
import SlashedPricesComp from "../Components/SlashedPricesComp";
import "./style.css";

export default function BrandAtSlashedPrice({ title, imgs }) {
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
    <div className="slashed-price-img-title ms-5 me-1">
      <div className="slashed-price-title">
      <HeadingComponent title={title} />

      </div>
      <div className="brands-at-slashed-price-img-parent-container d-flex1 flex-wrap1 ">
      <Slider {...settings}>
      {imgs.map((i) => {
          return <SlashedPricesComp img={i} />;
        })}
        </Slider>
       
      </div>
    </div>
  );
}

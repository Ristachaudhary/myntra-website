import React from "react";
import HeadingComponent from "../Components/HeadingComp";
import StyleCastComp from "../Components/StyleCastComp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";

export default function StyleCast({ imgs, title }) {
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
    <div className="style-cast-title-img  ms-5 me-5">
      <div className="style-cast-title">
      <HeadingComponent title={title} />

      </div>
      <div className="style-cast-img-parent-container ">
      <Slider {...settings}>
      {imgs.map((i) => {
          return <StyleCastComp img={i} />;
        })}
        </Slider>
       
      </div>
    </div>
  );
}

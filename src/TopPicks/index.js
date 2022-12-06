import React from "react";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import HeadingComponent from "../Components/HeadingComp";
import TopPicksImgComponent from "../Components/TopPicksImgComponent/Index";

export default function TopPicks({ title, imgs }) {
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
    <div className="top-picks-img-title-container ms-5 me-5">
      <div className="top-picks-title">
        <HeadingComponent title={title} />
      </div>
      <div className="top-picks-img-parent-container  ">
        <Slider {...settings}>
          {imgs.map((i) => {
            return <TopPicksImgComponent img={i} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

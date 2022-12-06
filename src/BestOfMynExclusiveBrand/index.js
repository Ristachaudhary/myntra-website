import React from "react";
import HeadingComponent from "../Components/HeadingComp";
import BestOfMyntraExeComponent from "../Components/BestOfMyntraExeComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default function BestOfMyntraExclusiveBrand({ title, imgs }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 7,
    arrow:true,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows:false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          arrows:false
        }
      }
    ]
  };
  return (
    <div className="best-of-myntra-exc-brand-parent-container ms-5 me-5">
      <div className="best-of-myntra-title">
      <HeadingComponent title={title} />

      </div>
      <div className="best-myntra-imgs-parent-container  flex-wrap ">
        <Slider {...settings}>
        {imgs.map((i) => {
          return <BestOfMyntraExeComponent img={i} />;
        })}
        </Slider>
        
      </div>
    </div>
  );
}

import React from "react";
import Slider from "react-slick";
import HeadingComp from "../Components/HeadingComp";
import SpringSummerComp from "../Components/SpringSummerComp";
import "./style.css";

export default function SpringSummer2022({ title, imgs }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrow:true,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows:false
        }
      }
    ]
  };

  return (
    <div className="spring-summer-title-img ms-5 me-5">
      <div className="spring-summer-title">
      <HeadingComp title={title} />

      </div>
      <div className="d-flex1 flex-wrap">
        <Slider {...settings}>
        {imgs.map((i) => {
          return <SpringSummerComp img={i} />;
        })}
        </Slider>
        
      </div>
    </div>
  );
}

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default function Banner({img}) {

  const settings = {
    dots: false,
    arrows:true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          arrows:false,
          // prevArrow: false,
          // nextArrow: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
    ]
  };
  
  return (
    <div className="banner-img-parent ms-5 me-5">
      
      <div className="banner-img-container position-relative mb-5">
      <Slider {...settings}>

       {
         img.map((i)=>{
           return <img src={i} className="banner-img position-absolute1" />
           // <div className="banner-img">{i}</div>
          })
        }

        </Slider>
      </div>
      
   
      
    </div>
  );
}

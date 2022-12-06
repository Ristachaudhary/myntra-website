import React from "react";
import Slider from "react-slick";
import DealsTopBrandComp from "../Components/DealsTopBrandComp";
import HeadingComponent from "../Components/HeadingComp";
import "./style.css";

export default function DealsOnTopBrands({ title, imgs }) {
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
          slidesToScroll: 2,
          arrows:false
        }
      }
    ]
  };

  return (
    <div className="deals-on-top-brands-title-img ms-5 me-5">
      <div className="deals-on-top-brands-title">
      <HeadingComponent title={title} />

      </div>
      <div className="deals-on-top-brands-img-parent-container d-flex1 flex-wrap ">
        <Slider {...settings}>
        {imgs.map((i) => {
          return <DealsTopBrandComp img={i} />;
        })}
        </Slider>
        
      </div>
    </div>
  );
}

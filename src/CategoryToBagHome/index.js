import React from "react";
import HeadingComponent from "../Components/HeadingComp";
import CategoryToBagHomeComp from "../Components/CategoryBagHome";
import Slider from "react-slick";
import "./style.css";

export default function CategoryToBagHome({ title, imgs }) {
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
    <div className="category-to-bag-title-img ms-5 me-5">
      <div  className="category-to-bag-title">
      <HeadingComponent title={title} />

      </div>
      <div className="category-to-bag-home-img-parent-cont flex-wrap ">
        <Slider {...settings}>
        {imgs.map((i) => {
          return <CategoryToBagHomeComp img={i} />;
        })}
        </Slider>
        
      </div>
    </div>
  );
}

import React from "react";
import GiftingCardsComp from "../Components/GiftingCardsComp";
import HeadingComponent from "../Components/HeadingComp";

export default function ({ title, imgs }) {
  return (
    <div>
      <div className="gifting-card-heading-text ms-5 me-5">
      <HeadingComponent title={title} 
        />
      </div>
      
      <div className="gifting-cards-img-parent-cont d-flex ">
        {imgs.map((i) => {
          return <GiftingCardsComp img={i} />;
        })}
      </div>
    </div>
  );
}

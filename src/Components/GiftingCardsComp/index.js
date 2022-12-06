import React from "react";
import "./style.css";

export default function GiftingCardsComp({ img }) {
  return (
    <div>
      <img src={img} className="gifting-card-img " />
    </div>
  );
}

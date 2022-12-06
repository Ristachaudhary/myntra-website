import React from "react";
import "./style.css";

export default function BestBuyComp({ img }) {
  return (
    <div className="best-buy-img">
      <img src={img} className="best-buy-img1" />
    </div>
  );
}

import React from "react";
import "./style.css";


export default function DealBannerComponent({ img }) {
  
  return (
    <div className="deal-of-the-day-img-main-container d-flex ms-2">
      <div className="deal-of-the-day-img-cont me-1">
      <img src={img} className="deal-of-the-day-img shadow-sm " />
        </div>
    </div>
  );
}

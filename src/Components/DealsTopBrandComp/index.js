import React from "react";
import "./style.css";

export default function DealsTopBrandComp({ img }) {
  return (
    <div>
      <img src={img} className="deals-on-top-brand-img " />
    </div>
  );
}

import React from "react";
import "./style.css";

export default function SlashedPricesComp({ img }) {
  return (
    <div className="me-4">
      <img src={img} className="slashed-price-img-comp  rounded" />
    </div>
  );
}

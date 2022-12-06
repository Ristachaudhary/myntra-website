import React from "react";
import "./style.css";

export default function ExploreBrandComponent({ img }) {
  return (
    <div className="ms-5 ">
      <img src={img} className="explore-brand-component-img " />
    </div>
  );
}

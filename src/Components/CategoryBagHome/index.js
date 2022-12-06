import React from "react";
import "./style.css";

export default function CategoryToBagHomeComp({ img }) {
  return (
    <div>
      <img src={img} className="category-to-bag-img mb-2 rounded me-31" />
    </div>
  );
}

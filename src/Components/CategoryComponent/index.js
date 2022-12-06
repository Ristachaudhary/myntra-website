import React from "react";
import "./style.css";

export default function CategoryComponent({ img }) {
  return (
    <div>
      <img src={img} className="category-component-img me-4" />
    </div>
  );
}

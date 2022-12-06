import React from "react";
import "./style.css";

export default function NewTopBrandsComp({ img }) {
  return (
    <div>
      <img src={img} className="new-top-brand-img" />
    </div>
  );
}

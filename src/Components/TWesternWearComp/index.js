import React from "react";
import "./style.css";

export default function TWesternWearComp({ img }) {
  return (
    <div>
      <img src={img} className="TWester-wear-comp-img" />
    </div>
  );
}

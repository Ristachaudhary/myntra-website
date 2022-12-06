import React from "react";
import "./style.css";

export default function BestKidComp({ img }) {
  return (
    <div className="me-2">
      <img src={img} className="best-kid-img" />
    </div>
  );
}

import React from "react";
import "./style.css";

export default function TrendsForHimComp({ img }) {
  return (
    <div>
      <img src={img} className="trends-for-him-img" />
    </div>
  );
}

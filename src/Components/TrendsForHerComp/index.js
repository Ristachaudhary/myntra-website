import React from "react";
import "./style.css";

export default function TrendsForHerComp({ img }) {
  return (
    <div>
      <img src={img} className="trends-for-her-img" />
    </div>
  );
}

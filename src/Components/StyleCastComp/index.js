import React from "react";
import "./style.css";

export default function StyleCastComp({ img }) {
  return (
    <div>
      <img src={img} className="style-cast-img" />
    </div>
  );
}

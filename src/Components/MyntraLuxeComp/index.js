import React from "react";
import "./style.css";

export default function MyntraLuxeComp({ img }) {
  return (
    <div>
      <img src={img} className="myntra-luxe-img" />
    </div>
  );
}

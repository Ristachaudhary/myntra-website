import React from "react";
import "./style.css";


export default function TopPicksImgComponent({ img }) {
  return (
    <div className="">
      <img src={img} className="top-picks-img " />
    </div>
  );
}

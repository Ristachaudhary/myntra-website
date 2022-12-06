import React from "react";
import "./style.css";

export default function TopBrandComp({ img1, img2 }) {
  return (
    <div>
      <div className="top-brand-two-image-child-container  ms-5">
        <div>
          <img src={img1} className="top-brand-first-child-img " />
        </div>
        <div>
          <img src={img2} className="top-brand-first-child-img " />
        </div>
      </div>
    </div>
  );
}

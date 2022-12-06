import React from "react";
import "./style.css";

export default function BestOfMyntraExeComponent({ img }) {
  return (
    <div className="best-of-mynt-exe-img-container ">
      <img
        src={img}
        className="best-of-mynt-exe-img me-2 mb-3 shadow rounded"
      />
    </div>
  );
}

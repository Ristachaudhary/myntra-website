import React from "react";
import "./style.css";

export default function HeadingComponent({ title }) {
  return (
    <div>
      <div className="heading-component-text mb-5">{title}</div>
    </div>
  );
}

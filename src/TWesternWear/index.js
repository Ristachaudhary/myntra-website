import React from "react";
import HeadingComponent from "../Components/HeadingComp";
import TWesternWearComp from "../Components/TWesternWearComp";
import Casual from "../assets/TWesternWear/westerncasual.webp";

export default function TWesternWear() {
  return (
    <div className="trending-western-wear-parent-component ms-5">
      <HeadingComponent title="TRENDING IN WESTERN WEAR" />
      <div className="trending-western-wear-img-parent-component">
        <TWesternWearComp img={Casual} />
      </div>
    </div>
  );
}

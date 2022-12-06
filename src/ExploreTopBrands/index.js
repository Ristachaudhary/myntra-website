import React from "react";
import HeadingComponent from "../Components/HeadingComp";
import ExploreBrandComponent from "../Components/ExploreBrandComp";
import Only from "../assets/ExploreBrand/Only.webp";
import EthnicWear from "../assets/ExploreBrand/EthnicWear.webp";
import MAC from "../assets/ExploreBrand/MAC.webp";
import W from "../assets/ExploreBrand/W.webp";
import H_M from "../assets/ExploreBrand/H_M.webp";

export default function ExploreTopBrands() {
  return (
    <div className="explore-top-brand-parent-container ms-1 mb-5">
      <HeadingComponent title="EXPLORE TOP BRANDS" />
      <div className="explore-top-brand-child-main-component d-flex">
        <ExploreBrandComponent img={Only} />
        <ExploreBrandComponent img={EthnicWear} />
        <ExploreBrandComponent img={MAC} />
        <ExploreBrandComponent img={W} />
        <ExploreBrandComponent img={H_M} />
      </div>
    </div>
  );
}

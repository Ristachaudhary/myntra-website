import React from "react";
import CategoryComponent from "../Components/CategoryComponent";
import Kurta_Sets from "../assets/Category/Kurta_Sets.webp";
import Sarees from "../assets/Category/Sarees.webp";
import Dresses from "../assets/Category/Dresses.webp";
import Heels from "../assets/Category/Heels.webp";
import Handbags from "../assets/Category/Handbags.webp";
import Shorts from "../assets/Category/Shorts.webp";
import HeadingComponent from "../Components/HeadingComp";

export default function CategoryToBag() {
  return (
    <div className="category-to-bag-parent-container ">
      <HeadingComponent title="CATEGORIES TO BAG" />
      <div className="category-to-bag-images-main-container d-flex ms-5">
        <CategoryComponent img={Kurta_Sets} />
        <CategoryComponent img={Sarees} />
        <CategoryComponent img={Dresses} />
        <CategoryComponent img={Heels} />
        <CategoryComponent img={Handbags} />
        <CategoryComponent img={Shorts} />
      </div>
    </div>
  );
}

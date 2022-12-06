import React from "react";
import Biba from "../assets/BestBrand/Biba.webp";
import Forever from "../assets/BestBrand/Forever.webp";
import W from "../assets/BestBrand/W.webp";
import Levis from "../assets/BestBrand/Levis.webp";
import M_S from "../assets/BestBrand/M_S.webp";
import GAP from "../assets/BestBrand/GAP.webp";
import Veromodo from "../assets/BestBrand/Veromodo.webp";
import Nike from "../assets/BestBrand/Nike.webp";
import Only from "../assets/BestBrand/Only.webp";
import Puma from "../assets/BestBrand/Puma.webp";
import TopBrandComp from "../Components/TopBrandsComp";
import HeadingComponent from "../Components/HeadingComp";

export default function TopBrands() {
  return (
    <div className="top-brand-parent-container">
      <HeadingComponent title="BIGGEST DEALS ON TOP BRANDS" />
      <div className="top-brand-all-images-main-container d-flex">
        <TopBrandComp img1={Biba} img2={Forever} />
        <TopBrandComp img1={W} img2={Levis} />
        <TopBrandComp img1={M_S} img2={GAP} />
        <TopBrandComp img1={Veromodo} img2={Nike} />
        <TopBrandComp img1={Only} img2={Puma} />
      </div>
    </div>
  );
}

import "./App.css";
import React, { useState } from "react";
import Navbar from "./NavBar";
import InviteSection from "./InviteSection";
import Banner from "./Banner";
import SideBar from "./SideBar";
import DealOfTHeDay from "./DealOfTheDay";
import BestOfMyntraExclusiveBrand from "./BestOfMynExclusiveBrand";
import TopPicks from "./TopPicks";
import CategoryToBagHome from "./CategoryToBagHome";
import DealsOnTopBrands from "./DealsTopBrands";
import BrandAtSlashedPrice from "./SlashedPrice";
import BestBuy from "./BestBuy";
import MyntraLuxe from "./MyntraLuxe";
import GiftingCards from "./GiftingCards";
import SpringSummer2022 from "./SpringSummer";
import StyleCast from "./StyleCast";
import TrendsForHer from "./TrendsForHer";
import TrendsForHim from "./TrendsForHim";
import BestKidsWear from "./BestKidsWear";
import NewTopBrands from "./NewTopBrands";


// import TopBrands from "./TopBrands";
// import CategoryToBag from "./CategoryToBag";
// import ExploreTopBrands from "./ExploreTopBrands";
// import TWesternWear from "./TWesternWear";
import FooterSection from "./FooterSection";



function App() {
  const [pageData, setPageData] = useState([]);

  


  React.useEffect(() => {
    const url = "https://demo4702819.mockable.io/v1/api/page/home";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPageData(json);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <InviteSection />
      

      
        {pageData.map((p)=>{
          if(p.type === "carousel"){
            return <Banner img={p.img}/>
          }
        })}
    
      
      
      <SideBar />
      {pageData.map((p) => {
        if (p.type === "dod")
          return <DealOfTHeDay imgs={p.img} title={p.title} />;
      })}
      {pageData.map((p) => {
        if (p.type === "tray")
          return <BestOfMyntraExclusiveBrand imgs={p.img} title={p.title} />;
      })}
      {pageData.map((p) => {
        if (p.type === "top-picks")
          return <TopPicks imgs={p.img} title={p.title} />;
      })}
      {pageData.map((p) => {
        if (p.type === "categories")
          return <CategoryToBagHome imgs={p.img} title={p.title} />;
      })}
      {pageData.map((p) => {
        if (p.type === "top-brands")
          return <DealsOnTopBrands imgs={p.img} title={p.title} />;
      })}
      {pageData.map((p) => {
        if (p.type === "slashed")
          return <BrandAtSlashedPrice imgs={p.img} title={p.title} />;
      })}
      {pageData.map((p) => {
        if (p.type === "best-buys")
          return <BestBuy imgs={p.img} title={p.title} />;
      })}
      {pageData.map((p) => {
        if (p.type === "myntra-luxe")
          return <MyntraLuxe imgs={p.img} title={p.title} />;
      })}
      {pageData.map((p) => {
        if (p.type === "gift-card")
          return <GiftingCards imgs={p.img} title={p.title} />;
      })}
      {pageData.map((p) => {
        if (p.type === "spring-summer-2022")
          return <SpringSummer2022 imgs={p.img} title={p.title} />;
      })}
      {pageData.map((p) => {
        if (p.type === "stylecast")
          return <StyleCast imgs={p.img} title={p.title} />;
      })}
      {pageData.map((p) => {
        if (p.type === "trends-her")
          return <TrendsForHer imgs={p.img} title={p.title} />;
      })}
      {pageData.map((p) => {
        if (p.type === "trends-him")
          return <TrendsForHim imgs={p.img} title={p.title} />;
      })}
      {pageData.map((p) => {
        if (p.type === "kidswear")
          return <BestKidsWear imgs={p.img} title={p.title} />;
      })}
      {pageData.map((p) => {
        if (p.type === "new-top-brands")
          return <NewTopBrands imgs={p.img} title={p.title} />;
      })}
      {/* <TopBrands />
      <CategoryToBag />
      <ExploreTopBrands />
      <TWesternWear />
       */}
      <FooterSection />
    </div>
  );
}

export default App;

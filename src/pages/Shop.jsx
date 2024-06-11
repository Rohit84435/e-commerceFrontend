import React from "react";
// import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offer from "../components/Offer/Offer";
import NewCollection from "../components/NewCollection/NewCollection";
import Newsletter from "../components/Newsletter/Newsletter";
import Subfoot from "../components/Subfoot/Subfoot";
import Slider from "../components/Slider/Slider";
// import Subher from "../components/SubHer/Subher";

function Shop() {
  return (
    <div>
      <Slider />
      {/* <Subher /> */}
      {/* <Hero /> */}
      <Popular />
      <Offer />
      <NewCollection />
      <Newsletter />
      <Subfoot />
    </div>
  );
}

export default Shop;

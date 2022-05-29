import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import OurTeam from "./OurTeam";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Banner></Banner>
      <Parts></Parts>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <OurTeam></OurTeam>
    </div>
  );
};

export default Home;

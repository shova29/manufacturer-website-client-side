import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import OurTeam from "./OurTeam";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Banner></Banner>
      <BusinessSummary></BusinessSummary>
      <OurTeam></OurTeam>
    </div>
  );
};

export default Home;

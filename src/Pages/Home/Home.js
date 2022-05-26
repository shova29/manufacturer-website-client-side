import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import OurTeam from "./OurTeam";
import Parts from "./Parts";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Banner></Banner>
      <BusinessSummary></BusinessSummary>
      <OurTeam></OurTeam>
      <Parts></Parts>
    </div>
  );
};

export default Home;

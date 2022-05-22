import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Banner></Banner>
      <BusinessSummary></BusinessSummary>
    </div>
  );
};

export default Home;

import React from "react";
import Banner from "./Banner";
import Brand from "./Brand";
import BusinessSummary from "./BusinessSummary";
import Contact from "./Contact";
import FeaturedParts from "./FeaturedParts";
import OurTeam from "./OurTeam";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Banner></Banner>
      <Parts></Parts>
      <BusinessSummary></BusinessSummary>
      <FeaturedParts></FeaturedParts>
      <Reviews></Reviews>
      <OurTeam></OurTeam>
      <Contact></Contact>
      <Brand></Brand>
    </div>
  );
};

export default Home;

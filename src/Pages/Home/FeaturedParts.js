import React from "react";
import useParts from "../../hooks/useParts";
import FeaturedPart from "./FeaturedPart";

const FeaturedParts = () => {
  const { parts } = useParts();
  return (
    <div className="container mx-auto">
      <h2 className="text-gray text-center lg:text-3xl font-bold mt-12">
        Featured <span className="text-primary lg:text-4xl "> Products </span>
      </h2>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {" "}
        {parts.slice(0, 3).map((part) => (
          <FeaturedPart key={part._id} part={part}></FeaturedPart>
        ))}
      </div>
    </div>
  );
};

export default FeaturedParts;

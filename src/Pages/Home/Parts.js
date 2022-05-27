import React from "react";
import useParts from "../../hooks/useParts";
import Loading from "../Shared/Loading";
import Part from "./Part";

const Parts = () => {
  const { parts, reload } = useParts();
  return (
    <div className="my-28">
      <div className="text-center">
        {" "}
        <h3 className="uppercase text-primary text-xl font-bold">
          Bicycle Parts
        </h3>
        <h2 className="text-4xl mt-4">Parts that Winged Wheels Provide</h2>
      </div>
      {reload ? (
        <div className="container mt-6">
          <Loading></Loading>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
          {parts.map((part) => (
            <Part key={part._id} part={part}></Part>
          ))}
        </div>
      )}
    </div>
  );
};

export default Parts;

import React from "react";
import notFound from "../../assets/image/404.png";

const NotFound = () => {
  return (
    <div className="container mx-auto">
      <img
        className="fluid rounded mx-auto block lg:w-1/2"
        src={notFound}
        alt={notFound}
      />
    </div>
  );
};

export default NotFound;

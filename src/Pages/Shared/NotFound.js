import React from "react";
import notFound from "../../assets/image/404.jpg";

const NotFound = () => {
  return (
    <div className="container mx-auto">
      <img
        className="mt-20 fluid rounded mx-auto block sm:w-1/2"
        src={notFound}
        alt={notFound}
      />
    </div>
  );
};

export default NotFound;

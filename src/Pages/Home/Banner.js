import React from "react";
import banner from "../../assets/image/banner.jpg";

const Banner = () => {
  return (
    <div
      className="relative overflow-hidden bg-no-repeat bg-cover"
      style={{
        backgroundPosition: "50%",
        backgroundImage: `url(${banner})`,
        height: "500px",
      }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
      >
        <div className="flex justify-center items-center h-full">
          <div className="text-center text-white px-6 md:px-12">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">
              Winged Wheels <br />
              <span>Manufacturer</span>
            </h1>{" "}
            <p className="mb-5 text-2xl font-bold text">
              Check out our exclusive and largest collection of bicycle parts.
            </p>
            <button className="btn btn-primary text-white">
              Discover our services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

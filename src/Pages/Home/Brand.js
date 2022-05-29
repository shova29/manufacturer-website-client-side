import React from "react";
import brand1 from "../../assets/image/shimano.png";
import brand2 from "../../assets/image/SPECIALIZED.png";
import brand3 from "../../assets/image/CAMPAGNOLO.png";
import brand4 from "../../assets/image/answer.png";

const Brand = () => {
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="flex flex-wrap justify-center items-center">
              <a
                href="#"
                className="
                  w-[150px]
                  2xl:w-[180px]
                  py-5
                  flex
                  items-center
                  justify-center
                  mx-4
                  "
              >
                <img src={brand1} alt="Brand 1" className="w-full h-20" />
              </a>
              <a
                href="#"
                className="
                  w-[150px]
                  2xl:w-[180px]
                  py-5
                  flex
                  items-center
                  justify-center
                  mx-4
                  "
              >
                <img src={brand2} alt="Brand 2" className="w-full h-20" />
              </a>
              <a
                href="#"
                className="
                  w-[150px]
                  2xl:w-[180px]
                  py-5
                  flex
                  items-center
                  justify-center
                  mx-4
                  "
              >
                <img src={brand3} alt="Brand 3" className="w-full h-20" />
              </a>
              <a
                href="#"
                className="
                  w-[150px]
                  2xl:w-[180px]
                  py-5
                  flex
                  items-center
                  justify-center
                  mx-4
                  "
              >
                <img src={brand4} alt="Brand 4" className="w-full h-20" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;

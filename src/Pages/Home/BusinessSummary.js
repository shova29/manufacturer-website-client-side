import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillChatRightQuoteFill } from "react-icons/bs";
import { BsCoin } from "react-icons/bs";
import { FaTools } from "react-icons/fa";

const BusinessSummary = () => {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center">
        <h2
          className="
                    font-bold
                    lg:text-3xl
                    sm:text-base
                    md:text-[40px]
                    text-dark
                    mb-4
                    "
        >
          We are in <span className="text-primary lg:text-4xl"> Numbers</span>
        </h2>
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-0 items-center">
          <div className="mb-12 lg:mb-0 relative">
            <BsFillPeopleFill className="w-16 h-full mx-auto text-cyan-700 hover:text-cyan-800" />
            <h5 className="text-xl text-cyan-600 font-bold mt-2 mb-4">5000+</h5>
            <h6 className="text-lg font-bold text-gray-500">Customers</h6>
            <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
          </div>

          <div className="mb-12 lg:mb-0 relative">
            <BsFillChatRightQuoteFill className="w-16 h-full mx-auto text-cyan-700 hover:text-cyan-800" />
            <h5 className="text-xl text-cyan-600 font-bold mt-2 mb-4">490k+</h5>
            <h6 className="text-lg font-bold text-gray-500">Reviews</h6>
            <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
          </div>

          <div className="mb-12 md:mb-0 relative">
            <BsCoin className="w-16 h-full mx-auto text-cyan-700 hover:text-cyan-800" />
            <h5 className="text-xl text-cyan-600 font-bold mt-2 mb-4">100M+</h5>
            <h6 className="text-lg font-bold text-gray-500">Annual revenue</h6>
            <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
          </div>

          <div className="relative">
            <FaTools className="w-16 h-full mx-auto text-cyan-700 hover:text-cyan-800" />
            <h5 className="text-xl text-cyan-600 font-bold mt-2 mb-4">28</h5>
            <h6 className="text-lg font-bold text-gray-500 mb-0">Parts</h6>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSummary;

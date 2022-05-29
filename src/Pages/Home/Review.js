import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({ productReview }) => {
  const { reviews, name, image, address, rating } = productReview;
  return (
    <div className="mx-auto rounded mt-6 mb-6 my-6 ">
      {" "}
      <div className="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
        <img
          src={
            image
              ? image
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          }
          className="w-24 rounded-full shadow-md mb-4"
          alt="Client"
        />
      </div>
      <div className="text-center mt-1 col-md-6 col-lg-6 col-xl-6">
        <h5 className="font-bold">{name}</h5>
        <p className="text-gray-500 font-bold mb-2 mb-md-0 hover:text-primary">
          Review: {reviews}
        </p>
        <h4 className="mt-1">
          <Rating
            initialRating={rating}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
            }
            readonly
          ></Rating>
        </h4>
        <h6 className="text-primary font-bold mt-1">Address: {address}</h6>
      </div>
    </div>
  );
};

export default Review;

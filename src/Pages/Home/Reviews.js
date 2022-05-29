import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [productReviews, setProductReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => setProductReviews(data));
  }, []);
  return (
    <section className="mt-16 p-6 md:p-12 text-center md:text-left rounded-md">
      <h2 className="text-center lg:text-3xl font-extrabold mt-12">
        What Beloved<span className="text-primary "> Client </span> Says
      </h2>
      <div className="container mx-auto py-5 mt-8">
        <div className="row justify-content-center mb-3">
          <div className="col-md-12 col-xl-10">
            <div className="card shadow-0 rounded-3">
              <div className="card-body bg-white shadow-lg">
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 shadow-lg">
                  {productReviews?.map((productReview) => (
                    <Review
                      key={productReview._id}
                      productReview={productReview}
                    ></Review>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

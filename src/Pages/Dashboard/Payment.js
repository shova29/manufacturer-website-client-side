import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4yk4DK2LLyonf0Nkwl0EbgRhklSzRfymYLtoEbia3uCh66B1dPC4K45HTVsemRAVrTssGcIriFeFRgNSVb5YFC002uzQt07i"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://evening-escarpment-83437.herokuapp.com/purchase/${id}`;
  const { data: purchase, isLoading } = useQuery(["purchase", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-center">Payment</h2>
      <div className="lg:ml-56">
        <div className="card lg:w-96 bg-base-100 shadow-xl mt-8 ml-8">
          <div className="card-body">
            <h2 className="card-title">
              Hello <span className="text-primary">{purchase?.name} ! </span>
            </h2>
            <p className="text-slate-500 font-bold">
              You are about to Purchase of{" "}
              <span className="text-primary"> {purchase?.parts}</span>
            </p>
            <p className="font-bold">
              {" "}
              Purchase of Amount: {purchase?.quantity} Quantity{" "}
            </p>
            <p className="font-bold"> Payment is $ {purchase?.price} </p>
          </div>
        </div>
        <div className="card flex-shrink-0 w-50 max-w-sm  ml-8 mt-8 text-gray-800 shadow-2xl bg-base-100">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm purchase={purchase} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

/* import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4yk4DK2LLyonf0Nkwl0EbgRhklSzRfymYLtoEbia3uCh66B1dPC4K45HTVsemRAVrTssGcIriFeFRgNSVb5YFC002uzQt07i"
);
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/purchase/${id}`;
  const {
    data: purchase,
    isLoading,
    // refetch,
  } = useQuery(["purchase", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        // "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2> Please pay for:{id} </h2>
      <div className="md:ml-36">
        <div className="card md:w-96 bg-base-100 shadow-xl mt-6 ml-6">
          <div className="card-body">
            <h2 className="card-title"> {purchase?.parts} </h2>
            <div className="swap-off"> Hello {purchase?.name}😇 </div>
            <p className="font-bold"> Please pay for: {purchase?.price} </p>
          </div>
        </div>
        <div className="card md:w-96 bg-white text-primary-content ml-6 mt-4 shadow-xl">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm purchase={purchase} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
 */

import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useParts from "../../hooks/useParts";
import Loading from "../Shared/Loading";

const ManageAllOrders = () => {
  const {
    data: allPurchases,
    isLoading,
    refetch,
  } = useQuery("allPurchases", () =>
    fetch("https://evening-escarpment-83437.herokuapp.com/purchase").then(
      (res) => res.json()
    )
  );

  const handleDelivered = (id) => {
    fetch(`https://evening-escarpment-83437.herokuapp.com/shipped/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("Delivered Status Successfully Changed!!");
      });
  };
  const handlePurchaseDelete = (id) => {
    fetch(`https://manufacturer-website-server-side-shova29.vercel.app/purchase/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          refetch();
          toast.success("Purchase Cancelled Successfully");
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mb-16">
      <h1 className="text-primary text-3xl text-center font-bold mb-6 mt-6">
        Manage All Orders
      </h1>
      <div className="ml-6 mr-6 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allPurchases?.map((purchases, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{purchases.name}</td>
                <td>{purchases.parts}</td>
                <td>{purchases.quantity}</td>
                <td>{purchases.price}</td>
                <td>
                  {purchases?.price && !purchases?.paid && (
                    <span className="bg-amber-400 rounded-full px-2 py-1">
                      Unpaid
                    </span>
                  )}
                  {purchases?.price && purchases?.paid && (
                    <span className="bg-amber-400 rounded-full px-2 py-1">
                      Paid
                    </span>
                  )}
                </td>

                <td>
                  {purchases?.price && purchases?.paid && (
                    <>
                      <button
                        // disabled={purchases?.shipping === true}
                        onClick={() => handleDelivered(purchases?._id)}
                      >
                        {purchases?.shipping ? "Shipped" : "Pending"}
                      </button>
                    </>
                  )}
                  {purchases?.price && !purchases?.paid && (
                    <button
                      onClick={() => handlePurchaseDelete(purchases?._id)}
                      className="btn btn-xs btn-error px-8 text-white"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;

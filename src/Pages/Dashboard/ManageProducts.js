import React, { useState } from "react";
import { useQuery } from "react-query";
import useParts from "../../hooks/useParts";

import Loading from "../Shared/Loading";
import DeleteConfirmation from "./DeleteConfirmation";
import Product from "./Product";

const ManageProducts = () => {
  const { parts, setParts } = useParts();
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("http://localhost:5000/products", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="ml-8 mr-8 mb-10">
      <h2 className="text-3xl text-center font-bold text-secondary mt-6 mb-6">
        Manage Products
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Img</th>
              <th>Minimum Quantity</th>
              <th>Available Quantity</th>
              <th>Price(PerUnit)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <Product
                key={product._id}
                product={product}
                index={index}
                refetch={refetch}
                setParts={setParts}
              ></Product>
            ))}
          </tbody>
        </table>
      </div>
      {parts && (
        <DeleteConfirmation
          parts={parts}
          refetch={refetch}
        ></DeleteConfirmation>
      )}
    </div>
  );
};

export default ManageProducts;

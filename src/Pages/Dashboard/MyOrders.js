import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyOrders = () => {
  const [purchases, setPurchases] = useState([]);
  const [user] = useAuthState(auth);
  const { isLoading, refetch } = useQuery();
  useEffect(() => {
    fetch(
      `https://evening-escarpment-83437.herokuapp.com/myPurchase?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        },
      }
    )
      .then((res) => {
        if (res?.status === 401 || res?.status === 403) {
          signOut(auth);
        }
        return res.json();
      })
      .then((result) => {
        refetch();
        setPurchases(result);
      });
  }, [user, refetch]);

  const handleDeletePurchase = (id) => {
    fetch(`https://manufacturer-website-server-side-shova29.vercel.app/purchase/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Deleted your purchase!");
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="ml-6 mr-6 overflow-x-auto">
      <h2 className="text-3xl text-center font-bold text-secondary mt-6 mb-6">
        My Orders
      </h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price($)</th>
            <th>Payment</th>
            <th>Cancel Purchase</th>
          </tr>
        </thead>
        <tbody>
          {purchases?.map((purchase, index) => (
            <tr key={purchase?._id} purchase={purchase} index={index}>
              <th>{index + 1}</th>
              <td>{purchase?.name}</td>
              <td>{purchase?.parts}</td>
              <td>{purchase?.quantity}</td>
              <td>{purchase?.price}</td>
              <td>
                {purchase?.price && !purchase?.paid && (
                  <Link to={`/dashboard/payment/${purchase._id}`}>
                    <button className="btn btn-xs btn-primary text-white">
                      Pay
                    </button>
                  </Link>
                )}
                {purchase?.price && purchase?.paid && (
                  <div>
                    <p>
                      <span className="text-red-500 font-bold">Paid</span>
                    </p>

                    <span className="text-red-500">
                      <span className="text-red-500 font-bold">
                        {" "}
                        TransactionId:
                      </span>{" "}
                      <span className=""> {purchase?.transactionId}</span>
                    </span>
                  </div>
                )}
              </td>
              <td>
                {!purchase?.paid && (
                  <button
                    onClick={() => handleDeletePurchase(purchase?._id)}
                    className="btn btn-xs btn-error text-white"
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
  );
};

export default MyOrders;

import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [purchases, setPurchases] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/purchase?email=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((res) => {
        if (res?.status === 401 || res?.status === 403) {
          signOut(auth);
        }
        return res.json();
      })
      .then((result) => setPurchases(result));
  }, [user]);
  return (
    <div className="ml-6 mr-6 overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {purchases?.map((purchase, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{purchase.name}</td>
              <td>{purchase.parts}</td>
              <td>{purchase.quantity}</td>
              <td>{purchase.price}</td>
              <td>
                <div>
                  <button className="btn btn-xs">Pay</button>{" "}
                  <button className="btn btn-xs">Delete</button>
                </div>
              </td>
              <td>
                {purchase?.price && !purchase?.paid && (
                  <Link to={`/dashboard/payment/${purchase._id}`}>
                    <button className="btn btn-xs btn-primary text-white">
                      {" "}
                      PAY{" "}
                    </button>
                  </Link>
                )}
                {purchase?.price && purchase?.paid && (
                  <div>
                    <p>
                      <span className="text-red-500">Paid</span>
                    </p>
                    <span className="text-red-500"></span>
                  </div>
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

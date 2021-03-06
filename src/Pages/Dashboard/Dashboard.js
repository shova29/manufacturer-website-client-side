import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-secondary text-white font-bold">
          {!admin && (
            <>
              <li>
                <Link to="/dashboard">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addReview">Add A Review</Link>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <Link to="/dashboard">Make Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct">Add A Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manageProducts">Manages Products</Link>
              </li>
              <li>
                <Link to="/dashboard/manageAllOrders">Manages All Orders</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/dashboard/myProfile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

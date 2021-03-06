import React from "react";
import logo from "../../assets/icon/favicon.png";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const signout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItems = (
    <>
      <li className="lg:ml-28">
        <Link to="/">Home</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li className="">
        {user ? (
          <button
            className="btn btn-ghost text-slate-500 font-bold"
            onClick={signout}
          >
            Log Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar shadow-lg rounded">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-square btn-primary lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 text-slate-500 font-bold shadow bg-base-100 rounded-box w-52"
          >
            {" "}
            {menuItems}
          </ul>
        </div>
        <div className="ml-2 w-10 rounded-full">
          <img src={logo} alt={logo} />
        </div>
        <p className="text-slate-500 font-bold lg:text-xl">
          Winged <span className="text-primary">Wheels</span>
        </p>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-slate-500 font-bold">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <label
          tabIndex="0"
          htmlFor="my-drawer-2"
          className="btn btn-square btn-primary lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;

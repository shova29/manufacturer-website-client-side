import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import auth from "./firebase.init";
import useAdmin from "./hooks/useAdmin";
import Blogs from "./Pages/Blogs/Blogs";
import AddProduct from "./Pages/Dashboard/AddProduct";
import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Payment from "./Pages/Dashboard/Payment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ProtectedRoute from "./Pages/Login/ProtectedRoute";
import Registration from "./Pages/Login/Registration";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound";

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/part/:partId"
          element={
            <ProtectedRoute>
              <Purchase></Purchase>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {!admin ? (
            <Route index element={<MyOrders></MyOrders>}></Route>
          ) : (
            <Route
              index
              element={
                <RequireAdmin>
                  <MakeAdmin></MakeAdmin>
                </RequireAdmin>
              }
            ></Route>
          )}
          {!admin && (
            <Route path="addReview" element={<AddReview></AddReview>}></Route>
          )}
          {admin && (
            <Route
              path="addProduct"
              element={
                <RequireAdmin>
                  <AddProduct></AddProduct>
                </RequireAdmin>
              }
            ></Route>
          )}

          {admin && (
            <Route
              path="manageAllOrders"
              element={
                <RequireAdmin>
                  <ManageAllOrders></ManageAllOrders>
                </RequireAdmin>
              }
            ></Route>
          )}
          {admin && (
            <Route
              path="manageProducts"
              element={
                <RequireAdmin>
                  <ManageProducts></ManageProducts>
                </RequireAdmin>
              }
            ></Route>
          )}
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;

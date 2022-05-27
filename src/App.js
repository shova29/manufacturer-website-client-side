import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Users from "./Pages/Dashboard/Users";
import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Home/Purchase";
import Login from "./Pages/Login/Login";
import ProtectedRoute from "./Pages/Login/ProtectedRoute";
import Registration from "./Pages/Login/Registration";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound";

function App() {
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
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
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

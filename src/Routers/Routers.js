import { Routes, Route, Navigate } from "react-router-dom";

// All The Pages Imported
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";
import ProductDetails from "../Pages/ProductDetails";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import CheckOut from "../Pages/CheckOut";
import ProtectedRoute from "./ProtectedRoute";

// import AddProduct from "../admin/AddProduct";
// import AllProduct from "../admin/AllProducs";
// import Dashboard from "../admin/Dashboard";
// import Users from "../admin/Users";



const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
{/* 
      <Route path="/*" element={<ProtectedRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/all-products" element={<AllProduct />} />
        <Route path="dashboard/add-products" element={<AddProduct />} />
        <Route path="dashboard/users" element={<Users/>} />
        <Route path="checkout" element={<CheckOut />} />
      </Route> */}

     <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <CheckOut />
          </ProtectedRoute>
        }
      />


      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Add a catch-all route to redirect to the home page */}
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default Routers;

// Importing necessary modules and components from 'react-router-dom'
import { Routes, Route, Navigate } from "react-router-dom";

// Importing all the pages/components for routing
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";
import ProductDetails from "../Pages/ProductDetails";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import CheckOut from "../Pages/CheckOut";
import ProtectedRoute from "./ProtectedRoute";

// Other admin components that are currently commented out
// import AddProduct from "../admin/AddProduct";
// import AllProduct from "../admin/AllProducs";
// import Dashboard from "../admin/Dashboard";
// import Users from "../admin/Users";

const Routers = () => {
  return (
    <Routes>
      {/* Define routes for different pages */}
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop/:id" element={<ProductDetails />} />

      {/* Protected routes with authentication checks */}
      {/* Currently commented out */}
      {/* <Route path="/*" element={<ProtectedRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/all-products" element={<AllProduct />} />
        <Route path="dashboard/add-products" element={<AddProduct />} />
        <Route path="dashboard/users" element={<Users/>} />
        <Route path="checkout" element={<CheckOut />} />
      </Route> */}

      {/* Protected route with authentication check for the 'CheckOut' page */}
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <CheckOut />
          </ProtectedRoute>
        }
      />

      {/* Non-protected routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Add a catch-all route to redirect to the home page if the entered route does not match any defined routes */}
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default Routers;

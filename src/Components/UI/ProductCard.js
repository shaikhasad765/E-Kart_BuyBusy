// Import required libraries and styles
import React from "react";
// import productImg from "../..//Assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import "../../Styles/Product-Card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

// Toastify library for showing toast notifications
import { toast } from 'react-toastify';

// Redux - Import useDispatch to dispatch actions to the Redux store
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/Slices/cartSlice";

// Define the ProductCard component, representing a product card
const ProductCard = ({ item }) => {
  // Redux - Get the dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Function to add the item to the cart when the "Add" button is clicked
  const addToCart = () => {
    // Dispatch the cartActions.addItem action to add the item to the cart state
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl:item.imgUrl,
      })
    );

    // Show a success toast notification when the product is added to the cart
    toast.success("Product added successfully");

  };

  // Render the product card
  return (
    // Use the Col component from reactstrap to create a responsive grid column
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        {/* Product image with motion effect on hover */}
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>

        {/* Product information */}
        <div className="p-2 product__info">
          {/* Product name with a link to the product details page */}
          <h3 className="product__name">
            {" "}
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>

        {/* Product card bottom with price and add-to-cart button */}
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          {/* Product price */}
          <span className="price">${item.price}</span>
          
          {/* Add-to-cart button with motion effect on tap */}
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i class="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

// Export the ProductCard component to make it available for other parts of the application
export default ProductCard;

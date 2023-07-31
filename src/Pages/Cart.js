// Import required libraries and components
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cartActions } from "../Redux/Slices/cartSlice";
import "../Styles/Cart.css";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";

// Define the Cart component
const Cart = () => {
  // Access the cartItems and totalAmount from the Redux store using the useSelector hook
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  // Return the cart page layout
  return (
    <Helmet title="Cart">
      {/* Common section with the title "Shopping Cart" */}
      <CommonSection title="Shopping Cart" />

      <section>
        <Container>
          <Row>
            {/* Left section of the cart page */}
            <Col lg="9">
              {cartItems.length === 0 ? (
                // Display a message when the cart is empty
                <h2 className="fs-4">No items added to cart</h2>
              ) : (
                // Display the table with cart items when there are items in the cart
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* Map through cartItems to display each item in a row */}
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            {/* Right section of the cart page */}
            <Col lg="3">
              <div>
                {/* Display the subtotal */}
                <h6 className="d-flex align-item-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">${totalAmount}</span>
                </h6>
              </div>
              {/* Display additional information */}
              <p className="fs-6 mt-2">
                taxes and shipping will calculate in checkout
              </p>
            
              <div>
                {/* Checkout button linking to the checkout page */}
                <button className="buy__btn w-100 ">
                  <Link to="/checkout">Checkout</Link>
                </button>

                {/* Continue Shopping button linking to the shop page */}
                <button className="buy__btn w-100 mt-3">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

// Define the Tr component used to render a row in the cart table
const Tr = ({ item }) => {
  const dispatch = useDispatch();

  // Function to delete a product from the cart when the delete icon is clicked
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  // Return a table row displaying product information with a delete button
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.i
          className="ri-delete-bin-line"
          onClick={deleteProduct}
          whileTap={{ scale: 1.2 }}></motion.i>
      </td>
    </tr>
  );
};

// Export the Cart component to make it available for other parts of the application
export default Cart;

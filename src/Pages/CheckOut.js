// Importing necessary dependencies
import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import "../Styles/CheckOut.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Checkout component
const CheckOut = () => {
  // Using Redux state to get total quantity and total amount from the cart
  const totalQty = useSelector(state=>state.cart.totalQuantity);
  const totalAmount = useSelector(state=>state.cart.totalAmount)
  const navigate = useNavigate();

  // Function to handle placing an order
  const placeAnOrderHandle = ()=>{
    try{
      // Show a success toast message and navigate to the home page
      toast.success("Order Placed");
      navigate('/home')
    }
    catch(error)
    {
      // Show an error toast message if something goes wrong
      toast.error("Something Went Wrong")
    }
  }

  return (
    // Rendering the Checkout page
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            {/* Section for billing information */}
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Phone number" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Street address" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="City" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Postal code" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Country " />
                </FormGroup>
              </Form>
            </Col>
            {/* Section for order summary */}
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>{totalAmount}</span>
                </h6>

                <h6>
                  <span>
                    Shipping: <br />
                    Free Shipping
                  </span>
                  <span>$0</span>
                </h6>
                
                <h4 className="mb-4">
                  Total Cost: <span>{totalAmount}</span>
                </h4>

                {/* Button to place an order */}
                <button className="buy__btn auto__btn w-100" onClick={placeAnOrderHandle}>
                Place an order
              </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CheckOut;

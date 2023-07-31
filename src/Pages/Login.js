// Importing necessary dependencies
import React, { useState } from "react";
import Helmet from "../Components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
// Toastify
import { toast } from "react-toastify";

// CSS
import "../Styles/Login.css";

const Login = () => {
  // State variables to store email, password, and loading state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Function to handle user sign-in
  const signIn = async (e) => {
    e.preventDefault(); // Prevent form submission
    setLoading(true); // Set loading state to true during the sign-in process

    try {
      // Attempt to sign in with the provided email and password using Firebase authentication
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log(user); // Display user object in the console for debugging purposes
      setLoading(false); // Set loading state back to false after the sign-in process
      toast.success("Successfully logged in"); // Show success toast notification upon successful login
      navigate("/checkout"); // Redirect the user to the checkout page after successful login
    } catch (error) {
      setLoading(false); // Set loading state back to false in case of an error during the sign-in process
      toast.error(error.message); // Show error toast notification if there's an error during sign-in
    }
  };

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            {loading ? (
              // Show "Loading..." message when loading state is true
              <Col lg="12" className="text-center">
                <h6 className="fw-bold">Loading...</h6>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">Login</h3>
                <Form className="auth__form" onSubmit={signIn}>
                  <FormGroup className="form__group">
                    {/* Input field for email */}
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    {/* Input field for password */}
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </FormGroup>

                  {/* Button to submit the login form */}
                  <button type="submit" className="buy__btn auth__btn">
                    Login
                  </button>
                  <p>
                    Don't have an account?
                    <Link to="/signup"> Create an account</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;

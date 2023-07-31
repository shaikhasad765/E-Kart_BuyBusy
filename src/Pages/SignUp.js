// Importing necessary dependencies
import React, { useState } from "react";
import Helmet from "../Components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// Firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase.config";

// CSS
import "../Styles/Login.css";

// Signup component
const Signup = () => {
  // Hooks to manage form inputs and state
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to handle user signup
  const signup = async (e) => {
    e.preventDefault(); // Prevent form submission
    setLoading(true); // Set loading to true to show loading message

    try {
      // Create a new user account with provided email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User UID:", user.uid);

      // Set up storage reference for user's profile image
      const storageRef = ref(storage, `images/${user.uid}/${Date.now()}`);
      console.log("Storage Reference:", storageRef);

      // Upload user's profile image to Firebase storage using resumable upload
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // You can add more logs here to track the upload progress if needed.
        },
        (error) => {
          console.error("Upload Error:", error);
          toast.error(error.message); // Show error message in case of upload failure
        },
        () => {
          // Once the upload is complete, get the download URL of the uploaded image
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("Download URL:", downloadURL);

            // Update user profile with username and profile image URL
            await updateProfile(user, {
              displayName: userName,
              photoURL: downloadURL,
            });

            // Store user data in Firestore database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL,
            });

            setLoading(false); // Set loading to false once the upload is complete
            toast.success("Account Created "); // Show success toast message
            navigate("/login"); // Navigate to the login page
          });
        }
      );

    } catch (error) {
      setLoading(false); // Set loading to false in case of signup failure
      console.error("Signup Error:", error);
      toast.error("Something went wrong"); // Show error toast message
    }
  };

  return (
    // Rendering the Signup page
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
            {/* Display loading message if loading is true, otherwise render the signup form */}
            {loading ? (
              <Col lg="12" className="text-center">
                <h6 className="fw-bold">Loading...</h6>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">SignUp</h3>
                <Form className="auth__form" onSubmit={signup}>
                  <FormGroup className="form__group">
                    <input
                      type="text"
                      placeholder="Username "
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input
                      type="email"
                      placeholder=" Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      maxLength={8}
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input
                      className="p-2"
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </FormGroup>

                  <button type="submit" className="buy__btn auth__btn mt-4">
                    Create an Account
                  </button>
                  <p>
                    Already have an account?<Link to="/login">Login Here</Link>
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

export default Signup;

// Import required libraries and Firebase configuration
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";

// Define the custom hook useAuth
const useAuth = () => {
  // Initialize a state variable to store the current user
  const [currentUser, setCurrentUser] = useState({});

  // Use the useEffect hook to subscribe to authentication state changes
  useEffect(() => {
    // The onAuthStateChanged function listens for changes in the authentication state.
    // When a user logs in or out, it calls the callback function with the user object as an argument.
    onAuthStateChanged(auth, (user) => {
      // If a user is logged in (user object exists), update the currentUser state with the user object.
      // If no user is logged in (user object is null), set the currentUser state to null.
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    // The useEffect hook will only run this effect once, during the initial component mount.
    // Since there are no dependencies specified (second argument), it won't run again on subsequent renders.
  }); 

  // Return the currentUser state as part of the custom hook
  return {currentUser};
};

// Export the useAuth hook to make it available for other parts of the application
export default useAuth;
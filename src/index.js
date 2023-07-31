// Importing necessary modules from React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Importing the "index.css" file to apply global styles
import "./index.css";

// Importing the "App" component from the "./App" file
import App from "./App";

// Importing icon fonts and Bootstrap CSS
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing modules related to Routing and Redux
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store";
import { Provider } from "react-redux";

// Importing the "ToastContainer" component and its associated styles
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Creating a root container using "ReactDOM.createRoot"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the application inside the root container
root.render(
  // Using React's StrictMode for additional checks and warnings during development
  <React.StrictMode>
    {/* Wrapping the entire app inside the BrowserRouter for client-side routing */}
    <BrowserRouter>
      {/* Providing the Redux store to the entire app using the Provider */}
      <Provider store={store}>
        {/* ToastContainer from react-toastify for displaying notifications */}
        {/* It is configured with specific props for its behavior */}
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
        />

        {/* Rendering the main application component, "App" */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// Import the React library to use React components
import React from "react";

// Define a functional component called Helmet
const Helmet = (props) => {
  // Set the document title by combining "Trendio -" with the value of props.title
  document.title = "Trendio - " + props.title;
  
  // Return a <div> element with the class name "w-100" and render any child components inside it
  return <div className="w-100">{props.children}</div>;
};

// Export the Helmet component to make it available for other parts of the application
export default Helmet;

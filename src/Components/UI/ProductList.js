// Import React and the ProductCard component
import React from "react";
import ProductCard from "./ProductCard";

// Define the ProductList component, which renders a list of product cards
const ProductList = ({ data }) => {
  return (
    <>
      {/* Check if data exists and map through it to render each product card */}
      {data?.map((item, index) => (
        // Render the ProductCard component for each item in the data array
        <ProductCard item={item}  key={index}/>
      ))}
    </>
  );
};

// Export the ProductList component to make it available for other parts of the application
export default ProductList;

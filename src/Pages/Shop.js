// Importing necessary dependencies
import React, { useState } from "react";
import CommonSection from "../Components/UI/CommonSection";
import Helmet from "../Components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../Styles/Shop.css";
import products from "../Assets/data/products";
import ProductList from "../Components/UI/ProductList";

const Shop = () => {
  // State to hold the current list of products
  const [productsData, setProductsData] = useState(products);

  // Function to handle filtering products by category
  const handleFilter = (e) => {
    const filterValue = e.target.value;

    // Filtering the products based on the selected category
    if (filterValue === "sofa") {
      const filterProducts = products.filter((item) => item.category === "sofa");
      setProductsData(filterProducts);
    } else if (filterValue === "tshirt") {
      const filterProducts = products.filter((item) => item.category === "tshirt");
      setProductsData(filterProducts);
    } else if (filterValue === "mobile") {
      const filterProducts = products.filter((item) => item.category === "mobile");
      setProductsData(filterProducts);
    } else if (filterValue === "wireless") {
      const filterProducts = products.filter((item) => item.category === "wireless");
      setProductsData(filterProducts);
    } else if (filterValue === "watch") {
      const filterProducts = products.filter((item) => item.category === "watch");
      setProductsData(filterProducts);
    }
  };

  // Function to handle product search
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    // Filtering the products based on the search term
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm)
    );

    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            {/* Section for filtering by category */}
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="tshirt">T-shirt</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>

            {/* Section for sorting */}
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>

            {/* Section for searching */}
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search...."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-eye-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section for displaying search results or "No Products Found" message */}
      <section>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No Products Found</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;

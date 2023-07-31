// Importing necessary dependencies
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../Assets/data/products";
// import useGetData from "../Custom-Hooks/useGetData";
// Styles and Other Import
import "../Styles/Home.css";
import { Container, Row, Col } from "reactstrap";

// Components Import
import Services from "../Services/Services";
import ProductList from "../Components/UI/ProductList";
import Helmet from "../Components/Helmet/Helmet";
import Clock from "../Components/UI/Clock";
// Assests Import
import heroImg from "../Assets/images/hero-img.png";
import counterImg from "../Assets/images/counter-timer-img.png";

const Home = () => {
  // Getting Year
  const year = new Date().getFullYear();

  // Setting up state variables using useState hook to store product data
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  // useEffect hook to load the data when the component mounts
  useEffect(() => {
    // Filtering products based on categories
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "tshirt"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    // Updating state variables with the filtered products
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []); // Empty dependency array ensures this useEffect only runs once on component mount

  return (
    <Helmet title={"Home"}>
      {/* Hero section  */}
      <section className="hero__section">
        <Container>
          <Row>
            <Col ig="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending Product in {year}</p>
                <h2>Make Your Outfit Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  asperiores a veritatis repellendus fugit in ducimus non beatae
                  nobis dignissimos.
                </p>

                {/* Button with framer-motion animation and Link to the Shop page */}
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">Shop Now</Link>
                </motion.button>
              </div>
            </Col>

            <Col ig="6" md="6">
              {/* Image in the hero section */}
              <div className="hero__img">
                <img src={heroImg} alt="heroImg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services section */}
      <Services />

      {/* Tranding Products Start Here */}
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Trending Products</h2>
            </Col>

            {/* ProductList to display trending products */}
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      {/* Best Sales Section here  */}
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>

            {/* ProductList to display best-selling products */}
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      {/* Timer count Section  */}
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality ArmChair</h3>
              </div>
              <Clock />

              {/* Button with framer-motion animation and Link to the Shop page */}
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn mt-4"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="6" className="text-end counter__img">
              {/* Image in the timer count section */}
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* New Arrivals */}
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>

            {/* Displaying new mobile and wireless products */}
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      {/* Popular Category */}
      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular in Category</h2>
            </Col>

            {/* Displaying popular products */}
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;

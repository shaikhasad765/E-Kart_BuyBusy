import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../Redux/Slices/cartSlice";
import products from "../Assets/data/products";
import { toast } from "react-toastify";
// import useGetData from '../Custom-Hooks/useGetData'


// CSS
import "../Styles/Product-details.css";
import { motion } from "framer-motion";
// Files
import CommonSection from "../Components/UI/CommonSection";
import Helmet from "../Components/Helmet/Helmet";
import ProductsList from "../Components/UI/ProductList";
// import { db } from "../firebase.config";
// import { doc, getDoc } from "firebase/firestore";

const ProductDetails = () => {
  // const [product, setProduct] = useState([]);
  // Hooks
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find((item) => item.id === id);
  // const {data:products} = useGetData('products')

  // const docRef = doc(db, 'products', id);

  // useEffect(() => {
  //   const getProduct = async () => {
  //     const docSnap = await getDoc(docRef);

  //     if (docSnap.exists()) {
  //       setProduct(docSnap.data());
  //     } else {
  //       console.log("no product");
  //     }
  //   };
  //   getProduct()
  // }, []);

  // Destructuring the Products
  const {
    imgUrl,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
    productName,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    // console.log(reviewUserName ,reviewUserMsg,rating)

    const reviewObj = {
      author: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj);
    toast.success("Review Submitted");
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product add successfully");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      {/* ProductDetails Description */}
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex  gap-5 mb-2">
                  <div>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-line"></i>
                    </span>
                  </div>

                  <p> (<span>{avgRating}</span> ratings) </p>
                </div>

                <div className="d-flex align-items-center  gap-5">
                  <span className="product__price">${price}</span>
                  <span>Category:{category.toUpperCase()}</span>
                </div>

                <p className="mt-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn"
                  onClick={addToCart}>
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ProductDetails Review */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : " "}`}
                  onClick={() => setTab("desc")}>
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : " "}`}
                  onClick={() => setTab("rev")}>
                  Review ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      {reviews.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>Jhon Doe</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review__form">
                      <h4>Leave your experience</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Enter name"
                            ref={reviewUser}
                            required
                          />
                        </div>
                        <div className="form__group d-flex align-items-center gap-5">
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}>
                            1<i class="ri-star-fill"></i>
                          </motion.span>

                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}>
                            2<i class="ri-star-fill"></i>
                          </motion.span>

                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}>
                            3<i class="ri-star-fill"></i>
                          </motion.span>

                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}>
                            4<i class="ri-star-fill"></i>
                          </motion.span>

                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}>
                            5<i class="ri-star-fill"></i>
                          </motion.span>
                        </div>

                        <div className="form__group">
                          <textarea
                            rows={4}
                            type="text"
                            placeholder="Review Message..."
                            ref={reviewMsg}
                          />
                        </div>

                        <button type="submit" className="buy__btn">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg="12" className="mt-5">
              <h2 className="related__title">You might also like</h2>
            </Col>

            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;

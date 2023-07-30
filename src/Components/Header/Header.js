import React, { useRef, useEffect } from "react";
import "./Header.css";

import { NavLink, useNavigate, Link} from "react-router-dom";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import useAuth from "../../Custom-Hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";



// Images Imported
import logo from "../../Assets/images/eco-logo.png";
import userIcon from "../../Assets/images/user-icon.png";
import { toast } from "react-toastify";

// Navigation Link
const nav__links = [
  {
    path: "home",
    display: "Home",
  },

  {
    path: "shop",
    display: "Shop",
  },

  {
    path: "cart",
    display: "Cart",
  },
];

// Header Component

const Header = () => {
  // Hooks
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const profileActionRef = useRef(null);

  const logout =()=>{
    signOut(auth).then(()=>{
      toast.success("Logged Out")
      navigate('/home');
    }).catch(err=>{
      toast.error(err.message)
    })
  }


  // Effect Hook
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  // Toggleing Actions
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const navigateToCart = () => {
    navigate("/cart");
  };

  const toggleProfileActions = () => {
    profileActionRef.current.classList.toggle("show__profileActions");
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            {/* Logo class */}
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>E-KART</h1>
              </div>
            </div>
            {/* Navigation */}
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Icons  */}
            <div className="nav__icons ">
              {/* Fav icon */}
              <span className="fav__icon">
                <motion.i
                  whileTap={{ scale: 1.1 }}
                  class="ri-heart-3-line"></motion.i>
                <span className="badge  d-flex ">0</span>
              </span>

              {/* Cart Icon */}
              <span className="cart__icon" onClick={navigateToCart}>
                <motion.i
                  whileTap={{ scale: 1.1 }}
                  class="ri-shopping-cart-line"></motion.i>
                {/* d-flex added to arrange the problem in css */}
                <span className="badge d-flex">{totalQuantity}</span>
              </span>

              {/*  User Image */}
              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser && currentUser.photoURL ? currentUser.photoURL : userIcon}
                  alt="user"
                   className="d-flex mb-1" //made css change here
                  onClick={toggleProfileActions} 
                />
                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions} >
                  {currentUser ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column ">
                      <Link to="/signup">SignUp </Link>
                      <Link to="/login">Login </Link>
                      {/* <Link to="/dashboard">Dashboard</Link> */}
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Menu */}
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
              {/* Mobile Menu Ends */}
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

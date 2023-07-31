// Import required libraries and components
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from "../../Routers/Routers"
// import AdminNav from "../../admin/AdminNav"
// import { useLocation } from 'react-router-dom'


const Layout = () => {

  // const location = useLocation();
   // The return statement defines the structure of the Layout component
  return (
    <>
    {/* Render the Header component */}
    <Header/>
    {/* {
      location.pathname.startsWith('/dashboard')? <AdminNav/>:<Header/>
    } */}

    {/* Render the Routers component */}
    <div>
      <Routers/>
    </div>

    {/* Render the Footer component */}
    <Footer/>
    </>
  )
}

// Export the Layout component to make it available for other parts of the application
export default Layout

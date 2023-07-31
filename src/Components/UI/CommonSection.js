// Import required libraries and styles
import React from 'react'
import { Container } from 'reactstrap'
import '../../Styles/Common-section.css';

// Define the CommonSection component, which displays a common section with a title
const CommonSection = ({title}) => {
  return (
  // Section with a common__section class
  <section className="common__section">
    <Container className='text-center'>
        <h1>{title}</h1>
    </Container>
  </section>)
}

// Export the CommonSection component to make it available for other parts of the application
export default CommonSection

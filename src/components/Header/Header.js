import React from 'react'; // Importing React library to enable the use of JSX syntax for creating components.
import "./Header.scss"; // Importing the CSS file for styling the Header component.
import Navbar from "./Navbar"; // Importing the Navbar component.
import SearchForm from "./SearchForm"; // Importing the SearchForm component.

// Functional component named Header.
const Header = () => {
  return (
    // Header section with 'header' class for styling.
    <header className='header'>
      {/* Rendering the Navbar component */}
      <Navbar />
      {/* Div for header content with 'header-content' class */}
      <div className='header-content flex align-center justify-center flex-column text-center'>
        {/* Rendering the SearchForm component */}
        <SearchForm />
        {/* Header title with 'header-title' class for styling */}
        <h1 className='text-white header-title ls-2'>What are your favorite cuisines?</h1>
        {/* Message for personalizing experience with 'text-uppercase' class */}
        <p className='text-uppercase text-white my-3 ls-1'>personalize your experience</p>
      </div>
    </header>
  )
}

export default Header; // Exporting the Header component to be used elsewhere in the application.

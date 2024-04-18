import React, {useState, useEffect} from 'react'; // Importing React and hooks for managing state and side effects.
import {Link} from "react-router-dom"; // Importing Link component from React Router for navigation.
import "./Header.scss"; // Importing CSS file for styling the Navbar component.
import { MdFoodBank} from "react-icons/md"; // Importing MdFoodBank icon from react-icons library.
import { IoMdMenu} from "react-icons/io"; // Importing IoMdMenu icon from react-icons library.
import { useSidebarContext } from '../../context/sidebarContext'; // Importing custom hook from sidebar context.

// Functional component named Navbar.
const Navbar = () => {
  const {openSidebar} = useSidebarContext(); // Accessing openSidebar function from sidebar context.
  const [scrolled, setScrolled] = useState(false); // State variable to track scrolling state.

  // Function to handle scrolling.
  const handleScroll = () => {
    const offset = window.scrollY; // Getting vertical scroll offset.
    // Updating scrolled state based on scroll offset.
    if(offset > 60){
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  // Effect hook to add scroll event listener.
  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Adding scroll event listener.
  })

  return (
    // Navbar element with dynamic class based on scrolling state.
    <nav className={`navbar bg-orange flex align-center ${scrolled ? 'scrolled': ""}`}>
      {/* Container for navbar content */}
      <div className='container w-100'>
        {/* Navbar content */}
        <div className='navbar-content text-white'>
          {/* Brand logo and toggle button */}
          <div className='brand-and-toggler flex align-center justify-between'>
            {/* Link to homepage */}
            <Link to = "/" className='navbar-brand fw-3 fs-22 flex align-center'>
              <MdFoodBank /> {/* MdFoodBank icon */}
              <span className='navbar-brand-text fw-7'>ELIJAH RECIPES</span> {/* Brand text */}
            </Link>
            {/* Button to toggle sidebar */}
            <div className='navbar-btns flex align-center'>
              <button type = "button" className='navbar-show-btn text-white' onClick={() => openSidebar()}>
                <IoMdMenu size = {27} /> {/* IoMdMenu icon */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar; // Exporting the Navbar component.

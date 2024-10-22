import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  
  // State to handle the mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Logout function
  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('user');
    
    // Redirect to the home page or login after logout
    navigate('/');
  };

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-neutral text-neutral-content shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          Thesis Repository
        </Link>
        
        {/* Hamburger icon for mobile */}
        <button
          className="block lg:hidden text-gray-300 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Desktop menu */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-4 text-gray-300">
            <li>
              <Link to="/" className="hover:text-primary">Home</Link>
            </li>
            <li>
              <a href="https://keerthanametpally06.wordpress.com/8-2/" className="hover:text-primary">WordPress Blog</a>
            </li>
            <li>
              <Link to="/search" className="hover:text-primary">Search</Link>
            </li>
            <li>
              <Link to="/submit-thesis" className="hover:text-primary">Submit Thesis</Link>
            </li>
            <li>
              <Link to="/peer-review" className="hover:text-primary">Peer Review</Link>
            </li>
            <li>
              <Link to="/statistics" className="hover:text-primary">Statistics</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">Contact</Link>
            </li>

            {/* Conditionally render Register and Login only if the user is NOT logged in */}
            {!loggedInUser && (
              <>
                <li>
                  <Link to="/register" className="hover:text-primary">Register</Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-primary">Login</Link>
                </li>
              </>
            )}

            {/* Conditionally render Logout if the user IS logged in */}
            {loggedInUser && (
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-primary bg-transparent border-none cursor-pointer text-gray-300"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden absolute top-16 left-0 w-full bg-neutral text-gray-300">
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <Link to="/" className="hover:text-primary" onClick={toggleMobileMenu}>Home</Link>
              </li>
              <li>
                <a href="https://digitalrepositorygroup7.wordpress.com/2024/10/13/introducing-the-digital-repository/" onClick={toggleMobileMenu}>WordPress Blog</a>
              </li>
              <li>
                <Link to="/search" className="hover:text-primary" onClick={toggleMobileMenu}>Search</Link>
              </li>
              <li>
                <Link to="/submit-thesis" className="hover:text-primary" onClick={toggleMobileMenu}>Submit Thesis</Link>
              </li>
              <li>
                <Link to="/peer-review" className="hover:text-primary" onClick={toggleMobileMenu}>Peer Review</Link>
              </li>
              <li>
                <Link to="/statistics" className="hover:text-primary" onClick={toggleMobileMenu}>Statistics</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary" onClick={toggleMobileMenu}>About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary" onClick={toggleMobileMenu}>Contact</Link>
              </li>

              {!loggedInUser && (
                <>
                  <li>
                    <Link to="/register" className="hover:text-primary" onClick={toggleMobileMenu}>Register</Link>
                  </li>
                  <li>
                    <Link to="/login" className="hover:text-primary" onClick={toggleMobileMenu}>Login</Link>
                  </li>
                </>
              )}

              {loggedInUser && (
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMobileMenu();
                    }}
                    className="hover:text-primary bg-transparent border-none cursor-pointer text-gray-300"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  console.log(click);
  // if (click) {
  //   document.querySelector("body").classList.toggle("overflow");
  // }
  return (
    <>
      <div className="navbar">
        <div className="navbar-container ">
          <Link to="/" className="navbar-logo" onClick={handleClick}>
            Welcome
            <div className="logo">
              <span>
                <b>DevBhumi</b>
              </span>
            </div>
          </Link>
          <div className="nav-menus">
            <div onClick={handleClick} className="menu-icon">
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <Link to="/" className="nav-link" onClick={handleClick}>
                <li className="nav-item">Home </li>
              </Link>
              <Link to="/calculate" className="nav-link" onClick={handleClick}>
                <li className="nav-item">Tour cost</li>
              </Link>

              <Link to="/travel" className="nav-link" onClick={handleClick}>
                <li className="nav-item">Travel guidelines</li>
              </Link>
              <Link to="/photo" className="nav-link" onClick={handleClick}>
                <li className="nav-item">Photo Gallery</li>
              </Link>
              <Link to="/contact" className="nav-link" onClick={handleClick}>
                <li className="nav-item">Contact Us</li>
              </Link>
              <Link to="/form" className="nav-link" onClick={handleClick}>
                <li className="nav-item">Get Detail</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

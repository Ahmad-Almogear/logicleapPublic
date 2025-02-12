import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/main.css';
// import '../assets/js/main';

function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false);


  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">LogicLeap</h1>
        </Link>

        <nav id="navmenu" className={`navmenu ${mobileNavActive ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li><Link to="/home" className="active">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/courses2">Courses</Link></li>
            {/* <li className="dropdown">
              <a href="#">
                <span>Pages</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li><Link to="/successStory">Success Story</Link></li>
                <li><Link to="/question">Questions</Link></li>
              </ul>
            </li> */}
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileNav}
          />
        </nav>

        <a className="btn-getstarted" href="/login">
          <i className="bi bi-person-plus"></i>
        </a>

      </div>
    </header>
  );
}

export default Header;

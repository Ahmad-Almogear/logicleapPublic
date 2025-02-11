import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/main.css';
import '../assets/js/main';

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
            <li><Link to="/aboutUs" className="active">Home</Link></li>
            <li><Link to="/aboutUs">About</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li className="dropdown">
              <a href="#">
                <span>Pages</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li><Link to="/successStory">Success Story</Link></li>
                <li><Link to="/question">Questions</Link></li>
              </ul>
            </li>
            <li><Link to="/contactUs">Contact</Link></li>
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileNav}
          />
        </nav>

        <Link className="btn-getstarted" to="/#about">Get Started</Link>

      </div>
    </header>
  );
}

export default Header;

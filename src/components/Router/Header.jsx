import React from "react";
import { NavLink } from "react-router-dom";
// import './Router\Ques\component\logo.svg'
// import logo from './apple_logo.svg';
import logo from "./richtv_logo.svg";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  pt-3 pb-3">
        <div className="container">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="React_img" className="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pt-4 pt-lg-0">
              <li className="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <a class="nav-link" href="#" aria-current="about_page">About Us</a> */}
                <NavLink
                  to="/Services"
                  className="nav-link"
                  aria-current="Services_page"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <a class="nav-link" href="#" aria-current="about_page">About Us</a> */}
                <NavLink
                  to="/About"
                  className="nav-link"
                  aria-current="about_page"
                >
                  About Us
                </NavLink>
              </li>
              {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
              <li className="nav-item">
                {/* <a class="nav-link" href="#" aria-current="contact_page">Contact Us</a> */}
                <NavLink
                  to="/Contact"
                  className="nav-link"
                  aria-current="contact_page"
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <a class="nav-link" href="#" aria-current="contact_page">Contact Us</a> */}
                <NavLink
                  to="/Watchlist"
                  className="nav-link"
                  aria-current="Watchlist_page"
                >
                  Watchlist
                </NavLink>
              </li>
            </ul>
            {/* <form class="d-flex ps-4">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn search_btn" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import ft_logo from "./Rich_logo.png";
import { NavLink } from "react-router-dom";
import ft_arrow from "./ft_arrow.svg";
import facebook from "./Pages/Card_img/Facebook.svg";
import instagram from "./Pages/Card_img/Instagram.svg";
import twitter from "./Pages/Card_img/Twitter.svg";
import tiktok from "./Pages/Card_img/Tiktok.svg";
import linkedin from "./Pages/Card_img/LinkedIn.svg";
import youtube from "./Pages/Card_img/Youtube.svg";
const ft_pra = {
  paragraph:
    "Trading data in widgets displayed with a 15-minute delay. Prices available on stock page updated in real time. Market & fundamental data appearing on Rich Tv sourced from various 3rd party data providers.",
};
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  useEffect(() => {
    setIsDisabled(!validateEmail(email));
  }, [email]);

  const validateEmail = (email) => {
    // Simple email validation logic
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  return (
    <>
      <footer className="pb-2 footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div>
                {/* <img src={ft_logo} alt="path is wrong" /> */}
                <NavLink to="/">
                  <img src={ft_logo} alt="path is wrong" />
                </NavLink>
              </div>
              <p className="ft-p">{ft_pra.paragraph}</p>
            </div>
            <div className="col-lg-8">
              <div className="row ps-lg-5 pt-5 pt-lg-0">
                <div className="col-md-3 col-6 right-footer pt-3 pt-md-0">
                  <h3>Rich Tv</h3>
                  <ul>
                    <li>
                      <NavLink to="/About">About Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/About">Pricing and Plans</NavLink>
                    </li>
                    <li>
                      <NavLink to="/About">Affiliate Program</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Product">Product</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Contact">Contact Us</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-6 pt-3 pt-md-0 right-footer">
                  <h3>Learning</h3>
                  <ul>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      {/* <a href="#">Privacy Policy</a> */}
                      <NavLink
                        className=""
                        to="Privacy"
                        aria-label="Privacy Policy"
                      >
                        Privacy Policy
                      </NavLink>
                    </li>
                    <li>
                      {/* <a href="#Use_terms"></a> */}
                      <NavLink className="" to="Use_terms" aria-label="Terms">
                        Term of service
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 pt-md-0 pt-5 right-footer">
                  <h3>Get Latest Stock Pick Alerts</h3>
                  {/* <ul>
                                <li>
                                    <a href="">Online Counseling</a>
                                </li>
                                <li>
                                    <a href="">Offline Counseling</a>
                                </li>
                            </ul> */}
                  <form className="right_input_form">
                    <div className="ft-input d-flex justify-content-between align-items-center">
                      <input
                        type="text"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={onEmailChange}
                      />
                      <a href="#" disabled={true}>
                        <img src={ft_arrow} />
                      </a>
                    </div>
                    <div className=" position-relative d-flex align-items-center gap-2 gap-md-3 pt-2 ps-2 ps-md-0">
                      <input
                        type="checkbox"
                        name="Check_Email"
                        value="Agree_Email"
                      />
                      <label htmlFor="checkEmail" className="checked_email">
                        I agree to receive newsletter and email alerts.
                      </label>
                      <span className="Email_box"></span>
                    </div>
                  </form>
                  <div className="social_links pt-5 d-flex  gap-4 link-center">
                    <a href="https://www.facebook.com">
                      <img src={facebook} />
                    </a>
                    <a href="https://www.youtube.com">
                      <img src={youtube} />
                    </a>
                    <a href="https://www.instagram.com">
                      <img src={instagram} />
                    </a>
                    <a href="https://www.twitter.com">
                      <img src={twitter} />
                    </a>
                    <a href="https://www.linkedin.com">
                      <img src={linkedin} />
                    </a>
                    <a href="https://www.tiktok.com">
                      <img src={tiktok} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-md-start footer_bottom">
            <p className="ft_bottom_p">
              Copyright © 2023 Rich Tv. All rights reserved{" "}
            </p>
            <NavLink
              className="Privacy_Policy"
              to="Privacy"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </NavLink>
            <NavLink className="Terms" to="Use_terms" aria-label="Terms">
              Terms of Use
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

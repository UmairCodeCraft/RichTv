import React from "react";
import { useNavigate } from "react-router-dom";
import Basic from "./basic.png";
import Common from "./Common";
const About = () => {
  const home_nav = useNavigate();
  const go_home = () => {
    home_nav("/");
  };
  return (
    <>
      <div className="container">
        <Common
          name="Welcome To  "
          lname="About Page "
          img_src={Basic}
          bt_name="Get Started"
          visit="/Contact"
          pra_g=" Which sections will your page require? Some common pieces include your mission statement, a brief company description and corporate history"
        />
        <div className="d-flex gap-3 pb-5 about_page_btn">
          <button onClick={go_home} className="btn btn-outline-primary">
          Go to home page
        </button>
        
        <button onClick={() => home_nav(-1)} className="btn btn-outline-primary">
          Go back previous page
        </button>
        </div>
      </div>
    </>
  );
};

export default About;

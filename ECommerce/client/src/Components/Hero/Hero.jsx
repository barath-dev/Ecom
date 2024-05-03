import React from "react";
import "./Hero.css";
// import hero_image from "../Assets/hero_image.png";

import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>HOT FROM KITCHEN</h2>
        <div>
          <div className="hero-hand-icon">
            <p>To the hostel</p>
            
          </div>
          <p></p>
          <p>DOORSTEP</p>
        </div>
        <div className="hero-latest-btn">
          <div>ORDER NOW</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      {/* <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div> */}
    </div>
  );
};

export default Hero;

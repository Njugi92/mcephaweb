import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import Typical from "react-typical";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          Welcome to Mcepha & ASSOCIATES Certified Public Accountants{" "}
          <Typical
            loop={Infinity}
            steps={[
              "Mcepha & ASSOCIATES",
              1000,
              "Accountancy",
              1000,
              "Tax & Audit",
              1000,
              "Business Advisory",
              1000,
            ]}
          />
        </h1>
        <p>We Offer, Accountancy, Tax, Audit and Advisory Services</p>

        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroText">
        <h1>Excellence in Islamic Education</h1>
        <p>Empowering students with the perfect balance...</p>
        <Link to="/aboutmadarsa">
          <button className="btn">
            see more <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

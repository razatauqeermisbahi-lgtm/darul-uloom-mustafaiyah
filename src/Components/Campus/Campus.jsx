import React from "react";
import "./campus.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

import pic1 from "../../assets/gallery-pic1.png";
import pic2 from "../../assets/gallery-pic2.png";
import pic3 from "../../assets/gallery-pic3.png";
import pic4 from "../../assets/gallery-pic4.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
        <img src={pic4} alt="" />
      </div>
      <Link to="/gallery">
        <button className="btn btnDark">
          See more here <FaArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default Campus;

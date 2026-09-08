import React from "react";
import { FaMosque, FaGraduationCap, FaUsers, FaUser } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";

import "./Statistics.css";

const Statistics = () => {
  return (
    <div className="statistics">
      <p className="para1">
        for more than two decades, our Madarsa has been dedicated to
      </p>
      <p className="para"> nurturing knowladge, faith and charachter</p>
      <div className="cardContainer">
        <div className="card">
          <div className="achivementLogo">
            <FaMosque />
          </div>
          <h2>25+</h2>
          <hr />
          <h4>years of excellence</h4>
        </div>
        <div className="card">
          <div className="achivementLogo">
            <PiStudentBold />
          </div>
          <h2>250+</h2>
          <hr />
          <h4>Students</h4>
        </div>
        <div className="card">
          <div className="achivementLogo">
            <FaGraduationCap />
          </div>
          <h2>17+</h2>
          <hr />
          <h4>Teachers</h4>
        </div>
        <div className="card">
          <div className="achivementLogo">
            <FaUsers />
          </div>
          <h2>1000+</h2>
          <hr />
          <h4>Graduates</h4>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

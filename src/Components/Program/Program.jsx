import React from "react";
import "./Program.css";
import darseNizami from "../../assets/darse-nizami.png";
import hifz from "../../assets/hifz.png";
import qirat from "../../assets/qirat.png";
import engComputer from "../../assets/eng&comp.png";
import { FaUserGraduate } from "react-icons/fa";
import { FaBookQuran } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Program = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={darseNizami} alt="darseNizami" />
        <Link to="/Dars-e-Nizami">
          <div className="caption">
            <span>
              <FaUserGraduate />
            </span>
            <h2>Darse Nizami</h2>
          </div>
        </Link>
      </div>

      <div className="program">
        <img src={hifz} alt="hifz" />
        <Link to="/Hifz">
          <div className="caption">
            <span>
              <FaBookQuran />
            </span>
            <h2>Hifz</h2>
          </div>
        </Link>
      </div>
      <div className="program">
        <img src={qirat} alt="qirat" />

        <Link to="/Qirat">
          <div className="caption">
            <span>
              <SiGoogleclassroom />
            </span>
            <h2>Qirat</h2>
          </div>
        </Link>
      </div>
      <div className="program">
        <img src={engComputer} alt="English & computer" />

        <Link to="/EnglishComputer">
          <div className="caption">
            <span>
              <FaComputer />
            </span>
            <h2>English & Computer</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Program;

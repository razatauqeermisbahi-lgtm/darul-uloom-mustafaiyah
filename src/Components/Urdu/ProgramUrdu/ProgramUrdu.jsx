import React from "react";
import "./ProgramUrdu.css";
import darseNizami from "../../../assets/darse-nizami.png";
import hifz from "../../../assets/hifz.png";
import qirat from "../../../assets/qirat.png";
import engComputer from "../../../assets/eng&comp.png";

import { FaUserGraduate } from "react-icons/fa";
import { FaBookQuran } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";

import { Link } from "react-router-dom";

const ProgramUrdu = () => {
  return (
    <div className="programs ">
      <div className="program">
        <img src={darseNizami} alt="darseNizami" />
        <Link to="/ur/Dars-e-NizamiUrdu">
          <div className="caption urdu">
            <span>
              <FaUserGraduate />
            </span>
            <h2>درس نظامی</h2>
          </div>
        </Link>
      </div>

      <div className="program">
        <img src={hifz} alt="hifz" />
        <Link to="/ur/HifzUrdu">
          <div className="caption urdu">
            <span>
              <FaBookQuran />
            </span>
            <h2>حفظ</h2>
          </div>
        </Link>
      </div>
      <div className="program">
        <img src={qirat} alt="qirat" />

        <Link to="/ur/QiratUrdu">
          <div className="caption urdu">
            <span>
              <SiGoogleclassroom />
            </span>
            <h2>قرأت</h2>
          </div>
        </Link>
      </div>
      <div className="program">
        <img src={engComputer} alt="English & computer" />

        <Link to="/ur/EngCompUrdu">
          <div className="caption urdu">
            <span>
              <FaComputer />
            </span>
            <h2>انگلش و کمپیوٹر</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProgramUrdu;

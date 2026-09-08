import React from "react";
import "./PrincipleMassage.css";
import domePic from "../../assets/dome-pic.png";
import logoPic from "../../assets/darulUloomLogopic.png";
import bismillah from "../../assets/bismillah-pic.png";

const PrincipleMassage = () => {
  return (
    <div className="principleMassage">
      <div className="left">
        <img src={domePic} />
      </div>
      <div className="right">
        <img src={bismillah} alt="" />
        <h4>Assalamu Alaikum wa Rahmatullahi wa Barakatuh,</h4>
        <p>
          Welcome to Darul Uloom Mustafaiyah, a center dedicated to preserving
          the timeless teachings of Islam while preparing students to meet the
          challenges of the modern world.
        </p>
        <p>
          Since our establishment in 1403 AH (1981 CE), our mission has been to
          provide authentic Islamic education based on the Holy Qur'an, the
          Sunnah of Prophet Muhammad ﷺ, and the scholarly tradition of Ahl
          al-Sunnah wa al-Jama'ah, alongside quality education in English and
          Computer studies.
        </p>
        <p>
          We believe that true success lies in combining knowledge, righteous
          character, discipline, and service to humanity. Our aim is to develop
          students who are spiritually strong, academically capable, and morally
          responsible, enabling them to contribute positively to both the Muslim
          Ummah and society.
        </p>
        <p>
          I warmly invite students and parents to become a part of this blessed
          institution. Together, let us strive to nurture future generations
          with faith, wisdom, and excellence.
        </p>
        <p>
          May Allah Almighty bless our efforts and grant success to every
          student. Ameen.
        </p>
        <hr />
        <div className="rightBottom">
          <h2>Principal</h2>
          <p>Darul Uloom Mustafaiyah</p>
        </div>
      </div>
    </div>
  );
};

export default PrincipleMassage;

import React from "react";
import "./About.css";
import domePic from "../../assets/dome-pic.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="aboutleft">
        <img src={domePic} alt="" />
      </div>
      <div className="aboutRight">
        <h3>About Darul Uloom Mustafaiyah</h3>
        <h2>Preserving Islamic Heritage, Empowering Future Generations</h2>
        <p>
          Established in 1403 AH (1981 CE), Darul Uloom Mustafaiyah is a
          renowned Islamic institution committed to providing authentic Islamic
          education based on the Holy Qur'an, the Sunnah of Prophet Muhammad ﷺ,
          and the scholarly tradition of Ahl al-Sunnah wa al-Jama'ah. The
          institution's present campus was newly constructed in 1432 AH (2011
          CE).
        </p>
        <p>
          Our curriculum includes Hifz-ul-Qur'an, Nazira, Qira'at, and the
          comprehensive Dars-e-Nizami program, along with English and Computer
          Education, enabling students to excel in both religious and
          contemporary fields while preserving their Islamic identity.
        </p>
        <p>
          We place great emphasis on sound Aqidah, noble character, discipline,
          and service to humanity. The institution is dedicated to preserving
          and promoting the teachings of Maslak-e-Ala Hazrat, inspiring love for
          Allah, devotion to the Noble Messenger ﷺ, and adherence to the
          authentic heritage of Ahl al-Sunnah.
        </p>
        <p>
          Our goal is to develop graduates who are spiritually enriched,
          academically capable, and socially responsible—individuals who serve
          Islam and the wider community with knowledge, sincerity, wisdom, and
          integrity.
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./Facilities.css";
import facility1 from "../../assets/Facility01.png";
import facility2 from "../../assets/Facility02.png";
import facility3 from "../../assets/Facility03.png";
import facility4 from "../../assets/Facility04.png";
import facility5 from "../../assets/Facility05.png";
import facility6 from "../../assets/Facility06.png";
import facility7 from "../../assets/Facility07.png";
import facility8 from "../../assets/Facility08.png";

const Facilities = () => {
  return (
    <div className="facilities">
      <div className="cardFacility">
        <img src={facility1} />
        <h3>Library</h3>
        <p>
          A well-stocked library with islamic and modern books for all students.
        </p>
      </div>
      <div className="cardFacility">
        <img src={facility2} alt="" />
        <h3>Computer lab</h3>
        <p>
          Modern Computer lab with latest divices and internet access for
          practicing and learning.
        </p>
      </div>
      <div className="cardFacility">
        <img src={facility3} alt="" />
        <h3>Mosque</h3>
        <p>A spacious and peacful mosque for salah and Islamic activities. </p>
      </div>
      <div className="cardFacility">
        <img src={facility4} alt="" />
        <h3>Hostel</h3>
        <p>
          Separate and comfertable hostel facility with all basic amenities.
        </p>
      </div>
      <div className="cardFacility">
        <img src={facility5} alt="" />
        <h3>Dining Hall</h3>
        <p>
          Hygienic and nutritious meals are served daily in our dining hall.
        </p>
      </div>
      <div className="cardFacility">
        <img src={facility6} alt="" />
        <h3>Playground</h3>
        <p>A large playground for sport and physical activities. </p>
      </div>
      <div className="cardFacility">
        <img src={facility7} alt="" />
        <h3>Medical Facility</h3>
        <p>Basic medical facility available for students' health and care. </p>
      </div>
      <div className="cardFacility">
        <img src={facility8} alt="" />
        <h3> Scholarship</h3>
        <p>Monthly financial support for deserving and talented students. </p>
      </div>
    </div>
  );
};

export default Facilities;

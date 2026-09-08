import React, { useRef, useState } from "react";
import "./Testimonials.css";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import user1 from "../../assets/user1.png";

const Testimonials = () => {
  const totalCard = 5;
  const visibaleCard = window.innerWidth <= 768 ? 1 : 2;
  const cardWidth = 100 / visibaleCard;

  const maxSlide = (totalCard - visibaleCard) * cardWidth;

  const [slide, setSlide] = useState(0);

  const slideForword = () => {
    if (slide < maxSlide) {
      setSlide((prev) => prev + cardWidth);
    }
  };

  const slideBackword = () => {
    if (slide > 0) {
      setSlide((prev) => prev - cardWidth);
    }
  };
  return (
    <div className="testimonials">
      <button className="nextBtn" onClick={slideForword}>
        <GrFormNextLink />
      </button>
      <button className="prevBtn" onClick={slideBackword}>
        <GrFormPreviousLink />
      </button>
      <div className="slider">
        <ul style={{ transform: `translateX(-${slide}%)` }}>
          <li className="move">
            <div className="slide">
              <div className="userInfo">
                <img src={user1} alt="" />
                <div>
                  <h3>MD Rehan Raza</h3>
                  <span>Ahemdabad Gujrat</span>
                </div>
              </div>
              <p>
                "The peaceful environment and disciplined routine have helped me
                memorize the Holy Quran with confidence. I am truly grateful to
                my teachers for their guidance."{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user1} alt="" />
                <div>
                  <h3>Mushtaq </h3>
                  <span>kanaida</span>
                </div>
              </div>
              <p>
                Along with Islamic education, I have gained valuable English
                communication and computer skills. This has prepared me for both
                higher education and modern opportunities
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user1} alt="" />
                <div>
                  <h3>Mohammad Raza</h3>
                  <span>West Bengal</span>
                </div>
              </div>
              <p>
                The experienced instructors helped me improve my Quran
                recitation with proper Tajweed and confidence. Every lesson has
                been inspiring and beneficial.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user1} alt="" />
                <div>
                  <h3>Irshad Raza</h3>
                  <span>Gujart</span>
                </div>
              </div>
              <p>
                Darul Uloom Mustafaiyah gave me more than education—it taught me
                discipline, respect, and strong moral values that continue to
                guide me in everyday life
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user1} alt="" />
                <div>
                  <h3>Sayyad Qutubuddin </h3>
                  <span>Karanta Gujrat</span>
                </div>
              </div>
              <p>
                I appreciate the balance between religious studies and modern
                education. The friendly atmosphere and dedicated teachers make
                learning enjoyable every day
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

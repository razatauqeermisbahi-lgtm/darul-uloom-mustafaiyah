import React from "react";
import "./HeroUrdu.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const HeroUrdu = () => {
  return (
    <div>
      <div className="heroUrdu">
        <div className="heroTextUrdu">
          <h1> دارالعلوم مصطفائیہ ہلدروا</h1>
          <p>
            دارالعلوم مصطفائیہ میں طلبہ کو قرآن و سنت کی مستند تعلیم کے ساتھ
            جدید علوم، کمپیوٹر، انگریزی اور اخلاقی تربیت فراہم کی جاتی ہے تاکہ
            وہ دین و دنیا دونوں میں کامیاب اور باکردار مسلمان بن سکیں۔
          </p>
          <Link to="/ur/aboutmadarsa">
            <button className="btn">
              مزید پڑھیں <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroUrdu;

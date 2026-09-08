import React from "react";
import "./StatisticsUrdu.css";

import { FaMosque, FaGraduationCap, FaUsers, FaUser } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";

const StatisticsUrdu = () => {
  return (
    <div className="statistics">
      <p className="para paraUrdu">
        دو دہائیوں سے زائد عرصے سے دارالعلوم مصطفائیہ علمِ دین کی اشاعت، ایمان و
        عقیدہ کی مضبوطی اور اعلیٰ اخلاق و کردار کی تعمیر کے مقدس مشن میں مصروفِ
        عمل ہے۔ اللہ تعالیٰ کے فضل و کرم سے ادارہ مسلسل ایسی نسل تیار کر رہا ہے
        جو دینی و اخلاقی اقدار سے آراستہ ہو کر امت و معاشرے کی رہنمائی کا فریضہ
        انجام دے رہی ہے۔
      </p>
      <div className="cardContainer">
        <div className="card cardUrdu">
          <div className="achivementLogo">
            <FaMosque />
          </div>
          <h2>25+</h2>
          <hr />
          <h4>سالہ شاندار تعلیمی و دینی خدمات</h4>
        </div>
        <div className="card cardUrdu">
          <div className="achivementLogo">
            <PiStudentBold />
          </div>
          <h2>250+</h2>
          <hr />
          <h4>زیرِ تعلیم طلبہ</h4>
        </div>
        <div className="card cardUrdu">
          <div className="achivementLogo">
            <FaGraduationCap />
          </div>
          <h2>17+</h2>
          <hr />
          <h4>ماہر اور باصلاحیت اساتذۂ کرام</h4>
        </div>
        <div className="card cardUrdu">
          <div className="achivementLogo">
            <FaUsers />
          </div>
          <h2>1000+</h2>
          <hr />
          <h4>فارغ التحصیل علماء و طلبہ</h4>
        </div>
      </div>
    </div>
  );
};

export default StatisticsUrdu;

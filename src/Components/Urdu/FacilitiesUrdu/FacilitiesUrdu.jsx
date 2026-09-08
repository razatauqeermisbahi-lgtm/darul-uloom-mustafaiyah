import React from "react";
import "./FacilitiesUrdu.css";
import facility1 from "../../../assets/Facility01.png";
import facility2 from "../../../assets/Facility02.png";
import facility3 from "../../../assets/Facility03.png";
import facility4 from "../../../assets/Facility04.png";
import facility5 from "../../../assets/Facility05.png";
import facility6 from "../../../assets/Facility06.png";
import facility7 from "../../../assets/Facility07.png";
import facility8 from "../../../assets/Facility08.png";

const FacilitiesUrdu = () => {
  return (
    <div className="facilities">
      <div className="cardFacility cardFacilityUrdu">
        <img src={facility1} />
        <h3>لائبریری</h3>
        <p>
          دینی، عصری اور تحقیقی کتب پر مشتمل ایک بہترین لائبریری، جہاں طلبہ
          مطالعہ اور تحقیق سے بھرپور استفادہ کرتے ہیں۔
        </p>
      </div>
      <div className="cardFacility cardFacilityUrdu">
        <img src={facility2} alt="" />
        <h3>کمپیوٹر لیب</h3>
        <p>
          جدید کمپیوٹرز، انٹرنیٹ اور ضروری سافٹ ویئر سے آراستہ کمپیوٹر لیب، جہاں
          طلبہ عملی تربیت حاصل کرتے ہیں۔
        </p>
      </div>
      <div className="cardFacility cardFacilityUrdu">
        <img src={facility3} alt="" />
        <h3>مسجد</h3>
        <p>
          کشادہ اور پُرسکون مسجد، جہاں پنج وقتہ نماز، تلاوتِ قرآن اور دیگر دینی
          سرگرمیوں کا اہتمام کیا جاتا ہے۔
        </p>
      </div>
      <div className="cardFacility cardFacilityUrdu">
        <img src={facility4} alt="" />
        <h3>رہائشی ہاسٹل</h3>
        <p>
          طلبہ کے لیے علیحدہ، محفوظ اور آرام دہ رہائشی ہاسٹل، جہاں بنیادی
          سہولیات مہیا کی گئی ہیں۔
        </p>
      </div>
      <div className="cardFacility cardFacilityUrdu">
        <img src={facility5} alt="" />
        <h3>طعام گاہ</h3>
        <p>
          صاف ستھری اور کشادہ طعام گاہ، جہاں طلبہ کو روزانہ معیاری، متوازن اور
          صحت بخش غذا فراہم کی جاتی ہے۔
        </p>
      </div>
      <div className="cardFacility cardFacilityUrdu">
        <img src={facility6} alt="" />
        <h3>کھیل کا میدان</h3>
        <p>
          طلبہ کی جسمانی نشوونما اور تفریح کے لیے وسیع و عریض کھیل کا میدان۔
        </p>
      </div>
      <div className="cardFacility cardFacilityUrdu">
        <img src={facility7} alt="" />
        <h3>طبی سہولت</h3>
        <p>
          طلبہ کی صحت و تندرستی کے لیے ابتدائی طبی امداد اور ضروری طبی سہولیات
          دستیاب ہیں۔{" "}
        </p>
      </div>
      <div className="cardFacility cardFacilityUrdu">
        <img src={facility8} alt="" />
        <h3> وظیفہ</h3>
        <p>
          مستحق، ذہین اور نمایاں کارکردگی دکھانے والے طلبہ کے لیے ماہانہ مالی
          معاونت اور وظائف کا انتظام۔{" "}
        </p>
      </div>
    </div>
  );
};

export default FacilitiesUrdu;

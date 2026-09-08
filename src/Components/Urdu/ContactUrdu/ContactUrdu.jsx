import React, { useState } from "react";
import "./ContactUrdu.css";
import { MdMessage } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp, IoLockClosedSharp } from "react-icons/io5";

const ContactUrdu = () => {
  /* ========== Web 3 form ============== */

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "9ab02e8b-2423-4fb1-92ed-db0487cb7c34");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    data.success
      ? (setResult("Success!"), event.target.reset())
      : setResult("Error");
  };
  return (
    <div className="contact">
      <div className="contact-col contact-colUrdu">
        <h3>
          اپنا پیغام ارسال فرمائیں
          <span>
            <MdMessage />
          </span>
        </h3>
        <p>
          اگر آپ دارالعلوم مصطفائیہ کے متعلق مزید معلومات حاصل کرنا چاہتے ہیں،
          داخلے کے بارے میں رہنمائی درکار ہو، یا کوئی سوال، مشورہ یا رائے پیش
          کرنا چاہتے ہوں، تو درج ذیل فارم کے ذریعے ہم سے رابطہ فرمائیں۔ ہماری
          ٹیم آپ کے پیغام کا بروقت جواب دینے کی بھرپور کوشش کرے گی۔
        </p>
        <ul>
          <li>
            <BiLogoGmail className="font" />
            Contact@greatstack.dev
          </li>
          <li>
            <FaPhoneVolume className="font2" />
            +91 5815812685
          </li>
          <li>
            <IoLocationSharp className="font3" />
            haldarva, palej, karjan, <br /> Vadodra (Gujrat)
          </li>
        </ul>
      </div>

      <form onSubmit={onSubmit}>
        <label>Your name</label>
        <input type="text" name="name" placeholder="Enter your name" />
        <label> Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your mobile number"
          required
          pattern="[0-9]{10,}"
          title="Please enter at least 10 digits"
        />
        <label>Write your massage here</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message"
        ></textarea>
        <button type="submit" className="btn btnDark">
          Submit Now
        </button>
        <span className="sending">{result}</span>
      </form>
    </div>
  );
};
export default ContactUrdu;

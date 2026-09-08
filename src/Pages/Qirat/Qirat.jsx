import React from "react";
import "./Qirat.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Qirat = () => {
  return (
    <>
      <Navbar page="gallery" />
      <div className="qirat">
        <h1>Qira'at & Tajweed</h1>

        <h3>The Art of Qur'anic Recitation</h3>
        <p>
          The Qira'at & Tajweed program at Darul Uloom Mustafaiyah is dedicated
          to teaching students the correct and beautiful recitation of the Holy
          Qur'an. The course focuses on accurate pronunciation, proper
          articulation of Arabic letters (Makharij), and the practical
          application of Tajweed rules.
        </p>
        <p>
          Students learn to recite the Qur'an with confidence, fluency, and
          respect for the sacred words of Allah while preserving the authentic
          methods of recitation passed down through generations.
        </p>

        <h3>What Students Will Learn</h3>
        <p>Throughout the program, students receive practical training in:</p>
        <ul>
          <li>Correct Makharij (Articulation Points)</li>
          <li>Rules of Tajweed</li>
          <li>Proper Pronunciation of Arabic Letters</li>
          <li>Voice Improvement Techniques</li>
          <li>Breath Control During Tilawah</li>
          <li>Common Mistakes and Their Correction</li>
          <li>Daily Qur'an Practice Sessions</li>
        </ul>
        <h3>Learning Experience</h3>
        <p>
          Our teaching approach combines individual attention with regular
          practical sessions. Every student receives personalized guidance from
          qualified instructors who monitor pronunciation, fluency, and overall
          progress. Continuous practice and constructive feedback help students
          steadily improve their recitation skills.
        </p>

        <h3>Who Can Join?</h3>
        <p>The course is suitable for:</p>
        <ul>
          <li>Beginners who wish to improve their Qur'anic recitation.</li>
          <li>Students enrolled in Hifz-ul-Qur'an.</li>
          <li>Dars-e-Nizami students.</li>
          <li>Adults who want to learn Tajweed correctly.</li>
          <li>
            Anyone seeking to recite the Qur'an according to authentic Islamic
            tradition.
          </li>
        </ul>

        <h3>Teaching Method</h3>
        <p>
          Our instructors follow a practical, student-centered approach that
          emphasizes listening, repetition, correction, and daily practice.
          Small class sizes and one-to-one correction sessions ensure that every
          learner receives the attention needed to achieve excellence in
          Qur'anic recitation.
        </p>

        <h3>Our Mission</h3>
        <p>
          At Darul Uloom Mustafaiyah, we believe that every Muslim should recite
          the Holy Qur'an with correctness and beauty. Through this program, we
          aim to preserve the authentic tradition of Qur'anic recitation while
          inspiring students to develop a lifelong connection with the Book of
          Allah.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Qirat;

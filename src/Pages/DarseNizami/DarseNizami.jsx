import React from "react";
import "./DarseNizami.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const DarseNizami = () => {
  return (
    <>
      <Navbar page="gallery" />
      <div className="darseNizami">
        <h1>Dars-e-Nizami</h1>
        <h3>About the Course</h3>
        <p>
          Dars-e-Nizami is the flagship educational program of Darul Uloom
          Mustafaiyah, designed to provide students with a deep and systematic
          understanding of Islamic sciences. The course combines traditional
          methods of learning with disciplined study, enabling students to
          develop sound religious knowledge, strong moral character, and the
          ability to serve the Muslim community with wisdom and sincerity.
        </p>
        <p>
          Students are guided by experienced scholars through every stage of
          learning, ensuring a balanced education rooted in authentic Islamic
          teachings.
        </p>
        <h3>Course Overview</h3>
        <p>
          The Dars-e-Nizami curriculum covers a wide range of Islamic
          disciplines that have been taught in renowned institutions for
          centuries. It is structured to gradually build a student's
          understanding from foundational subjects to advanced Islamic
          scholarship.
        </p>
        <p>
          The program focuses on developing analytical thinking, research
          skills, and the practical application of Islamic knowledge in everyday
          life.
        </p>
        <h3>Subjects Included</h3>
        <ul>
          <li>Holy Qur'an and Tafsir</li>
          <li>Hadith and Principles of Hadith</li>
          <li>Fiqh (Islamic Jurisprudence)</li>
          <li>Aqeedah (Islamic Beliefs)</li>
          <li>Usul al-Fiqh</li>
          <li>Arabic Grammar (Nahw)</li>
          <li>Arabic Morphology (Sarf)</li>
          <li>Balaghah (Arabic Rhetoric)</li>
          <li>Mantiq (Logic)</li>
          <li>Philosophy</li>
          <li>Islamic History</li>
          <li>Seerah of Prophet Muhammad ﷺ</li>
          <li>Urdu Language</li>
          <li>Arabic Literature</li>
          <li>Farsi Language</li>
          <li>English Language</li>
        </ul>
        <h3>Learning Outcomes</h3>
        <p>Upon successful completion of the course, students will:</p>
        <ul>
          <li>Develop a strong understanding of the Qur'an and Sunnah.</li>
          <li>Gain proficiency in the Arabic language.</li>
          <li>Learn Islamic jurisprudence and its practical application.</li>
          <li>Build confidence in delivering Islamic lectures and guidance.</li>
          <li>Strengthen research and analytical skills.</li>
          <li>Develop excellent moral character and leadership qualities.</li>
        </ul>
        <h3>Why Choose This Course?</h3>
        <ul>
          <li>Qualified and experienced scholars.</li>
          <li>Authentic Islamic curriculum.</li>
          <li>Peaceful and disciplined learning environment.</li>
          <li>Focus on character building and Islamic values.</li>
          <li>Integration of modern educational awareness.</li>
          <li>Opportunities for higher Islamic studies.</li>
        </ul>
        <h3>Course Duration</h3>
        <p>
          <b>Duration:</b>8 Years
        </p>
        <p>
          The program is divided into different academic levels, allowing
          students to progress systematically from foundational knowledge to
          advanced Islamic scholarship.
        </p>
        <h3>Eligibility</h3>
        <p>
          Students who have completed primary Islamic education or possess the
          required foundational knowledge may apply for admission after
          fulfilling the institution's admission requirements.
        </p>

        <h3>Our Commitment</h3>
        <p>
          At Darul Uloom Mustafaiyah, we are committed to producing scholars who
          combine authentic Islamic knowledge with humility, sincerity, and a
          strong sense of responsibility. Our aim is to prepare students who can
          contribute positively to their communities while preserving the rich
          heritage of Islamic scholarship.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default DarseNizami;

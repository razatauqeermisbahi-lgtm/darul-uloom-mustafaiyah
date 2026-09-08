import React from "react";
import "./Hifz.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Hifz = () => {
  return (
    <>
      <Navbar page="gallery" />
      <div className="hifz">
        <h1>Hifz-ul-Qur'an</h1>
        <h3>About the Course</h3>
        <p>
          The Hifz-ul-Qur'an program at Darul Uloom Mustafaiyah is designed to
          help students memorize the Holy Qur'an with accuracy, sincerity, and
          proper understanding. Under the guidance of experienced Huffaz and
          qualified teachers, students follow a disciplined routine that
          strengthens their memorization while nurturing Islamic manners and
          spiritual growth.
        </p>
        <p>
          Our goal is not only to help students complete the memorization of the
          Qur'an but also to develop a lifelong connection with the Book of
          Allah through regular revision, proper recitation, and righteous
          character.
        </p>
        <h3>Course Overview</h3>
        <p>
          The Hifz program provides a structured and supportive environment
          where students memorize the Holy Qur'an step by step. Daily lessons,
          continuous revision, and individual attention ensure that every
          student progresses with confidence and consistency.
        </p>
        <p>
          Special emphasis is placed on maintaining previously memorized
          portions, developing correct pronunciation, and building a strong
          foundation in Islamic ethics and discipline.
        </p>
        <h3>Program Highlights</h3>
        <ul>
          <li>Complete Memorization of the Holy Qur'an</li>
          <li>Daily Lesson (Sabak)</li>
          <li>Strong Focus on Tajweed</li>
          <li>Individual Teacher Supervision</li>
          <li>Regular Memorization Assessments</li>
          <li>Islamic Manners and Character Building</li>
          <li>Peaceful and Disciplined Learning Environment</li>
          <li>Urdu Writing</li>
          <li>Undarstanding basic fiqh (Zaroori Masail) </li>
        </ul>
        <h3>Learning Outcomes</h3>
        <p>Upon successful completion of the program, students will:</p>
        <ul>
          <li>Memorize the entire Holy Qur'an accurately.</li>
          <li>Recite the Qur'an fluently with proper Tajweed.</li>
          <li>Develop a habit of regular revision and retention.</li>
          <li>Strengthen their spiritual connection with the Qur'an.</li>
          <li>Build discipline, patience, and self-confidence.</li>
          <li>Prepare for advanced Islamic education if desired.</li>
        </ul>

        <h3>Course Duration</h3>
        <p>
          The duration of the Hifz program depends on the student's dedication,
          learning ability, and consistency. On average, students complete the
          memorization of the Holy Qur'an within 3 to 5 years, accompanied by
          continuous revision and guidance.
        </p>

        <h3>Eligibility</h3>
        <p>
          The program is open to students who can read the Holy Qur'an correctly
          and are committed to memorizing it with sincerity and discipline.
          Basic knowledge of Qur'anic reading is recommended before admission.
        </p>

        <h3>Our Commitment</h3>
        <p>
          At Darul Uloom Mustafaiyah, we are committed to producing Huffaz who
          not only preserve the Holy Qur'an in their hearts but also reflect its
          teachings in their daily lives. We strive to create an environment
          where students grow spiritually, morally, and academically while
          serving the Ummah with sincerity and excellence.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Hifz;

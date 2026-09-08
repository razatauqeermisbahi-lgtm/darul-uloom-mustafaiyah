import React from "react";
import "./English&Computer.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const EnglishComputer = () => {
  return (
    <>
      <Navbar page="gallery" />
      <div className="english-Computer">
        <h1>English & Computer</h1>
        <h4>
          "Empowering students with communication skills and digital knowledge
          while preserving strong Islamic values."
        </h4>

        <p>
          The English & Computer Education program at Darul Uloom Mustafaiyah is
          designed to prepare students for the challenges of today's digital
          world. Along with Islamic education, students gain practical computer
          skills and English communication abilities that help them pursue
          higher education, professional careers, and modern opportunities with
          confidence.
        </p>
        <p>
          Our objective is to ensure that every student becomes digitally
          literate while maintaining strong moral values and a disciplined
          lifestyle.
        </p>
        <h3>What We Teach</h3>
        <p>
          Our curriculum combines essential computer applications, creative
          design tools, web technologies, and modern AI concepts.
        </p>

        <h4>English Language</h4>
        <ul>
          <li>English Reading</li>
          <li>Grammar & Vocabulary</li>
          <li>Speaking Practice</li>
          <li>Daily Conversation</li>
          <li>Writing Skills</li>
          <li>Communication Development</li>
        </ul>
        <h4>Computer Applications</h4>
        <ul>
          <li>Microsoft Word</li>
          <li>Microsoft Excel</li>
          <li>Microsoft PowerPoint</li>
          <li>Internet & Email</li>
          <li>File Management</li>
          <li>Printing & Documentation</li>
        </ul>
        <h4>Graphic Design</h4>
        <ul>
          <li>CorelDRAW</li>
          <li>Adobe Photoshop</li>
          <li>Basic Poster & Banner Design</li>
          <li>Logo Design</li>
          <li>Book Cover Page Design</li>
          <li>Image Editing</li>
        </ul>
        <h4>Web Development</h4>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Responsive Web Design</li>
          <li>Website Development Basics</li>
        </ul>
        <h4>Artificial Intelligence (AI)</h4>
        <ul>
          <li>Introduction to AI</li>
          <li>AI Productivity Tools</li>
          <li>Prompt Engineering</li>
          <li>AI for Education</li>
          <li>Responsible Use of Artificial Intelligence</li>
        </ul>

        <h3>Learning Approach</h3>
        <p>
          Students learn through a combination of classroom instruction,
          practical computer lab sessions, assignments, and real-world projects.
          Every topic is explained with hands-on practice, enabling learners to
          build confidence and apply their knowledge in everyday situations.
        </p>
        <p>
          Regular assessments and project-based learning help students
          strengthen both their technical abilities and problem-solving skills.
        </p>

        <h3>Future Opportunities</h3>
        <p>
          The knowledge and skills gained through this program open doors to
          various educational and career opportunities. Students can pursue
          higher studies, freelance as designers or web developers, assist in
          office administration, work in educational institutions, or
          confidently use technology in their daily personal and professional
          lives.{" "}
        </p>

        <h3>Join Our Digital Learning Journey</h3>
        <p>
          At Darul Uloom Mustafaiyah, we believe that modern skills and Islamic
          values should go hand in hand. Our English & Computer Education
          program equips students with the confidence, creativity, and technical
          expertise needed to succeed in today's rapidly evolving world while
          remaining firmly connected to their faith.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default EnglishComputer;

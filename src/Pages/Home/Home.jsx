import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Title from "../../Components/Title/Title";
import Program from "../../Components/Program/Program";
import About from "../../Components/About/About";
import Statistics from "../../Components/Statistics/Statistics";
import PrincipleMassage from "../../Components/PrincipleMassage/PrincipleMassage";
import Facilities from "../../Components/Facilities/Facilities";
import Campus from "../../Components/Campus/Campus";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="courses">
        <Title subtitle="Our program" title="What we offer" />
        <Program />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="achievement">
        <Title
          subtitle="Our achievement"
          title="Numbers that reflect our commitment"
        />
        <Statistics />
      </div>

      <div id="principal">
        <Title subtitle="Message from" title="The Principal" />
        <PrincipleMassage />
      </div>

      <div id="facilities">
        <Title subtitle="Facilities" title="Our Facilities" />
        <Facilities />
      </div>

      <div id="gallery">
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus />
      </div>

      <div id="testimonials">
        <Title subtitle="Testimonials" title="What students say" />
        <Testimonials />
      </div>

      <div id="contact">
        <Title subtitle="Contact us" title="Get in touch" />
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default Home;

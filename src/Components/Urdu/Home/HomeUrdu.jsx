import React from "react";
import NavbarUrdu from "../NavbarUrdu/NavbarUrdu";
import HeroUrdu from "../Hero/HeroUrdu";
import TitleUrdu from "../TitleUrdu/TitleUrdu";
import ProgramUrdu from "../ProgramUrdu/ProgramUrdu";
import AboutUrdu from "../AboutUrdu/AboutUrdu";
import StatisticsUrdu from "../StatisticsUrdu/StatisticsUrdu";
import PrincipleMassageUrdu from "../PrincipleMassageUrdu/PrincipleMassageUrdu";
import FacilitiesUrdu from "../FacilitiesUrdu/FacilitiesUrdu";
import CampusUrdu from "../CampusUrdu/CampusUrdu";
import ContactUrdu from "../ContactUrdu/ContactUrdu";
import Footer from "../../Footer/Footer";

const HomeUrdu = () => {
  return (
    <>
      <NavbarUrdu />

      <div id="home">
        <HeroUrdu />
      </div>

      <div id="courses">
        <TitleUrdu
          subtitle="تعلیم، تربیت اور کردار سازی کا جامع نظام"
          title="ہمارے تعلیمی شعبے"
        />
        <ProgramUrdu />
      </div>
      <div id="about">
        <AboutUrdu />
      </div>
      <div id="statisticUrdu">
        <TitleUrdu
          subtitle="وہ اعداد و شمار جو ہمارے عزم، خدمت اور تعلیمی سفر کی روشن گواہی دیتے ہیں"
          title="ہماری نمایاں کامیابیاں"
        />
        <StatisticsUrdu />
      </div>

      <TitleUrdu subtitle="جملہ ناظرین کے لیے پیغام" title="صدرالمدرسین" />
      <PrincipleMassageUrdu />
      <div id="facilities">
        <TitleUrdu subtitle="سہولیات" title="دارالعلوم کی نمایاں سہولیات" />
        <FacilitiesUrdu />
      </div>

      <div id="gallery">
        <TitleUrdu
          subtitle="تصویری جھلکیاں"
          title="دارالعلوم مصطفائیہ کی چند یادگار جھلکیاں"
        />
        <CampusUrdu />
      </div>

      <div id="contact">
        <TitleUrdu
          subtitle="رابطہ"
          title="آپ کی رہنمائی اور خدمت کے لیے ہمہ وقت حاضر ہیں"
        />
        <ContactUrdu />
      </div>
      <Footer />
    </>
  );
};

export default HomeUrdu;

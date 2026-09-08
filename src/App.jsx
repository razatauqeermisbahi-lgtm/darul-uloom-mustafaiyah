import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Campuspic from "./Pages/CampusPic/Campuspic";
import Aboutmadarsa from "./Pages/Aboutmadarsa/Aboutmadarsa";
import DarseNizami from "./Pages/DarseNizami/DarseNizami";
import Hifz from "./Pages/Hifz/Hifz";
import Qirat from "./Pages/Qirat/Qirat";
import EnglishComputer from "./Pages/English&Computer/English&Computer";
import ScrollToTop from "./Pages/ScrollToTop";

import HomeUrdu from "./Components/Urdu/Home/HomeUrdu";

import AboutMadarasaUrdu from "./Pages/UrduPages/AboutMadarasaUrdu/AboutMadarasaUrdu";
import DarseNizamiUrdu from "./Pages/UrduPages/DarseNizamiUrdu/DarseNizamiUrdu";
import HifzUrdu from "./Pages/UrduPages/HifzUrdu/HifzUrdu";
import QiratUrdu from "./Pages/UrduPages/QiratUrdu/QiratUrdu";
import EngCompUrdu from "./Pages/UrduPages/EngCompUrdu/EngCompUrdu";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ur" element={<HomeUrdu />} />

        <Route path="/gallery" element={<Campuspic />} />
        <Route path="/aboutmadarsa" element={<Aboutmadarsa />} />
        <Route path="/Dars-e-Nizami" element={<DarseNizami />} />
        <Route path="/Hifz" element={<Hifz />} />
        <Route path="/Qirat" element={<Qirat />} />
        <Route path="/EnglishComputer" element={<EnglishComputer />} />
        <Route path="/ur/aboutmadarsa" element={<AboutMadarasaUrdu />} />
        <Route path="/ur/Dars-e-NizamiUrdu" element={<DarseNizamiUrdu />} />
        <Route path="/ur/HifzUrdu" element={<HifzUrdu />} />
        <Route path="/ur/QiratUrdu" element={<QiratUrdu />} />
        <Route path="/ur/EngCompUrdu" element={<EngCompUrdu />} />
      </Routes>
    </div>
  );
};

export default App;

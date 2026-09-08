import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";
import "./Campuspic.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import pic1 from "../../assets/gallery-pic1.png";
import pic2 from "../../assets/gallery-pic2.png";
import pic3 from "../../assets/gallery-pic3.png";
import pic4 from "../../assets/gallery-pic4.png";
import pic5 from "../../assets/dome-pic.png";
import pic6 from "../../assets/facility01.png";
import pic7 from "../../assets/facility02.png";
import pic8 from "../../assets/facility03.png";
import pic9 from "../../assets/facility04.png";

const galleryImages = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];

const Campuspic = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <>
      <Navbar page="gallery" />

      <div className="campusPic">
        <h1 className="galleryTitle ">Campus Gallery</h1>
        <p className="gallerySubtitle ">
          Explore more photos of Darul Uloom Mustafaiyah.
        </p>
        <div className="galleryContainer">
          {galleryImages.map((image, i) => (
            <img
              key={i}
              src={image}
              alt={`Gallery ${i + 1}`}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
          ))}
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={galleryImages.map((image) => ({
            src: image,
          }))}
        />
      </div>
      <Footer />
    </>
  );
};

export default Campuspic;

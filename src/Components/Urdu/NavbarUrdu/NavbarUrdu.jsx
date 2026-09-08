import React, { useEffect, useState } from "react";
import "./NavbarUrdu.css";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import navLogo from "../../../assets/nav-logo-urdu1.png";

const NavbarUrdu = ({ page }) => {
  const [sticky, setSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handlerMenu = () => {
    setShowMenu(true);
  };
  const handlerClose = () => {
    setShowMenu(false);
  };

  const closeSidebar = () => {
    setShowMenu(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`urduContainer ${sticky ? "urduDarkNav" : ""} ${
        page === "gallery" ? "urduDarkNav" : ""
      }`}
    >
      <Link to="/ur">
        <img src={navLogo} alt="" className="urduLogo" />
      </Link>

      <ul className={showMenu ? "urduShowMenu" : ""}>
        <li>
          <Link to="/ur" onClick={closeSidebar}>
            ہوم
          </Link>
        </li>

        <li>
          <Link to="/ur/#courses" onClick={closeSidebar}>
            کورسز
          </Link>
        </li>

        <li>
          <Link to="/ur/#about" onClick={closeSidebar}>
            تعارف
          </Link>
        </li>

        <li>
          <Link to="/ur/#facilities" onClick={closeSidebar}>
            سہولیات
          </Link>
        </li>

        <li>
          <Link to="/ur/#gallery" onClick={closeSidebar}>
            گیلری
          </Link>
        </li>

        <li className="urduBtn" onClick={closeSidebar}>
          <Link to="/ur/#contact">رابطہ</Link>
        </li>

        <IoClose
          className={showMenu ? "urduCloseMenuMobile" : "urduCloseMenu"}
          onClick={handlerClose}
        />
      </ul>

      <Link to="/">
        <button className="urduLanguageBtn">English</button>
      </Link>

      <IoMdMenu className="urduMenuIcon" onClick={handlerMenu} />
    </nav>
  );
};

export default NavbarUrdu;

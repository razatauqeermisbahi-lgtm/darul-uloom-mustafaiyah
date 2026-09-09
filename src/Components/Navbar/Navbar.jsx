import React, { useEffect, useState } from "react";
import "./Navbar.css";
import navLogo from "../../assets/nav-logo1.png";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = ({ page }) => {
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
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`container ${sticky ? "darkNav" : ""} ${
        page === "gallery" ? "darkNav" : ""
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img src={navLogo} alt="Logo" className="logo" />
      </Link>

      {/* Menu */}
      <ul className={showMenu ? "showMenu" : ""}>
        <li>
          <Link to="/" onClick={closeSidebar}>
            Home
          </Link>
        </li>

        <li>
          <a href="/#courses" onClick={closeSidebar}>
            Courses
          </a>
        </li>

        <li>
          <a href="/#about" onClick={closeSidebar}>
            About Us
          </a>
        </li>

        <li>
          <a href="/#facilities" onClick={closeSidebar}>
            Facilities
          </a>
        </li>

        <li>
          <a href="/#gallery" onClick={closeSidebar}>
            Gallery
          </a>
        </li>

        <li className="btn">
          <a href="/#contact" onClick={closeSidebar}>
            Contact Us
          </a>
        </li>

        <IoClose
          className={showMenu ? "closeMenuMobile" : "closeMenu"}
          onClick={handlerClose}
        />
      </ul>

      {/* Language Button */}
      <Link to="/ur">
        <button className="languageBtn">اردو</button>
      </Link>

      {/* Mobile Menu Icon */}
      <IoMdMenu className="menuIcon" onClick={handlerMenu} />
    </nav>
  );
};

export default Navbar;

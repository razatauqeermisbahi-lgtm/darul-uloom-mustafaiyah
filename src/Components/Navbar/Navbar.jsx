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
          <Link to="/#courses" onClick={closeSidebar}>
            Courses
          </Link>
        </li>

        <li>
          <Link to="/#about" onClick={closeSidebar}>
            About Us
          </Link>
        </li>

        <li>
          <Link to="/#facilities" onClick={closeSidebar}>
            Facilities
          </Link>
        </li>

        <li>
          <Link to="/#gallery" onClick={closeSidebar}>
            Gallery
          </Link>
        </li>

        <li className="btn">
          <Link to="/#contact" onClick={closeSidebar}>
            Contact Us
          </Link>
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

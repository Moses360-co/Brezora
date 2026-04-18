import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import BrezoraLogo from "./BrezoraLogo.png";

import {
  FaHome,
  FaInfoCircle,
  FaConciergeBell,
  FaBars,
  FaTimes,
  FaPhoneVolume
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

function NavBar({ setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isGlass, setIsGlass] = useState(false);

  // 🔥 handle scroll for glass effect
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setIsGlass(true);
      } else {
        setIsGlass(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔥 handle navigation click
  const handleNav = (page) => {
    if (setPage) setPage(page);
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav className={`navbar ${isGlass ? "glass" : ""}`}>
      
      {/* LEFT - LOGO */}
      <div className="left" onClick={() => handleNav("home")}>
        <img src={BrezoraLogo} alt="logo" className="logo" />
        <h2 className="brand">BREZORA</h2>
      </div>

      {/* CENTER MENU */}
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <li onClick={() => handleNav("home")}>
          <FaHome /> Home
        </li>

        <li onClick={() => handleNav("about")}>
          <FaInfoCircle /> About
        </li>

        <li onClick={() => handleNav("services")}>
          <FaConciergeBell /> Services
        </li>

        <li onClick={() => handleNav("contact")}>
          <FaPhoneVolume /> Contact
        </li>
      </ul>

      {/* RIGHT ACTIONS */}
      <div className="actions">

        {/* LOCATION */}
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noreferrer"
        >
          <CiLocationOn />
        </a>

        {/* CALL */}
        <a href="tel:+918124582703" className="call-btn">
          <FaPhoneVolume />
        </a>

        {/* MOBILE TOGGLE */}
        <button
          className="toggle"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
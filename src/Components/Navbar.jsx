import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import BrezoraLogo from "./BrezoraLogo.png";

import {
  FaHome,
  FaInfoCircle,
  FaConciergeBell,
  FaPhoneVolume,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { CiLocationOn } from "react-icons/ci";

function NavBar({ setPage }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ================================
     SCROLL DETECTION
  ================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ================================
     NAVIGATION
  ================================= */

  const navigate = (page) => {
    if (setPage) {
      setPage(page);
    }

    setOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ================================
     MENU TOGGLE
  ================================= */

  const toggleMenu = () => {
    setOpen((previous) => !previous);
  };

  /* ================================
     CLOSE MENU
  ================================= */

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* ================================
          MOBILE BACKDROP
      ================================= */}

      <div
        className={`mobile-backdrop ${open ? "show" : ""}`}
        onClick={closeMenu}
      />

      {/* ================================
          NAVBAR
      ================================= */}

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

        {/* ================================
            BRAND
        ================================= */}

        <div
          className="brand"
          onClick={() => navigate("home")}
          role="button"
          tabIndex={0}
        >
          <div className="logo-glass">
            <img
              src={BrezoraLogo}
              alt="Brezora Cottage"
            />
          </div>

          <div className="brand-text">
            <h2>BREZORA</h2>
            <span>COTTAGE</span>
          </div>
        </div>

        {/* ================================
            NAVIGATION MENU
        ================================= */}

        <ul className={`nav-menu ${open ? "open" : ""}`}>

          <li onClick={() => navigate("home")}>
            <FaHome />
            <span>Home</span>
          </li>

          <li onClick={() => navigate("about")}>
            <FaInfoCircle />
            <span>About</span>
          </li>

          <li onClick={() => navigate("services")}>
            <FaConciergeBell />
            <span>Services</span>
          </li>

          <li onClick={() => navigate("contact")}>
            <FaPhoneVolume />
            <span>Contact</span>
          </li>

        </ul>

        {/* ================================
            RIGHT ACTIONS
        ================================= */}

        <div className="nav-actions">

          {/* LOCATION */}

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-icon"
            aria-label="Location"
          >
            <CiLocationOn />
          </a>

          {/* CALL */}

          <a
            href="tel:+918124582703"
            className="glass-icon call"
            aria-label="Call Brezora"
          >
            <FaPhoneVolume />
          </a>

          {/* MOBILE MENU */}

          <button
            type="button"
            className={`glass-menu-button ${
              open ? "active" : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span className="menu-icon">
              {open ? <FaTimes /> : <FaBars />}
            </span>
          </button>

        </div>

      </nav>
    </>
  );
}

export default NavBar;
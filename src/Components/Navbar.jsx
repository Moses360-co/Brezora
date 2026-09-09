import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ========================================
  // SCROLL EFFECT
  // ========================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ========================================
  // CLOSE MENU WHEN PAGE CHANGES
  // ========================================

  useEffect(() => {
    setOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  // ========================================
  // NAVIGATION
  // ========================================

  const handleNavigation = (path) => {
    setOpen(false);

    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    navigate(path);
  };

  // ========================================
  // CHECK ACTIVE PAGE
  // ========================================

  const isActive = (path) => {
    return location.pathname === path;
  };

  // ========================================
  // MOBILE MENU
  // ========================================

  const toggleMenu = () => {
    setOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* ========================================
          MOBILE BACKDROP
      ======================================== */}

      <div
        className={`mobile-backdrop ${
          open ? "show" : ""
        }`}
        onClick={closeMenu}
      />

      {/* ========================================
          NAVBAR
      ======================================== */}

      <nav
        className={`navbar ${
          scrolled ? "scrolled" : ""
        }`}
      >
        {/* ========================================
            LOGO
        ======================================== */}

        <button
          type="button"
          className="brand"
          onClick={() => handleNavigation("/")}
          aria-label="Go to Brezora Home"
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
        </button>

        {/* ========================================
            NAVIGATION MENU
        ======================================== */}

        <ul
          className={`nav-menu ${
            open ? "open" : ""
          }`}
        >
          {/* HOME */}

          <li
            className={isActive("/") ? "active" : ""}
            onClick={() => handleNavigation("/")}
          >
            <FaHome />
            <span>Home</span>
          </li>

          {/* ABOUT */}

          <li
            className={
              isActive("/about") ? "active" : ""
            }
            onClick={() =>
              handleNavigation("/about")
            }
          >
            <FaInfoCircle />
            <span>About</span>
          </li>

          {/* SERVICES */}

          <li
            className={
              isActive("/services") ? "active" : ""
            }
            onClick={() =>
              handleNavigation("/services")
            }
          >
            <FaConciergeBell />
            <span>Services</span>
          </li>

          {/* CONTACT */}

          <li
            className={
              isActive("/contact") ? "active" : ""
            }
            onClick={() =>
              handleNavigation("/contact")
            }
          >
            <FaPhoneVolume />
            <span>Contact</span>
          </li>
        </ul>

        {/* ========================================
            RIGHT ACTIONS
        ======================================== */}

        <div className="nav-actions">
          {/* LOCATION */}

          <a
            href="https://www.google.com/maps/dir/9.9248537,78.1450406/10.2657783,77.487645/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-icon"
            aria-label="Brezora Location"
            onClick={() => setOpen(false)}
          >
            <CiLocationOn />
          </a>

          {/* CALL */}

          <a
            href="tel:+916383254176"
            className="glass-icon call"
            aria-label="Call Brezora"
            onClick={() => setOpen(false)}
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
            aria-label="Toggle navigation menu"
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

export default Navbar;
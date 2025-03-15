import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaRegFileAlt, FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaTools, FaBars, FaTimes } from "react-icons/fa";
import cv from "../asset/Younes El Assbat CV.pdf";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">Younes</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li onClick={() => handleNavClick("home")}><FaHome /> Home</li>
        <li onClick={() => handleNavClick("skills")}><FaTools /> Skills</li>
        <li onClick={() => handleNavClick("projects")}><FaProjectDiagram /> Projects</li>
        <li onClick={() => handleNavClick("about")}><FaUser /> About</li>
        <li onClick={() => handleNavClick("contact")}><FaEnvelope /> Contact</li>
        <li className="resume-item">
          <a href={cv} download="Younes El Assbat CV.pdf" className="download-btn-menu">
            <FaRegFileAlt /> Resume
          </a>
        </li>
      </ul>
      <a href={cv} download="Younes El Assbat CV.pdf" className="download-btn">
        Resume <FaRegFileAlt />
      </a>
    </nav>
  );
}
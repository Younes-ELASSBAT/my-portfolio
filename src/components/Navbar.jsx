import React from "react";
import "../styles/Navbar.css";
import { FaRegFileAlt, FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaTools } from "react-icons/fa";
import cv from "../asset/Younes El Assbat CV.pdf";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Younes</div>
      <ul className="nav-links">
        <li onClick={() => scrollToSection("home")}><FaHome /> Home</li>
        <li onClick={() => scrollToSection("skills")}><FaTools /> Skills</li>
        <li onClick={() => scrollToSection("projects")}><FaProjectDiagram /> Projects</li>
        <li onClick={() => scrollToSection("about")}><FaUser /> About</li>
        <li onClick={() => scrollToSection("contact")}><FaEnvelope /> Contact</li>
      </ul>
      <a href={cv} download="Younes El Assbat CV.pdf" className="download-btn">
        Resume <FaRegFileAlt />
      </a>
    </nav>
  );
}
import React from "react";
import "../styles/Footer.css";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p><FaEnvelope />     youneselassbat@gamail.com</p>
          <p><FaPhone />   +212 614 605 25 </p>
        </div>
        <div className="social-icons">
          <a href="https://github.com/Younes-ELASSBAT" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/younes-el-assbat-014603355/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.instagram.com/uness_5?igsh=MXE2aXdhajl0bTl4aA==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

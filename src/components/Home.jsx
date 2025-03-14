import React from "react";
import "../styles/Home.css";
import { FaInstagram, FaLinkedin, FaGithub, FaRegFileAlt } from "react-icons/fa";
import logo from "../asset/profile.png";
import cv from "../asset/Younes El Assbat CV.pdf";

const TECH_STACK = [
  "React",
  "Angular",
  "Ionic",
  "Javascript",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "PHP",
  "Laravel",
  "Java",
  "J2EE",
];

const TechStack = ({ tech }) => <div className="tech-stack-item">{tech}</div>;

export default function Home() {
  return (
    <div className="home">
      <div className="portfolio-container">
        <div className="text-section">
          <h1 className="animated-text">
            I'm  <span className="highlight">EL ASSBAT Younes</span><br />
            <span className="highlight typing-text">Full Stack Web Developer</span>
          </h1>
          <p>
            "As a Full Stack developer with a passion, he has a strong drive for creativity and a desire to take on challenges. My goal is to come up with innovative solutions that push the boundaries of technology. The works come together to create a selection of extraordinary real things that define difference and obscure attention."
          </p>
          <div className="tech-stack">
            {TECH_STACK.map((tech, index) => (
              <TechStack key={index} tech={tech} />
            ))}
          </div>
          <div>
            <a href={cv} download="Younes El Assbat CV.pdf" className="buttoncv">
              Download CV <FaRegFileAlt />
            </a>
          </div>

          <div className="social-icons">
            <a href="https://www.instagram.com/uness_5?igsh=MXE2aXdhajl0bTl4aA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/younes-el-assbat-014603355/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/Younes-ELASSBAT" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
          </div>
        </div>
        <div className="image-section">
          <img
            src={logo}
            alt="Profile"
            className="profile-pic"
          />
        </div>
      </div>
    </div>
  );
}

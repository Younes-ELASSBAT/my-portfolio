import React from "react";
import "../styles/Skills.css";
import team from "../asset/team-work.jpg";
import communication from "../asset/communication.png";
import positive from "../asset/Positive.png";
import html from "../asset/Html.png";
import css from "../asset/css.png";
import javascript from "../asset/javascript.jpg";
import react from "../asset/react.png";
import angular from "../asset/angular.png";
import php from "../asset/php.svg";
import laravel from "../asset/laravel.png";
import nodejs from "../asset/nodejs.png";
import java from "../asset/java.png";
import javaSwing from "../asset/javaSwing.png";
import jee from "../asset/J2ee.png";
import jsp from "../asset/jsp.png";
import express from "../asset/express.svg";
import mysql from "../asset/mysql.png";
import mongodb from "../asset/mongodb.png";

import uml from "../asset/uml.png";
import git from "../asset/git.png";
import gitlab from "../asset/gitlab.png";

const softSkills = [
  {
    title: "Team Player",
    description: "I collaborate effectively to achieve common goals.",
    image: team,
    color: "green",
  },
  {
    title: "Good Communicator",
    description: "I convey ideas clearly and listen actively.",
    image: communication,
    color: "green",
  },
  {
    title: "Positive Attitude",
    description: "I maintain an optimistic and professional outlook.",
    image: positive,
    color: "green",
  },
];

const technicalSkills = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", image: html },
      { name: "CSS", image: css },
      { name: "JavaScript", image: javascript },
      { name: "React.js", image: react },
      { name: "Angular", image: angular },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Php", image: php },
      { name: "Laravel", image: laravel },
      { name: "Node.js", image: nodejs },
      { name: "Java", image: java },
      { name: "Java Swing", image: javaSwing },
      { name: "Express.js", image: express },
      { name: "J2ee", image: jee },
      { name: "Jsp", image: jsp },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", image: mysql },
      { name: "MongoDB", image: mongodb },
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "Uml", image: uml },
      { name: "Git", image: git },
      { name: "Gitlab", image: gitlab },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-container">
      <h2>My Skills</h2>
      
      {/* Soft Skills Section */}
      <div className="soft-skills-grid">
        {softSkills.map((skill, index) => (
          <div key={index} className="soft-skill-card">
            <img src={skill.image} alt={skill.title} className="soft-skill-image" />
            <h3 className={`skill-title ${skill.color}`}>{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>

      {/* Technical Skills Section */}
      <h2>Technical Skills</h2>
      <div className="technical-skills-section">
        {technicalSkills.map((category, index) => (
          <div key={index} className="skills-category">
            <h3>{category.category}</h3>
            <div className="technical-skills-grid">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="technical-skill-card">
                  <img src={skill.image} alt={skill.name} className="tech-skill-icon" />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
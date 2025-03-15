import React from "react";
import "../styles/Mywork.css";
import eventify from "../asset/evently.png";
import Etudmanager from "../asset/etudmanager.png";
import Ecommerce from "../asset/E-comerce.png";
import LawyerMagri from "../asset/LawyerMagri.png";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

export default function MyWork() {
    const projects = [
        {
            title: "Etud-manager",
            description: "Etud-manager Application Desktop that manages Students and notes and absences for students made with Java Swing",
            image: Etudmanager,
            lien:"https://github.com/Younes-ELASSBAT/Etud-manager"
        },
        {
            title: "E-commerce",  
            description:"Fullstack Website that manages purchase of office equipment online made with Laravel,Html,Css,Tailwind and MySQL for database management",
            image: Ecommerce,
            lien:"https://github.com/Younes-ELASSBAT/E-commerce"
        }, 
        {
            title: "Eventify",
            description: "Eventify Website that manages events made with React js and Html and Css  and Tailwind css",
            image: eventify,
            lien:"https://github.com/Younes-ELASSBAT/EVENTIFY"
        },
        {
            title: "Lawyer Magri",
            description: "Lawyer Magri Website that manages Cliens made with JavaScript and Html and Css and Tailwind css",
            image: LawyerMagri,
            lien:"https://github.com/Younes-ELASSBAT/Lawyer-Magri"
            
        }
    ];

    return (
        <section className="work-section">
            <h2 className="work-title">My Works</h2>
            <div className="work-container">
                {projects.map((project, index) => (
                    <div key={index} className="work-card">
                        <img src={project.image} alt={project.title} className="work-image" />
                        <div className="work-content">
                            <h3 className="work-card-title">{project.title}</h3>
                            <p className="work-description">{project.description}</p>
                            <a className="work-button" href={project.lien}>
                            View Project <FaGithub />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

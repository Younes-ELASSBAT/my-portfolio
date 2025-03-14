import React from "react";
import "../styles/About.css"; // Importation du fichier CSS

export default function About() {
    return (
        <section className="about-section">
            <h2 className="about-title">About Me</h2>
            <div className="about-card">
                <p className="about-text">
                    My name is <strong >Younes El Assbat</strong>, I'm a 20-year-old and a passionate developer. 
                    Now, I study <strong>Génie Logiciel</strong> at ESTM, and I hold a diploma in 
                    <strong> full-stack web development</strong>, which has equipped me with a comprehensive 
                    understanding of both front-end and back-end technologies. Additionally, I have earned certifications in 
                    <strong> basics of React</strong> from Meta, further solidifying my expertise in these frameworks.
                </p>
                <p className="about-text">
                    My proficiency spans the <strong>MERN stack</strong>, allowing me to build robust and scalable web applications. 
                    With a commitment to continuous learning and a drive to stay current with industry trends, 
                    I am well-prepared to tackle challenging projects and contribute effectively to any development team.
                </p>
            </div>
        </section>
    );
}

import React from "react";
import { FaUser, FaEnvelope, FaTag, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import "../styles/Contact.css";

export default function Contact() {
    return (
        <section className="contact-section">
            <h2 className="contact-title">Contact</h2>
            <div className="contact-card">
                <form className="contact-form" action="https://formsubmit.co/youneselassbat@gmail.com" method="POST">
                    <input type="hidden" name="_next" value="http://localhost:3000/" />
                    <div className="input-group">
                        <FaUser className="icon" />
                        <input type="text" name="name" placeholder="Your name" required />
                    </div>
                    <div className="input-group">
                        <FaEnvelope className="icon" />
                        <input type="email" name="email" placeholder="Your email" required />
                    </div>
                    <div className="input-group">
                        <FaTag className="icon" />
                        <input type="text" name="subject" placeholder="Subject" required />
                    </div>
                    <div className="input-group textarea-group">
                        <FaCommentDots className="icon" />
                        <textarea name="message" placeholder="Your message" required></textarea>
                    </div>
                    <button type="submit" className="send-button">
                        Send <FaPaperPlane className="send-icon" />
                    </button>
                </form>
            </div>
        </section>
    );
}

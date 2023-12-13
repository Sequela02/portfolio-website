import React from 'react';
import '../assets/styles/hiremepage.css';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ContactForm() {
    return (
        <div className="contact-section py-16 text-center px-6">
            <h2 className="contact-title text-2xl md:text-3xl font-bold mb-6 text-neon-pink">Contact Me</h2>

            <div className="contact-detail flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-neon-blue text-lg md:text-xl mr-2" />
                <label className="mr-2 font-semibold">Email:</label>
                <a href="mailto:r3xed@outlook.e" className="text-neon-green hover:text-neon-hover">r3xed@outlook.e</a>
            </div>

            <div className="contact-detail flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faLinkedin} className="text-neon-blue text-lg md:text-xl mr-2" />
                <label className="mr-2 font-semibold">LinkedIn:</label>
                <a href="https://www.linkedin.com/in/ricardo-armenta-parra-b7066a201/" target="_blank" rel="noreferrer" className="text-neon-green hover:text-neon-hover">Perfil de LinkedIn</a>
            </div>

            <p className="mt-4 text-neon-light">
                También puedes contactarme a través de mis redes en la parte superior de la página.
            </p>
        </div>
    );
}

export default ContactForm;

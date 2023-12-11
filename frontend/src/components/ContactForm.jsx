import React from 'react';
import '../assets/styles/header.css';

function ContactForm() {
    return (
        <div className="contact-section">
            <h2 className="contact-title">Contáctame</h2>

            <div className="contact-detail">
                <label>Email:</label>
                <a href="mailto:r3xed@outlook.e">r3xed@outlook.e</a>
            </div>



            <div className="contact-detail">
                <label>LinkedIn:</label>
                <a href="https://www.linkedin.com/in/ricardo-armenta-parra-b7066a201/" target="_blank" rel="noreferrer">Perfil de LinkedIn</a>
            </div>

            {/* Otros métodos de contacto, como redes sociales o plataformas profesionales, también pueden ser incluidos aquí. */}
        </div>
    );
}

export default ContactForm;

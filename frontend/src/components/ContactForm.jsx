import React, { useState } from 'react';
import '../assets/styles/styles.css';

function ContactForm() {
    return (
        <div className="contact-section">
            <h2 className="contact-title">Contáctame</h2>

            <div className="contact-detail">
                <label>Email:</label>
                <a href="mailto:tuemail@example.com">tuemail@example.com</a>
            </div>

            <div className="contact-detail">
                <label>Teléfono:</label>
                <a href="tel:+1234567890">+1 234 567 890</a>
            </div>

            <div className="contact-detail">
                <label>LinkedIn:</label>
                <a href="https://www.linkedin.com/in/tuperfil" target="_blank" rel="noreferrer">Perfil de LinkedIn</a>
            </div>

            {/* Otros métodos de contacto, como redes sociales o plataformas profesionales, también pueden ser incluidos aquí. */}
        </div>
    );
}

export default ContactForm;

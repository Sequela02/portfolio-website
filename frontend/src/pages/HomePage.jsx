// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';  // Importing the CSS file



function HomePage() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="p-4 bg-blue-500 text-white">
                <h1 className="text-2xl font-bold mb-2">Canitas</h1>
                <p className="mb-4">Desarrollador de Software especializado en Java y Animación 3D</p>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/about" className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-300">Sobre mí</Link></li>
                        <li><Link to="/projects" className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-300">Proyectos</Link></li>
                        <li><Link to="/contact" className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-300">Contacto</Link></li>
                    </ul>
                </nav>
            </header>
            <section className="banner">
                {/* Imagen de fondo o banner */}
            </section>
            <section className="cta p-4">
                <p className="text-lg mb-4">Descubre mis proyectos y lo que puedo hacer por tu negocio.</p>
                <Link to="/projects" className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Ver Proyectos</Link>
            </section>
            <footer className="p-4 bg-blue-500 text-white">
                {/* Iconos de redes sociales, información de contacto, etc. */}
            </footer>
        </div>
    );
}

export default HomePage;


// src/HomePage.css

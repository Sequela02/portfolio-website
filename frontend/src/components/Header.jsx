// Ejemplo: src/components/Header.jsx
// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/styles.css';
function Header() {
    return (
        <header className="header h-auto flex flex-col justify-center items-center">


        <nav className="flex justify-between items-center p-4">
                <div className="flex space-x-4">
                    <Link to="/" className="text-white hover:text-yellow-400 transition duration-300">
                        Me
                    </Link>
                    <Link to="/projects" className="text-white hover:text-yellow-400 transition duration-300">
                        Projects
                    </Link>
                    <Link to="/hire-me" className="text-white hover:text-yellow-400 transition duration-300">
                        Hire Me
                    </Link>
                </div>
                <div className="flex space-x-4">
                    <a href="path_to_GitHub" className="text-white hover:text-blue-400 transition duration-300">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="path_to_Twitter" className="text-white hover:text-blue-400 transition duration-300">
                        <i className="fab fa-twitter"></i>
                    </a>
                    {/* Add other social links similarly */}
                </div>
            </nav>

            {/* ...Rest of the Header content... */}

        </header>
    );
}

export default Header;





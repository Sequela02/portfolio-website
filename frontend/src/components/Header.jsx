import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/header.css';
/**
 * Renders navigation links.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.navLinks - An array of navigation links.
 * @param {string} props.currentPath - The current path.
 * @returns {JSX.Element} A div containing navigation links.
 */
const NavigationLinks = ({ navLinks, currentPath }) => (
    <div className="flex items-center justify-start space-x-4">
        {navLinks.map(({ to, text }) => (
            <Link
                key={to}
                to={to}
                className={`px-3 py-2 text-lg ${currentPath === to ? ' font-semibold' : 'text-white'} transition duration-300 neon-text`}
            >
                {text}
            </Link>
        ))}
    </div>
);

/**
 * Renders social media links.
 *
 * @returns {JSX.Element} A div containing social media icons.
 */
const SocialLinks = () => (
    <div className="flex items-center justify-center md:justify-end space-x-4">
        {/* Each icon has a neon effect applied through the social-icon class */}
        <a href="https://github.com/sequela02" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300 social-icon">
            <FontAwesomeIcon icon={faGithub} className="w-8 h-8 md:w-10 md:h-10" />
        </a>
        <a href="https://twitter.com/sequela007" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300 social-icon">
            <FontAwesomeIcon icon={faTwitter} className="w-8 h-8 md:w-10 md:h-10" />
        </a>
        <a href="https://www.linkedin.com/in/ricardo-armenta-parra-b7066a201/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300 social-icon">
            <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8 md:w-10 md:h-10" />
        </a>
        <a href="https://www.twitch.tv/canitas02" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300 social-icon">
            <FontAwesomeIcon icon={faTwitch} className="w-8 h-8 md:w-10 md:h-10" />
        </a>
        <a href="https://www.youtube.com/channel/UCP6JKowpTbHkHYmXZs0RoOA" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300 social-icon">
            <FontAwesomeIcon icon={faYoutube} className="w-8 h-8 md:w-10 md:h-10" />
        </a>
    </div>
);

/**
 * Header component that renders the navigation and social links.
 *
 * @returns {JSX.Element} The header component.
 */
function Header() {
    const navLinks = [
        { to: "/", text: "ABOUT" },
        { to: "/portfolio", text: "PORTFOLIO" },
        { to: "/hire-me", text: "HIRE ME" }
    ];

    const location = useLocation();

    return (
        <header className="header p-4 rounded-lg shadow-md">
            <div className="headerContainer mx-auto flex flex-col md:flex-row items-center justify-between">
                <NavigationLinks navLinks={navLinks} currentPath={location.pathname} />
                <SocialLinks />
            </div>
        </header>
    );
}

export default Header;

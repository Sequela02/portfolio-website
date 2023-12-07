import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';



/**
 * Renders navigation links.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.navLinks - An array of navigation links.
 * @param {string} props.currentPath - The current path.
 */
const NavigationLinks = ({ navLinks, currentPath }) => (
    <div className="flex items-center justify-start space-x-4">
        {navLinks.map(({ to, text }) => (
            <Link
                key={to}
                to={to}
                className={`px-3 py-2 text-lg hover:text-cyberPink ${currentPath === to ? 'text-cyberBlue font-semibold' : 'text-white'} transition duration-300 neon-text`}
            >
                {text}
            </Link>
        ))}
    </div>
);

/**
 * Renders social media links.
 */
const SocialLinks = () => (
    <div className="flex items-center justify-center md:justify-end space-x-4">
        <a href="https://github.com/sequela02" target="_blank" rel="noopener noreferrer" className="neon-text hover:scale-125 transition-transform duration-300">
            <FontAwesomeIcon icon={faGithub} className="w-8 h-8 md:w-10 md:h-10" />
        </a>
        <a href="https://twitter.com/sequela007" target="_blank" rel="noopener noreferrer" className="neon-text hover:scale-125 transition-transform duration-300">
            <FontAwesomeIcon icon={faTwitter} className="w-8 h-8 md:w-10 md:h-10" />
        </a>
        <a href="https://www.linkedin.com/in/ricardo-armenta-parra-b7066a201/" target="_blank" rel="noopener noreferrer" className="neon-text hover:scale-125 transition-transform duration-300">
            <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8 md:w-10 md:h-10" />
        </a>
        <a href="https://www.twitch.tv/canitas02" target="_blank" rel="noopener noreferrer" className="neon-text hover:scale-125 transition-transform duration-300">
            <FontAwesomeIcon icon={faTwitch} className="w-8 h-8 md:w-10 md:h-10" />
        </a>
        <a href="https://www.youtube.com/channel/UCP6JKowpTbHkHYmXZs0RoOA" target="_blank" rel="noopener noreferrer" className="neon-text hover:scale-125 transition-transform duration-300">
            <FontAwesomeIcon icon={faYoutube} className="w-8 h-8 md:w-10 md:h-10" />
        </a>
    </div>
);

/**
 * Header component.
 */
function Header() {
    const navLinks = [
        { to: "/", text: "About" },
        { to: "/portfolio", text: "Portfolio" },
        { to: "/hire-me", text: "Hire Me" }
    ];

    const location = useLocation();

    return (
        <header className="bg-cyberDark p-4 rounded-lg shadow-md">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <NavigationLinks navLinks={navLinks} currentPath={location.pathname} />
                <SocialLinks />
            </div>
        </header>
    );
}

export default Header;

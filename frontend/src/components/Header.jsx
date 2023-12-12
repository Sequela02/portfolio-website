import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/header.css';
const NavLink = ({ to, text }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`nav-link ${isActive ? 'active' : ''}`}
        >
            {text}
        </Link>
    );
};

// Main component to render navigation links
const NavigationLinks = ({ navLinks }) => {
    return (
        <div className="nav-container">
            {navLinks.map(({ to, text }) => (
                <NavLink
                    key={to}
                    to={to}
                    text={text}
                />
            ))}
        </div>
    );
};


/**
 * Renders social media links.
 *
 * @returns {JSX.Element} A div containing social media icons.
 */
/**
 * SocialLinks - A component to display social media icons with interactive animations.
 *
 * This component renders a set of social media icons (GitHub, Twitter, LinkedIn, Twitch, and YouTube).
 * Each icon is wrapped in an anchor tag that links to the respective social media page.
 * Icons have a glitch effect on hover (applied via the 'glitch' class).
 */
const SocialLinks = () => (
    <div className="flex items-center justify-center md:justify-end space-x-4">
        {/* GitHub Icon */}
        <a href="https://github.com/sequela02" target="_blank" rel="noopener noreferrer" className="glitch">
            <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>

        {/* Twitter Icon */}
        <a href="https://twitter.com/sequela007" target="_blank" rel="noopener noreferrer" className="glitch">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>

        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/ricardo-armenta-parra-b7066a201/" target="_blank" rel="noopener noreferrer" className="glitch">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>

        {/* Twitch Icon */}
        <a href="https://www.twitch.tv/canitas02" target="_blank" rel="noopener noreferrer" className="glitch">
            <FontAwesomeIcon icon={faTwitch} className="icon" />
        </a>

        {/* YouTube Icon */}
        <a href="https://www.youtube.com/channel/UCP6JKowpTbHkHYmXZs0RoOA" target="_blank" rel="noopener noreferrer" className="glitch">
            <FontAwesomeIcon icon={faYoutube} className="icon" />
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

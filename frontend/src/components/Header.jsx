import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/styles.css';

// Icons imports
import gitIcon from '../assets/images/git_icon.png';
import twitterIcon from '../assets/images/twitter_icon.png';
import linkedinIcon from '../assets/images/linkedin_icon.png';
import twitchIcon from '../assets/images/twitch_icon.png';
import ytIcon from '../assets/images/youtube_icon.png';

/**
 * Header Component: Displays the main navigation links and social media icons.
 *
 * Contains links to:
 * - Me
 * - Projects
 * - Hire Me
 *
 * Contains icons with links to:
 * - GitHub
 * - Twitter
 * - LinkedIn
 * - Twitch
 * - YouTube
 */
function Header() {
    // Navigation links data
    const navLinks = [
        { to: "/", text: "Me" },
        { to: "/projects", text: "Projects" },
        { to: "/hire-me", text: "Hire Me" }
    ];

    // Social links data
    const socialLinks = [
        { href: "https://github.com/sequela02", imgSrc: gitIcon, alt: "GitHub" },
        { href: "https://twitter.com/sequela007", imgSrc: twitterIcon, alt: "Twitter" },
        { href: "https://www.linkedin.com/in/ricardo-armenta-parra-b7066a201/", imgSrc: linkedinIcon, alt: "LinkedIn" },
        { href: "https://www.twitch.tv/canitas02", imgSrc: twitchIcon, alt: "Twitch" },
        { href: "https://www.youtube.com/channel/UCP6JKowpTbHkHYmXZs0RoOA", imgSrc: ytIcon, alt: "YouTube" }
    ];

    return (
        <header className="header bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 p-1 rounded-lg">
            <div className="containerHeader mx-auto px-4 flex items-center">

            <nav className="flex justify-between items-center w-full ">


                {/* Render Navigation Links */}
                <div className="flex space-x-4">
                    {navLinks.map(link => (
                        <Link key={link.to} to={link.to} className="menu text-white transition-transform transform hover:scale-105 hover:border-b-2 hover:border-yellow-400 hover:text-yellow-400 transition duration-300">
                            {link.text}
                        </Link>
                    ))}
                </div>

                {/* Render Social Media Icons */}
                <div className="flex space-x-4">
                    {socialLinks.map(social => (
                        <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="transform transition-transform hover:rotate-12">
                            <img src={social.imgSrc} alt={social.alt} className="w-8 h-8 hover:opacity-90 transition duration-300 align-middle" />
                        </a>
                    ))}
                </div>


            </nav>
            </div>
        </header>
    );
}

export default Header;

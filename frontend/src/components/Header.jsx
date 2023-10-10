import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/styles.css';
import gitIcon from '../assets/images/git_icon.png';
import xIcon from '../assets/images/twitter_icon.png';
import linkedinIcon from '../assets/images/linkedin_icon.png';
import twitchIcon from '../assets/images/twitch_icon.png';
import ytIcon from '../assets/images/youtube_icon.png';
function Header() {
    return (
        <header className="header h-auto bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 p-4 rounded-lg">
            <div className="container mx-auto px-4">
                <nav className="flex justify-between items-center w-full">
                    <div className="flex space-x-4">
                        <Link to="/" className="menu text-white hover:text-yellow-400 transition duration-300">
                            Me
                        </Link>
                        <Link to="/projects" className="menu text-white hover:text-yellow-400 transition duration-300">
                            Projects
                        </Link>
                        <Link to="/hire-me" className="menu text-white hover:text-yellow-400 transition duration-300">
                            Hire Me
                        </Link>
                    </div>

                    <div className="flex space-x-4">
                        <a href="https://github.com/sequela02" target="_blank" rel="noopener noreferrer">
                            <img src={gitIcon} alt="GitHub" className="w-8 h-8 hover:opacity-75 transition duration-300" />
                        </a>
                        <a href="https://twitter.com/sequela007" target="_blank" rel="noopener noreferrer">
                            <img src={xIcon} alt="Twitter" className="w-8 h-8 hover:opacity-75 transition duration-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/ricardo-armenta-parra-b7066a201/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 hover:opacity-75 transition duration-300" />
                        </a>
                        <a href="https://www.twitch.tv/canitas02" target="_blank" rel="noopener noreferrer">
                            <img src={twitchIcon} alt="LinkedIn" className="w-8 h-8 hover:opacity-75 transition duration-300" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCP6JKowpTbHkHYmXZs0RoOA" target="_blank" rel="noopener noreferrer">
                            <img src={ytIcon} alt="LinkedIn" className="w-8 h-8 hover:opacity-75 transition duration-300" />
                        </a>
                    </div>

                </nav>

            </div>
        </header>
    );
}


export default Header;

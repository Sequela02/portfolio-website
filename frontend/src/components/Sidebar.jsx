// Sidebar.jsx

import React from 'react';
import '../assets/styles/styles.css';

/**
 * Sidebar Component: Displays information about the user and a sponsorship request.
 *
 * Contains sections:
 * - About Me: Displays age, birthdate, country, and state.
 * - Be My Sponsor: A sponsorship request with a link to Patreon.
 */
function Sidebar() {
    // User information data
    const userInfo = [
        { emoji: "🎂", label: "Age", value: "21" },
        { emoji: "📅", label: "Birthdate", value: "Jul, 30" },
        { emoji: "📍", label: "Country", value: "México" },
        { emoji: "🏞️", label: "State", value: "Sonora" }
    ];

    return (
        <div className="w-full">

            {/* About Me Section */}
            <aside className="sidebar p-4 text-white md:ml-4 mb-4 bg-purple-700 rounded-xl mb-spacing">
                <h2 className="text-2xl font-bold mb-4">About me</h2>
                <ul className="space-y-2">
                    {userInfo.map(info => (
                        <li key={info.label} className="flex items-center justify-between"> {/* added justify-between */}
                            <div className="flex items-center">
                                <span className="emoji mr-2">{info.emoji}</span>
                                <strong>{info.label}:</strong>
                            </div>
                            <span className="pr-4">{info.value}</span> {/* added pr-4 for padding-right */}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Be My Sponsor Section */}
            <aside className="sidebar p-4 text-white md:ml-4 bg-purple-700 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">🎁 Be my sponsor</h2>
                <p className="mb-4">If you like the work I do, you can make a donation to motivate me to continue contributing to the open source industry.</p>
                <a href="https://www.patreon.com/YourUsername" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-purple-500 px-4 py-2 rounded text-white hover:bg-purple-600 transition-colors duration-200">Patreon</a>
            </aside>

        </div>
    );
}

export default Sidebar;

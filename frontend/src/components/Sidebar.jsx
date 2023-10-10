// Sidebar.jsx

import React from 'react';
import '../assets/styles/styles.css';
function Sidebar() {
    return (
        <div className="w-full">
            <aside className="sidebar p-4 text-white md:ml-4 mb-4 bg-purple-700 rounded-xl mb-spacing">
                <h2 className="text-2xl font-bold mb-4">About me</h2>
                <ul className="space-y-2">
                    <li className="flex items-center"><span className="emoji mr-2">🎂</span><strong>Age:</strong> 21</li>
                    <li className="flex items-center"><span className="emoji mr-2">📅</span><strong>Birthdate:</strong> Jul, 30</li>
                    <li className="flex items-center"><span className="emoji mr-2">📍</span><strong>Country:</strong> México</li>
                    <li className="flex items-center"><span className="emoji mr-2">🏞️</span><strong>State:</strong> Sonora</li>
                </ul>
            </aside>

            <aside className="sidebar p-4 text-white md:ml-4 bg-purple-700 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">🎁 Be my sponsor</h2>
                <p className="mb-4">If you like the work I do, you can make a donation to motivate me to continue contributing to the open source industry.</p>
                <a href="https://www.patreon.com/YourUsername" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-purple-500 px-4 py-2 rounded text-white hover:bg-purple-600 transition-colors duration-200">Patreon</a>
            </aside>
        </div>
    );
}

export default Sidebar;


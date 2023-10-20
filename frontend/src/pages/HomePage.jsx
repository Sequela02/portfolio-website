// Imports
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../assets/styles/styles.css';

/**
 * HomePage Component
 * Represents the main landing page of the application.
 *
 * Components Structure:
 * - Background Container
 *   - Main Container
 *     - Header (Navigation Bar)
 *     - Main Content (Profile Info and Description)
 *     - Sidebar (Additional User Details)
 */
function HomePage() {
    return (
        <div className="background-gif">
            <div className="container mx-auto px-4">

                {/* Header/Navigation */}
                <Header className="header" />

                {/* Main Content Area */}
                <main className="flex flex-col md:flex-row justify-start items-start h-auto pt-10 md:pt-24">




                {/* Profile Section */}
                    <div className="main-content mb-6  w-full md:w-4/5 lg:w-3/5 p-4 rounded-xl text-gray-100">

                        {/* Profile Picture and Name */}
                        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                            <img src="/favicon.ico" alt="Profile" className="w-24 h-24 md:w-32 md:h-32 rounded-full"/>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-shadow">Canitas</h1>
                                <p className="text-xl">
                                    👨‍💻 Java Developer in the making | 📚 Computer Systems Engineering Student | 🎨 Exploring 3D Animation & 🕹️ Game Development |
                                </p>
                            </div>
                        </div>

                        {/* Description Section */}
                        <section>
                            <h2 className="text-3xl font-bold my-4">Who am I?</h2>
                            My name is Ricardo, I'm a 21-year-old programmer from Mexico. I'm currently studying Computer Systems Engineering in university. I like programming games and working on solutions. 🎮💻
                            I'm really passionate about programming, especially Java in the backend. ☕🤓 I also like watching movies and series, eating Mexican and Chinese food, 🇲🇽🇨🇳 and writing. ✍️ I hope to be a filmmaker one day. 🎥🎬
                            In my free time, I like to hang out with my friends and family, 👫👭 play video games, 🎮🕹️👾 and watch movies. 🍿🎥🎞️ I'm also a big fan of music and I enjoy listening to different genres. 🎶🎧
                            I'm excited to be a part of the programming community and I look forward to learning and growing as a programmer. 👨‍💻👩‍💻 I hope to one day be able to use my skills to make a positive impact on the world. 🌍🌎🌏

                        </section>
                    </div>

                    {/* Sidebar Section */}
                    <Sidebar className="sidebar " /> {/* Made sure it takes the full height */}

                </main>
            </div>
        </div>
    );
}

export default HomePage;

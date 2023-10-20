// Imports
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CVViewer from '../components/CVViewer';
import '../assets/styles/styles.css';


/**
 * HireMePage Component
 * Represents a dedicated page to hire the user.
 *
 * Components Structure:
 * - Background Container
 *   - Main Container
 *     - Header (Navigation Bar)
 *     - Main Content (Hire Me Text and CV Viewer)
 *     - Sidebar (Additional User Details)
 */
function HireMePage() {
    return (
        <div className="background-gif">
            <div className="container mx-auto px-4">

                {/* Header/Navigation */}
                <Header className="header" />

                {/* Main Content Area */}
                <main className="flex flex-col md:flex-row justify-start items-start h-auto pt-10 md:pt-24">
                    <div className="hire-main-content pt-10  mb-6 w-full flex-grow md:mr-8 max-h-[1000px] overflow-y-auto p-4 rounded-xl text-gray-100 gap-8">
                    {/* Hire Me Text Section */}
                        <div className="">
                            <h1 className="text-3xl font-bold text-white mb-2">Hire Me</h1>

                        </div>


                        {/* CV Viewer Section */}
                        <div className="cv-viewer-section">
                            <h1>My CV</h1>

                            <div className="cv-viewer-container">
                                <CVViewer file="/cv.pdf" />
                            </div>
                        </div>

                    </div>



                    {/* Sidebar Section */}
                    <Sidebar className="sidebar" /> {/* Made sure it takes the full height */}

                </main>


            </div>

        </div>
    );
}

export default HireMePage;

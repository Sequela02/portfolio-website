import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faClock,
    faEnvelope,
    faHandHoldingHeart,
    faListAlt,
    faMoneyBillWave,
    faRocket
} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"; // Assuming this is your contact form component

function HeroSection() {
    return (
        <section className="hero-container text-center py-10 md:py-20 lg:py-32 relative">
            <div className="hero-content max-w-2xl mx-auto">
                <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Engage with Creative Minds</h1>
                <p className="hero-cta-description text-lg sm:text-xl">Connect with me for unique project collaborations, expert freelance services, and innovative solutions tailored to your needs.</p>
                <p className="hero-description text-2xl py-4 sm:text-2xl mb-4">Let's bring your vision to life together.</p>
            </div>
        </section>
    );
}

function ProjectSection() {
    return (
        <section className="project-container2 py-16 text-center px-6 ">
            <div className="project-content max-w-4xl mx-auto mb-10">
                <h2 className="project-title text-3xl sm:text-4xl font-bold mb-6 ">Project Proposal Guidelines</h2>

                <div className="guideline-section mb-6">
                    <FontAwesomeIcon icon={faRocket} className="icon-placeholder mr-2 " />
                    <p className="guideline-text">
                        If you're seeking a dedicated and skilled freelancer to bring your vision to life, you've come to the right place...
                    </p>
                </div>

                <div className="features-section mb-6">
                    <FontAwesomeIcon icon={faListAlt} className="icon-placeholder mr-2 " />
                    <p className="feature-text">Key Features for Your Project:</p>
                    <ul className="list-disc list-inside pl-4">
                        <li>Feature #1: Detailed description of the feature.</li>
                        <li>Feature #2: Detailed description of the feature.</li>
                        <li>Feature #3: Detailed description of the feature.</li>
                        {/* ... Add more features as needed */}
                    </ul>
                </div>

                <div className="deadline-section mb-6">
                    <FontAwesomeIcon icon={faClock} className="icon-placeholder mr-2 " />
                    <p className="deadline-text">Project Timeline and Deadline Considerations...</p>
                </div>

                <div className="payment-info-section">
                    <FontAwesomeIcon icon={faMoneyBillWave} className="icon-placeholder mr-2 " />
                    <p className="payment-info-text">
                        A clear estimation of costs and delivery schedules will be provided once I have all the necessary details...
                    </p>
                </div>
            </div>
        </section>
    );

}

function ContactSection() {
    return (
        <section className="contact-section py-16 text-center px-6">
            <h2 className="contact-title text-2xl md:text-3xl font-bold mb-6">Contact Me</h2>

            <div className="contact-detail flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="neon-blue-text text-lg md:text-xl mr-2" />
                <label className="mr-2 hero-title font-semibold">Email:</label>
                <a href="mailto:r3xed@outlook.e" className="neon-blue-text">r3xed@outlook.e</a>
            </div>

            <div className="contact-detail flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faLinkedin} className="neon-blue-text  text-lg md:text-xl mr-2" />
                <label className="mr-2 hero-title ">LinkedIn:</label>
                <a href="https://www.linkedin.com/in/ricardo-armenta-parra-b7066a201/" target="_blank" rel="noreferrer" className="neon-blue-text">Perfil de LinkedIn</a>
            </div>

            <p className="mt-4 neon-blue-text">
                You can also contact me through my social networks at the top of the page.
            </p>
        </section>
    );
}

function SponsorSection() {
    return (
        <section className="sponsor-container py-16 text-center px-6 ">
            <div className="sponsor-content max-w-2xl mx-auto mb-10">
                <h2 className="neon-green-text text-2xl sm:text-3xl font-bold mb-4 ">Support Open Source</h2>
                <p className="neon-blue-text mb-6">
                    Your contributions help support my open-source projects and the broader community.
                </p>
                {/* Button for sponsorship */}
                <a href="https://paypal.me/r3xed?country.x=MX&locale.x=es_XC" target="_blank" rel="noopener noreferrer">
                    <button className="cyber-button flex items-center justify-center px-4 py-2 text-white font-bold rounded transition duration-300">
                        <FontAwesomeIcon icon={faHandHoldingHeart} className="mr-2" />
                        Sponsor Now
                    </button>
                </a>

            </div>
        </section>
    );
}

function HireMePage() {
    return (
        <main className="min-h-screen  flex flex-col justify-between">
            <HeroSection />
            <ProjectSection />
            <ContactSection />
            <SponsorSection />
        </main>

    );
}

export default HireMePage;
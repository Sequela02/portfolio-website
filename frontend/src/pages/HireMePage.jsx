import React from 'react';
import ContactForm from '../components/ContactForm'; // Assuming this is your contact form component
import '../assets/styles/hiremepage.css';


function HireMePage() {


    return (
        <div className="hireMePage bg-fixed bg-no-repeat bg-cover text-gray-100 relative overflow-hidden">


            <main className="flex flex-col justify-center items-center min-h-screen pt-10 pb-20 relative z-10">

                {/* Hero Section with Canvas */}
                <section className="hero-section text-center max-w-2xl mx-auto mb-10 px-4 relative">
                    <div className="absolute top-0 left-0 w-full h-full z-0"></div>
                    <div className="relative z-10">
                        <h1 className="title text-4xl sm:text-5xl font-bold mb-4">Engage with Creative Minds</h1>
                        <p className="description mb-4">Discover bespoke solutions crafted with precision and ingenuity. Let's bring your vision to life.</p>
                    </div>
                </section>
                {/* Project Presentation Section */}
                <section className="project-section max-w-2xl mx-auto mb-10 px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Project Proposal Guidelines</h2>
                    <p className="intro-text mb-4">
                        If you're seeking a dedicated and skilled freelancer to bring your vision to life, you've come to the right place.
                        I deliver custom solutions, from Minecraft mods to dynamic websites and tailored software. To get started, simply
                        reach out with your project idea.
                    </p>
                    <div className="instructions mb-4">
                        <p>Please provide a detailed project brief via Discord or Twitter, including a document with the following information:</p>
                        <ul className="project-list">
                            <li><strong>Project Name:</strong> A clear title that encapsulates your project's essence.</li>
                            <li><strong>Key Features:</strong> An itemized list of functionalities and features that your project requires:</li>
                            <ul className="features-list">
                                <li>Feature #1: Detailed description of the feature.</li>
                                <li>Feature #2: Detailed description of the feature.</li>
                                <li>Feature #3: Detailed description of the feature.</li>
                                {/* ... Add more features as needed */}
                            </ul>
                            <li><strong>Deadline:</strong> Your expected timeline and any references that could provide inspiration or direction.</li>
                        </ul>
                    </div>
                    <p className="payment-info">
                        A clear estimation of costs and delivery schedules will be provided once I have all the necessary details. Payments are
                        typically divided into two milestones—50% to commence the project, and the remaining 50% upon final delivery. In the unlikely
                        event that the software does not perform as required and a solution cannot be found, a refund can be discussed.
                    </p>
                </section>

                {/* Contact Form Section */}
                <section id="contact" className="contact-form w-full max-w-md mx-auto mb-10 px-4">

                    <ContactForm />
                </section>

                {/* Sponsor Section */}
                <section className="sponsor-section max-w-2xl mx-auto mb-10 px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Support Open Source</h2>
                    <p>Your contributions help support my open-source projects and the broader community.</p>
                    {/* Placeholder for PayPal integration */}
                </section>

            </main>
        </div>
    );
}

export default HireMePage;

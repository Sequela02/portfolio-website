// Imports
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS Styles
import CVViewer from '../components/CVViewer';
import ContactForm from '../components/ContactForm'; // Assuming you have a contact form component


function HireMePage() {
    // Initialize AOS
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-fixed bg-no-repeat bg-cover text-gray-100">
            {/* Main Content Area */}
            <main className="flex flex-col justify-center items-center min-h-screen pt-10 pb-20">

                {/* Hero Section */}
                <section data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-10 px-4">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Let's create something together</h1>

                </section>


                {/* CV Viewer Section */}
                <section data-aos="fade-left" className="mb-10 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold ">My Resume</h2>
                    <div className="f">
                        <CVViewer file="/cv.pdf" />
                    </div>
                </section>


                {/* Call to Action Section */}
                <section data-aos="fade-up" className="my-10 px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3">Start a Project</h2>
                    <p className="mb-6">Interested in working together? I’m just an email away.</p>
                    <a href="#contact" className="btn btn-primary">Hire Me</a>
                </section>

                {/* Contact Form Section */}
                <section id="contact" data-aos="flip-up" className="w-full max-w-md mx-auto mb-10 px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3">Contact Me</h2>
                    <ContactForm />
                </section>

            </main>
        </div>
    );
}

export default HireMePage;

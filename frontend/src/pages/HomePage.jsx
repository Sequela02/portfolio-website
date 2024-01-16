import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import all logos from the assets directory
import javaLogo from '../assets/icons/icons8-java.svg';
import reactLogo from '../assets/icons/icons8-react.svg';
import springLogo from '../assets/icons/icons8-spring-boot.svg';
import mysqlLogo from '../assets/icons/icons8-mysql.svg';
import nextLogo from '../assets/icons/icons8-nextjs.svg';
import htmlLogo from '../assets/icons/icons8-html-5.svg';
import nodeLogo from '../assets/icons/icons8-nodejs.svg';
import javascriptLogo from '../assets/icons/icons8-javascript.svg';
import cSharpLogo from '../assets/icons/icons8-c-sharp-logo.svg';
import profilePic from '../assets/icons/profilepic.jpg';
import { Helmet } from 'react-helmet';
import Typed from 'typed.js';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/homepage.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDownload,
    faGraduationCap,
    faCode,
    faEnvelope,
    faHandshake,
    faUser,
    faLaptopCode, faMobileAlt, faCogs
} from '@fortawesome/free-solid-svg-icons';


/**
 * HomePage component serves as the landing page of the application, showcasing footer.css digital rain canvas effect,
 * dynamic typing text, and footer.css grid of skill icons representing various technologies.
 */
function HomePage() {
    const canvasRef = useRef(null);

    // Effect hook for initializing animations and effects
    useEffect(() => {
        // Initialize animation on scroll library
        AOS.init({ duration: 1200, once: true });

        // Digital Rain canvas effect setup
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = Array.from({ length: Math.round(columns) }, () => 0);
        const characters = Array.from({ length: 300 }, () => String.fromCharCode(Math.random() * 128));

        // Function to render digital rain effect
        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, i) => {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillStyle = (i % 3 === 0) ? '#0f0' : (i % 3 === 1) ? '#ffffff' : '#ec0000';

                ctx.fillText(text, i * fontSize, y * fontSize);
                drops[i] = (y * fontSize > canvas.height && Math.random() > 0.975) ? 0 : y + 1;
            });

            requestAnimationFrame(draw);
        };

        let animationFrameId = requestAnimationFrame(draw);

        // Typed.js for dynamic text effect setup
        const typed = new Typed('.typed-text', {
            strings: ['c:/','c:/Users/','c:/Users/Canitas', 'c:/Users/Canitas/Portfolio'],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1500,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        });

        // Cleanup function to clear the effects when the component unmounts
        return () => {
            cancelAnimationFrame(animationFrameId);
            typed.destroy();
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Canitas - Home</title>
                <meta name="description" content="Canitas - A passionate developer creating innovative tech solutions." />
            </Helmet>
            <main className="min-h-screen bg-black text-white">
                <HeroSection canvasRef={canvasRef} />
                <AboutMe />
                <SkillsSection />
                <TrajectorySection />
                <ServicesSection />


                <ContactSection />

            </main>
        </>
    );
}


// Hero section with canvas and dynamic text
const HeroSection = ({ canvasRef }) => (
    <section className="hero-section text-center py-10 md:py-20 lg:py-32 relative">
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full z-0"
        ></canvas>
        <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 neon-green-text">
                Ricardo Armenta
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 neon-blue-text">
                Software Developer
            </h2>
            <div className="typed-text-container text-base md:text-lg lg:text-xl mb-8 neon-green-text">
                <h3 className="typed-text">

                </h3>
            </div>
            <Link to="/portfolio" className=" rounded py-2 px-4 cyber-button">
                Explore My Projects
            </Link>
        </div>
    </section>
);
const timelineData = [
    {
        date: '2019-Today',
        title: 'Bachelor of Computer Systems Engineering',
        description: 'I started my degree in Computer Systems Engineering at the Instituto Tecnológico de Hermosillo, where I developed my programming skills, learned Object-Oriented Programming (OOP), Java, data structures, C# and SQLServer',

    },

];

const TrajectorySection = () => (
    <section className="py-12 md:py-16 lg:py-20 gradient-skills-bg">
        <div className=" mx-auto px-4">
            <h2 className="text-center text-green-400 neon-green-text text-4xl" data-aos="fade">
                <FontAwesomeIcon icon={faGraduationCap} className="mr-4" /> My Education
            </h2>
            <div className="w-full flex justify-center">
                <VerticalTimeline layout="2-columns" lineColor="#00f260">
                    {timelineData.map((event, index) => (
                        <VerticalTimelineElement
                            key={index}
                            date={event.date}
                            animate={true}
                            dateClassName="custom-date-text"
                            contentArrowStyle={{ borderRight: '7px solid #00f260' }}
                            contentStyle={{ background: '#0a192f', color: '#ffffff', border: '1px solid #00f260' }}
                            iconStyle={{ background: 'rgb(10, 25, 47)', color: '#00f260' }}
                            data-aos="fade-left"
                        >
                            <div className="content-inner">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-300">{event.title}</h3>
                                <p className="text-sm sm:text-base md:text-lg text-green-200">{event.description}</p>
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
            <div className="text-center mt-8">
                <a
                    href="/cv.pdf"
                    className="cyber-button py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded shadow-lg  text-sm md:text-base lg:text-lg w-full sm:w-auto">
                    Download CV <FontAwesomeIcon icon={faDownload} />
                </a>
            </div>

        </div>
    </section>
);


const services = [
    { id: 1, title: 'Web Development', description: 'Building responsive and modern web applications.', icon: faLaptopCode },
    { id: 2, title: 'Web Apps', description: 'Creating interactive and dynamic web applications tailored to your needs.', icon: faMobileAlt },
    { id: 3, title: 'Software Development', description: 'Developing robust software solutions for various platforms.', icon: faCogs }
];
const ServicesSection = () => (
    <section className="services-section gradient-bg2 py-16 px-6">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center neon-green-text mb-12">
                 Services
            </h1>
            <div className="service-description neon-blue-text text-center mb-12">
                <p className="text-xl md:text-2xl font-bold  mb-4 ">
                    I offer a range of technology services to help bring your digital projects to life.
                </p>
                <p className="text-xl md:text-xl  mb-4">
                    For each project, I focus on understanding your goals and working closely with you. Effective communication is key, so I welcome your ideas and feedback throughout the development process.
                </p>
                <p className="text-xl md:text-xl ">
                    My priority is creating solutions that achieve your objectives. I guide each project with your preferences and satisfaction in mind. Working as a team, we can leverage innovation to create something remarkable that brings your vision to reality.
                </p>
            </div>

            <div className="services-flex flex flex-wrap justify-center">
                {services.map((service) => (
                    <div key={service.id} className="service-container transition-transform duration-300 ease-in-out rounded-lg text-center p-4 m-2">
                        <FontAwesomeIcon icon={service.icon} className="service-icon neon-green-text mb-4 text-4xl" />
                        <h3 className="service-title text-lg md:text-xl font-semibold mb-2 neon-green-text">
                            {service.title}
                        </h3>
                        <p className="service-description">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);






const AboutMe = () => (
    <section className="py-12 gradient-about-me-bg px-4">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center neon-green-text mb-12">
                <FontAwesomeIcon icon={faUser} /> About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="service-description neon-blue-text text-center mb-12">
                    <p className=" text-xl md:text-2xl  mb-4 ">
                        Hello there! I'm Ricardo Armenta, a 21-year-old avid gamer and cinephile with a zest for Chinese cuisine and a passion for boxing. I have a deep love for Java and backend development, and I'm currently immersed in my studies to further hone these skills.
                    </p>
                    <p className="text-xl md:text-xl  mb-4">
                        In my leisure time, you'll often find me exploring the latest video games or delving into the world of cinema. My appetite for learning is as insatiable as my love for gaming and film, and I'm always on the lookout for new challenges that push my abilities to the limit.
                    </p>
                    <p className="text-xl md:text-xl ">
                        If you're interested in a collaborative project or just want to chat about the latest in gaming or film, feel free to reach out!
                   </p>
                </div>

                <div className="flex justify-center items-center w-full md:w-full lg:w-1/3 xl:w-1/4 mx-auto mt-6">
                    <div className="rounded-full overflow-hidden w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72 shadow-lg hover:scale-105 transition-transform duration-300">
                        <img src={profilePic} alt="Ricardo Armenta" className="w-full h-full object-cover rounded-full" />
                    </div>
                </div>

            </div>
        </div>
    </section>
);



const skills = [
    { src: cSharpLogo, alt: 'C#' },
    { src: javaLogo, alt: 'Java' },
    { src: reactLogo, alt: 'React' },
    { src: springLogo, alt: 'Spring' },
    { src: mysqlLogo, alt: 'MySQL' },
    { src: nextLogo, alt: 'Next.js' },
    { src: htmlLogo, alt: 'HTML' },
    { src: nodeLogo, alt: 'Node.js' },
    { src: javascriptLogo, alt: 'JavaScript' },
    // ... add other skills here
];

// Skills section showcasing various technology logos
const SkillsSection = () => (
    <section className="skills-section tech-bg py-16 px-6">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center neon-green-text mb-12">
                <FontAwesomeIcon icon={faCode} className="mr-4" /> Technical Arsenal
            </h2>
            <div className="skills-icons grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
                {skills.map((skill, index) => (
                    <div key={skill.id} className="skill-container  transition-transform duration-300 ease-in-out rounded-lg text-center">
                        <div className="skill-icon-container mb-2">
                            <img src={skill.src} alt={skill.alt} className="skill-icon mx-auto" />
                        </div>
                        <h1 className="skill-text text-sm md:text-base"> {/* Responsive text size */}
                            {skill.alt}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    </section>
);





// Contact section for user engagement
const ContactSection = () => (
    <section className="contact-section gradient-contact-bg  py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold neon-green-text mb-8">
                <FontAwesomeIcon icon={faEnvelope} /> Get in Touch
            </h2>
            <p className="mb-6">
                If you are interested in professional collaboration or have any inquiries, please feel free to reach out. I am available for discussions and potential opportunities.
            </p>
            <Link to="/hire-me" className="rounded py-2 px-4 cyber-button">
                <FontAwesomeIcon icon={faHandshake} /> Contact Me
            </Link>
        </div>
    </section>

);


export default HomePage;
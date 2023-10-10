/**
 * HomePage Component
 *
 * This component represents the main landing page of the application.
 *
 * Props:
 * - None
 *
 * State Variables:
 * - None (as of now)
 */
import Header from '../components/Header';
import '../assets/styles/styles.css';

function HomePage() {
    return (
        <div className="background-gif">
            <div className="container mx-auto px-4">  {/* <-- Added container div */}
                <Header className="header" />
                <main className="flex flex-col md:flex-row justify-center items-start md:items-center h-auto md:h-screen">
                    <div className="main-content p-4 my-2 md:my-0 md:w-3/5 w-full rounded-xl text-gray-100 md:mr-4">

                        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">

                        <img src="/favicon.ico" alt="Profile" className="w-24 h-24 md:w-32 md:h-32 rounded-full"/>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-shadow">Canitas</h1>

                            <p className="text-xl">
                                👨‍💻 Java Developer in the making | 📚 Computer Systems Engineering Student | 🎨 Exploring 3D Animation & 🕹️ Game Development |
                                {/* truncated for brevity */}
                            </p>
                        </div>
                    </div>
                    <section>
                        <h2 className="text-3xl font-bold my-4">Who am I?</h2>
                        My name is Ricardo, I'm a 21-year-old programmer from Mexico. I'm currently studying Computer Systems Engineering in university. I like programming games and working on solutions. 🎮💻
                        I'm really passionate about programming, especially Java in the backend. ☕🤓 I also like watching movies and series, eating Mexican and Chinese food, 🇲🇽🇨🇳 and writing. ✍️ I hope to be a filmmaker one day. 🎥🎬
                        In my free time, I like to hang out with my friends and family, 👫👭 play video games, 🎮🕹️👾 and watch movies. 🍿🎥🎞️ I'm also a big fan of music and I enjoy listening to different genres. 🎶🎧
                        I'm excited to be a part of the programming community and I look forward to learning and growing as a programmer. 👨‍💻👩‍💻 I hope to one day be able to use my skills to make a positive impact on the world. 🌍🌎🌏
                    </section>
                </div>
                <aside className="sidebar p-4 text-white md:ml-4 rounded-xl bg-gray-800">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">About me</h2>
                        <li><span className="emoji" aria-hidden="true">🎂</span><strong>Age:</strong> 21</li>
                        <li><span className="emoji" aria-hidden="true">📅</span><strong>Birthdate:</strong> Jul, 30</li>
                        <li><span className="emoji" aria-hidden="true">📍</span><strong>Country:</strong> México</li>
                        <li><span className="emoji" aria-hidden="true">🏞️</span><strong>State:</strong> Sonora</li>
                    </section>

                </aside>




                </main>

            </div>

        </div>
    );
}


export default HomePage;

import Header from '../components/Header';
import '../assets/styles/styles.css';

function HomePage() {
    return (
        <div className="background-gif">
            <Header className="header" />

            <main className="flex flex-row justify-center items-center h-screen">
                <div className="main-content p-4 md:w-3/5 w-full rounded-xl text-gray-100 md:mr-4">
                    <div className="flex items-center space-x-4">
                        <img src="/favicon.ico" alt="Profile" className="w-32 h-32 rounded-full"/>
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-2 text-shadow">Canitas</h1>
                            <p className="text-xl">
                                👨‍💻 Java Developer in the making | 📚 Computer Systems Engineering Student |
                                🎨 Exploring 3D Animation & 🕹️ Game Development |
                            </p>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold my-4">Who am I?</h2>
                    <p>aun no hay nada aqui...</p>
                </div>

                <aside className="sidebar p-4 text-white md:w-2/5 w-full rounded-xl">
                    <h2 className="text-2xl font-bold mb-4">About me</h2>
                    <ul>
                        <li><strong>Age:</strong> 21</li>
                        <li><strong>Age:</strong> Jul, 30</li>
                        <li><strong>Country:</strong> México</li>
                        <li><strong>State:</strong> Sonora</li>
                    </ul>
                    <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">Paypal</button>
                </aside>
            </main>
        </div>
    );
}

export default HomePage;

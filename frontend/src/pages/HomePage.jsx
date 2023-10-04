import Header from '../components/Header';
import '../assets/styles/styles.css';


function HomePage() {
    return (
        <div className="background-gif">{/* added pt-16 for padding-top */}
            <Header />

            <div className="flex flex-col justify-center items-center h-screen">
                {/* Main Content */}
                <div className="main-content p-4 bg-black bg-opacity-90 text-white rounded-xl">
                    <div className="flex items-center">
                        <img src="/favicon.ico" alt="Your Profile" className="w-32 h-32 rounded-full mr-4"/>
                        <div>
                            <h1 className="text-4xl font-bold mb-2">Canitas</h1>
                            <p className="text-xl">👨‍💻 Java Developer in the making | 📚 Computer Systems Engineering Student | 🎨 Exploring 3D Animation & 🕹️ Game Development |</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold my-4">Who am I?</h2>
                    <p>Your detailed narrative here...</p>
                </div>

                {/* Sidebar/Additional Info */}
                <div className="sidebar p- bg-black bg-opacity-90 text-white rounded-xl">
                    <h2 className="text-2xl font-bold mb-4">About me</h2>
                    <ul>
                        <li><strong>Age:</strong> 21</li>
                        <li><strong>Country:</strong> México</li>
                        {/* ... add more details as required */}
                    </ul>

                    {/* If you have any call to action like sponsorship or hiring */}
                    <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">Hire Me</button>
                </div>
            </div>
        </div>
    );
}




export default HomePage;

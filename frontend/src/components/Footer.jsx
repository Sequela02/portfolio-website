import React from 'react';
import '../assets/styles/CyberpunkTheme.css';
function footer() {
    return (
        <footer className="footer bg-black py-6">
            <div className="max-w-6xl mx-auto text-center text-gray-400">
                &copy; {new Date().getFullYear()} Canitas. All Rights Reserved in the Codeverse.
            </div>
        </footer>
    )
}
export default footer;
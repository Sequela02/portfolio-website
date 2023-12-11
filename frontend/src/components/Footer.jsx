import React from 'react';
import '../assets/styles/footer.css';
function footer() {
    return (
        <footer className="footer bg-black py-6">
            <div className="max-w-6xl mx-auto text-center ">
                &copy; {new Date().getFullYear()} Ricardo Armenta Parra. All Rights Reserved.
            </div>
        </footer>
    )
}
export default footer;
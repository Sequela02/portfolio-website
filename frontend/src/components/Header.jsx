// Ejemplo: src/components/Header.jsx
// src/components/Header.jsx
import React from 'react';

function Header() {
    return (
        <header className="bg-white h-screen flex flex-col justify-center items-center">
            <img src="/favicon.ico" alt="Tu Logo" className="absolute top-10 left-10 w-20 h-20" />
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Tu Nombre</h1>
            <p className="text-xl text-gray-700 mb-8">Desarrollador de Software especializado en Java y Animación 3D</p>
            <div className="flex space-x-4">
                <button className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    Ver Proyectos
                </button>
                <button className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    Contacto
                </button>
            </div>
        </header>
    );
}

export default Header;



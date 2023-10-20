import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Importa tu archivo CSS principal aquí
import App from './App';

const root = document.getElementById('root');
const appRoot = ReactDOM.createRoot(root);

appRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

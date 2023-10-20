# Biblioteca x Framework

Explica sobre o root e tudo mais.

O DOM real termina naquele arquivo html que o próprio react cria quando criamos um projeto com ele.

A parte da Virtual Dom começa no arquivo index.js que está na root do projeto:

    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );

Basicamente ele procura no documento o id document.getElementById('root'), e esse id está relacionado com a div que tem lá no arquivo index.html que está dentro da pasta public.

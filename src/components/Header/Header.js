import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/arte-em-movimento-logo.jpg'; // Importando o logo

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo-container">
                    <img src={logo} alt="Arte em Movimento Logo" className="logo" />
                </div>
                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <a href="#services" onClick={() => setIsOpen(false)}>Serviços</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>Sobre Nós</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contato</a>
                </nav>
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/arte-em-movimento-logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo-area">
                    <img src={logo} alt="Arte em Movimento Logo" className="logo" />
                    <span className="logo-text">Arte em Movimento <br /> Thamires Coutinho</span>
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
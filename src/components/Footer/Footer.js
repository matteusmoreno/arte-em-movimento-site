import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {currentYear} Arte em Movimento. Todos os direitos reservados.</p>
                <p>Desenvolvido com ❤️</p>
            </div>
        </footer>
    );
};

export default Footer;
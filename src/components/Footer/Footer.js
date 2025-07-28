import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                {/* A linha "Desenvolvido com ❤️" foi removida daqui */}
                <p>© {currentYear} Arte em Movimento. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
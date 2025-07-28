import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1>Movimente-se. Transforme-se.</h1>
                <p>Descubra o prazer da atividade física na Arte em Movimento. Oferecemos um espaço completo para cuidar do seu corpo e mente.</p>
                <a href="#services" className="cta-button">Conheça Nossas Modalidades</a>
            </div>
        </section>
    );
};

export default Hero;
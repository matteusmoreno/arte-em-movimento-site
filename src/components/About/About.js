import React from 'react';
import './About.css';
import fotoAcademia from '../../assets/academia-inside.jpg';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-container">
                <div className="about-image">
                    {/* 2. USE A VARIÁVEL IMPORTADA AQUI NO 'src' */}
                    <img src={fotoAcademia} alt="Espaço interno da Arte em Movimento" />
                </div>
                <div className="about-content">
                    <h2>Nosso Espaço</h2>
                    <p>A Arte em Movimento foi criada para ser mais do que uma academia: um centro de bem-estar em Bacaxá. Nosso objetivo é oferecer um ambiente acolhedor e profissional para todas as idades.</p>
                    <p>Com equipamentos modernos e uma equipe apaixonada, estamos prontos para ajudar você a alcançar seus objetivos, seja na dança, na luta, na ginástica ou na reabilitação.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
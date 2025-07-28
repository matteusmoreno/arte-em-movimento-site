import React from 'react';
import './Services.css';

// MUDANÇA: 'FaUsers' foi removido da linha de importação abaixo
import { FaHeartbeat, FaChild, FaYinYang } from 'react-icons/fa';
import { GiGalaxy, GiBallerinaShoes, GiLotus } from "react-icons/gi";


const servicesData = [
    {
        icon: <GiBallerinaShoes />,
        title: 'Danças',
        description: 'Explore diversos ritmos e expressões corporais.'
    },
    {
        icon: <FaYinYang />,
        title: 'Artes Marciais',
        description: 'Desenvolva disciplina, foco e defesa pessoal.'
    },
    {
        icon: <FaChild />,
        title: 'Ginástica Artística',
        description: 'Flexibilidade, força e graça em movimentos incríveis.'
    },
    {
        icon: <GiGalaxy />,
        title: 'Pilates',
        description: 'Fortaleça seu corpo, melhore a postura e o equilíbrio.'
    },
    {
        icon: <FaHeartbeat />,
        title: 'Fisioterapia',
        description: 'Recuperação e prevenção de lesões com profissionais qualificados.'
    },
    {
        icon: <GiLotus />,
        title: 'Bem-estar',
        description: 'Atividades focadas em relaxamento, consciência corporal e saúde mental.'
    },
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nossas Modalidades</h2>
                    <p className="section-subtitle">
                        Encontre a atividade perfeita para seu corpo e mente. Oferecemos aulas para todas as idades e objetivos.
                    </p>
                </div>
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon-container">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
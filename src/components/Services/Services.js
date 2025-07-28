import React from 'react';
import './Services.css';

// Idealmente, você teria ícones para cada serviço. 
// Pode usar bibliotecas como 'react-icons'. Ex: `import { GiBallerinaShoes } from 'react-icons/gi';`

const servicesData = [
    { title: 'Danças', description: 'Explore diversos ritmos e expressões corporais.' },
    { title: 'Artes Marciais', description: 'Desenvolva disciplina, foco e defesa pessoal.' },
    { title: 'Ginástica Artística', description: 'Flexibilidade, força e graça em movimentos incríveis.' },
    { title: 'Pilates', description: 'Fortaleça seu corpo, melhore a postura e o equilíbrio.' },
    { title: 'Fisioterapia', description: 'Recuperação e prevenção de lesões com profissionais qualificados.' },
];

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <h2>Nossas Modalidades</h2>
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div className="service-card" key={index}>
                            {/* Aqui entraria o ícone, se você instalar uma biblioteca */}
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
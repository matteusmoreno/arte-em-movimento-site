import React from 'react';
import './Contact.css';

const Contact = () => {
    // Número de WhatsApp formatado para o link
    const whatsappNumber = '5522988524315';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de mais informações sobre a academia.`;

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Venha nos Conhecer</h2>
                <div className="contact-info">
                    <div className="info-item">
                        <h3>Endereço</h3>
                        <p>Rua Alfredo Menezes, 212 - Loja 07</p>
                        <p>Bacaxá, Saquarema - RJ, 28994-675</p>
                    </div>
                    <div className="info-item">
                        <h3>Contato</h3>
                        <p>WhatsApp: (22) 98852-4315</p>
                        <p>Instagram: @tcarteemmovimento</p>
                    </div>
                </div>
                <div className="contact-actions">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-button whatsapp">
                        Fale Conosco no WhatsApp
                    </a>
                    <a href="https://www.google.com/maps/search/?api=1&query=Rua+Alfredo+Menezes,212,Saquarema,RJ" target="_blank" rel="noopener noreferrer" className="contact-button map">
                        Ver no Mapa
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
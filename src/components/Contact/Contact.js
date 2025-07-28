import React from 'react';
import './Contact.css';
// Importando os ícones que vamos usar
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    // Links para WhatsApp e Instagram
    const whatsappNumber = '5522988524315';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de mais informações sobre a academia.`;
    const instagramLink = 'https://www.instagram.com/tcarteemmovimento';

    // Link do Google Maps para o endereço
    const mapQuery = "Rua Alfredo Menezes, 212 - Loja 07 - Bacaxá, Saquarema - RJ, 28994-675";
    const mapEmbedUrl = `https://www.google.com/maps?q=$${encodeURI(mapQuery)}&output=embed`;
    const mapLink = `https://www.google.com/maps?q=$${encodeURI(mapQuery)}`;


    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-title">
                    <h2>Venha nos Conhecer</h2>
                    <p>Estamos ansiosos para receber sua visita e te mostrar tudo que a Arte em Movimento tem a oferecer.</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-details">
                        <div className="contact-card">
                            <FaMapMarkerAlt className="contact-icon" />
                            <h3>Nosso Endereço</h3>
                            <p>Rua Alfredo Menezes, 212 - Loja 07</p>
                            <p>Bacaxá, Saquarema - RJ</p>
                            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="card-link">
                                Ver no Google Maps
                            </a>
                        </div>
                        <div className="contact-card">
                            <FaWhatsapp className="contact-icon" />
                            <h3>WhatsApp</h3>
                            <p>(22) 98852-4315</p>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="card-link">
                                Enviar Mensagem
                            </a>
                        </div>
                        <div className="contact-card">
                            <FaInstagram className="contact-icon" />
                            <h3>Instagram</h3>
                            <p>@tcarteemmovimento</p>
                            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="card-link">
                                Seguir a gente
                            </a>
                        </div>
                    </div>
                    <div className="contact-map">
                        <iframe
                            title="Localização da Academia Arte em Movimento"
                            src={mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
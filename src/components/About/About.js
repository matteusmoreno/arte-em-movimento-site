import React from 'react';
import './About.css';

// 1. Importar o componente Carousel e seu CSS
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// 2. Importar todas as imagens que farão parte do carrossel
import fotoPrincipal from '../../assets/academia-inside.jpg';
import foto1 from '../../assets/nosso-espaco-1.png';
import foto2 from '../../assets/nosso-espaco-2.png';
import foto3 from '../../assets/nosso-espaco-3.png';
import foto4 from '../../assets/nosso-espaco-4.png';
import foto5 from '../../assets/nosso-espaco-5.png';
import foto6 from '../../assets/nosso-espaco-6.png';
import foto7 from '../../assets/nosso-espaco-7.png';
import foto8 from '../../assets/nosso-espaco-8.png';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-container">
                <div className="about-content">
                    <h2>Nosso Espaço</h2>
                    <p>A Arte em Movimento foi criada para ser mais do que uma academia: um centro de bem-estar em Bacaxá. Nosso objetivo é oferecer um ambiente acolhedor e profissional para todas as idades.</p>
                    <p>Com equipamentos modernos e uma equipe apaixonada, estamos prontos para ajudar você a alcançar seus objetivos, seja na dança, na luta, na ginástica ou na reabilitação.</p>
                </div>

                {/* 3. Substituir a imagem única pelo Carrossel */}
                <div className="about-image">
                    <Carousel
                        autoPlay={true}      // Inicia a passagem automática
                        infiniteLoop={true}  // Cria um loop infinito
                        interval={4000}      // Muda de imagem a cada 4 segundos
                        showThumbs={false}   // Esconde as miniaturas de navegação
                        showStatus={false}   // Esconde o status "1 de 9"
                        showIndicators={true} // Mostra os pontinhos de navegação
                    >
                        {/* Adicione cada imagem como uma div dentro do carrossel */}
                        <div>
                            <img src={fotoPrincipal} alt="Visão ampla do espaço da academia" />
                        </div>
                        <div>
                            <img src={foto1} alt="Detalhe do nosso espaço 1" />
                        </div>
                        <div>
                            <img src={foto2} alt="Detalhe do nosso espaço 2" />
                        </div>
                        <div>
                            <img src={foto3} alt="Detalhe do nosso espaço 3" />
                        </div>
                        <div>
                            <img src={foto4} alt="Detalhe do nosso espaço 4" />
                        </div>
                        <div>
                            <img src={foto5} alt="Detalhe do nosso espaço 5" />
                        </div>
                        <div>
                            <img src={foto6} alt="Detalhe do nosso espaço 6" />
                        </div>
                        <div>
                            <img src={foto7} alt="Detalhe do nosso espaço 7" />
                        </div>
                        <div>
                            <img src={foto8} alt="Detalhe do nosso espaço 8" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default About;
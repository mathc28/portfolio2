import React from 'react';
import { Code,Route, CalendarRange, HandHeart, Smartphone, ChartLine } from 'lucide-react';
import './style.css';


const services = [
  {
    icon: <Code size={40} />,
    title: 'Développement Web',
    description: 'Sites vitrines, applications web modernes et performantes avec React ou WordPress.',
  },
  {
    icon: <Smartphone size={40} />,
    title: 'Format Responsive',
    description: 'Optimisation multi-supports pour garantir une expérience fluide sur tous les écrans.',
  },
  {
    icon: <CalendarRange size={40} />,
    title: 'Gestion de projets',
    description: 'Coordonnation à chaque étape pour garantir un site livré dans les délais et conforme à vos besoins',
  },
  {
    icon: <ChartLine size={40} />,
    title: 'Référencement Naturel',
    description: 'Code optimisé et contenu structuré pour un positionnement efficace sur Google',
  },
  {
    icon: <HandHeart size={40} />,
    title: 'Social Media',
    description: 'Gestion, planification et animation de vos réseaux sociaux pour assurer une présence régulière et professionnelle',
  },
  {
    icon: <Route size={40} />,
    title: 'Stratégie Digitale',
    description: 'Je vous aide à définir une stratégie claire pour booster votre visibilité en ligne et atteindre vos objectifs.',
  },
];

const ServicesSection = () => {
  return (
    <section className="services" id='services'>
      <h2 className="services-title">Mes services</h2>
      <p className="services-subtitle">
        Du concept au succès, une approche 360° pour votre présence en ligne.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

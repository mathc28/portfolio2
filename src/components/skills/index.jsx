'use client';

import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import { useLanguage } from "../../contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const CompetencesDisplay = () => {
  const sectionRef = useRef(null);
  const { t, language } = useLanguage();

  const technologies = useMemo(() => [
    {
      label: "HTML / CSS",
      icon: "🎨",
      description: language === 'fr'
        ? "Maîtrise avancée du HTML5 sémantique et CSS3 moderne (Flexbox, Grid, animations, variables CSS). Création d'interfaces accessibles et responsive."
        : "Advanced mastery of semantic HTML5 and modern CSS3 (Flexbox, Grid, animations, CSS variables). Creating accessible and responsive interfaces."
    },
    {
      label: "JavaScript / React",
      icon: "⚛️",
      description: language === 'fr'
        ? "Développement d'applications React avec hooks, Context API, et gestion d'état. JavaScript ES6+ et manipulation du DOM."
        : "Developing React applications with hooks, Context API, and state management. ES6+ JavaScript and DOM manipulation."
    },
    {
      label: "Responsive / UX",
      icon: "📱",
      description: language === 'fr'
        ? "Conception mobile-first, media queries, et design adaptatif. Attention particulière à l'expérience utilisateur et l'accessibilité (WCAG)."
        : "Mobile-first design, media queries, and adaptive layouts. Strong focus on user experience and accessibility (WCAG)."
    },
    {
      label: "WordPress / PHP",
      icon: "📝",
      description: language === 'fr'
        ? "Création de thèmes personnalisés, développement de plugins, et intégration WooCommerce. Optimisation et maintenance de sites WordPress."
        : "Custom theme creation, plugin development, and WooCommerce integration. WordPress site optimization and maintenance."
    },
    {
      label: "TypeScript / Next.js",
      icon: "🚀",
      description: language === 'fr'
        ? "Typage statique avec TypeScript pour un code plus robuste. Développement d'applications Next.js avec SSR et SSG."
        : "Static typing with TypeScript for more robust code. Next.js application development with SSR and SSG."
    },
    {
      label: "Git / GitHub",
      icon: "🔧",
      description: language === 'fr'
        ? "Gestion de versions avec Git, collaboration via GitHub, pull requests, et workflows CI/CD. Bonnes pratiques de versionning."
        : "Version control with Git, collaboration via GitHub, pull requests, and CI/CD workflows. Best versioning practices."
    },
  ], [language]);

  const expertiseAreas = useMemo(() => [
    {
      title: t.skills.expertise.frontend.title,
      description: t.skills.expertise.frontend.description,
      icon: "💻"
    },
    {
      title: t.skills.expertise.frameworks.title,
      description: t.skills.expertise.frameworks.description,
      icon: "🔌"
    },
    {
      title: t.skills.expertise.tools.title,
      description: t.skills.expertise.tools.description,
      icon: "⚡"
    },
    {
      title: t.skills.expertise.design.title,
      description: t.skills.expertise.design.description,
      icon: "📊"
    }
  ], [t]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate expertise cards
      gsap.fromTo(
        '.expertise-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.expertise-grid',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate technology cards
      gsap.fromTo(
        '.tech-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.technologies-grid',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [expertiseAreas, technologies]);

  return (
    <section className="competences-section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="skills-header">
          <h2>{t.skills.title}</h2>
          <p className="skills-subtitle">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="expertise-card">
              <div className="expertise-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>

        <div className="technologies-section">
          <h3 className="technologies-title">{t.skills.barsTitle}</h3>
          <div className="technologies-grid">
            {technologies.map((tech) => (
              <div key={tech.label} className="tech-card">
                <div className="tech-header">
                  <span className="tech-icon">{tech.icon}</span>
                  <h4 className="tech-label">{tech.label}</h4>
                </div>
                <p className="tech-description">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetencesDisplay;

'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';
import { useLanguage } from '../../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-photo',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-container',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.about-text-block',
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-container',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.about-value-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-values',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-header">
          <h2>{t.about.title}</h2>
          <p className="about-subtitle">{t.about.subtitle}</p>
        </div>

        <div className="about-container">
          <div className="about-photo">
            <div className="photo-frame">
              <div className="photo-placeholder">
                <span className="photo-initials">MC</span>
              </div>
              <div className="photo-badge">
                <span>👋</span>
                <span>{t.about.badge}</span>
              </div>
            </div>
          </div>

          <div className="about-text-block">
            <h3>{t.about.heading}</h3>
            <p className="about-description">{t.about.description1}</p>
            <p className="about-description">{t.about.description2}</p>

            <div className="about-info-list">
              <div className="about-info-item">
                <span className="info-icon">📍</span>
                <span>{t.about.location}</span>
              </div>
              <div className="about-info-item">
                <span className="info-icon">💼</span>
                <span>{t.about.status}</span>
              </div>
              <div className="about-info-item">
                <span className="info-icon">🎓</span>
                <span>{t.about.formation}</span>
              </div>
            </div>

            <div className="about-cta">
              <a
                href="/cv-mathieu-cocu.pdf"
                download
                className="btn-cv"
              >
                <span>📄</span>
                <span>{t.about.cvButton}</span>
              </a>
              <a
                href="#contact"
                className="btn-contact-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t.about.contactButton}
              </a>
            </div>
          </div>
        </div>

        <div className="about-values">
          {t.about.values.map((value, index) => (
            <div key={index} className="about-value-card">
              <div className="value-icon">{value.icon}</div>
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './style.css';
import heroImage from '../../assets/home.png';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const particlesRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Animate hero content
      tl.from('.hero-badge', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
      })
        .from('.hero-name', {
          y: 80,
          opacity: 0,
          duration: 1,
        }, '-=0.3')
        .from('.hero-role', {
          y: 50,
          opacity: 0,
          duration: 0.8,
        }, '-=0.6')
        .from('.hero-description', {
          y: 30,
          opacity: 0,
          duration: 0.8,
        }, '-=0.4')
        .from('.hero-cta .btn', {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
        }, '-=0.4')
        .from('.hero-stats-card', {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
        }, '-=0.5');

      // Animate hero image with floating effect
      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });

      gsap.to(imageRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      // Animate floating particles
      const particles = particlesRef.current.querySelectorAll('.particle');
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: -30 + (index * 10),
          x: -20 + (index * 15),
          duration: 3 + (index * 0.5),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2,
        });
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" ref={heroRef}>
      {/* Animated background particles */}
      <div className="hero-particles" ref={particlesRef}>
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content" ref={contentRef}>
          <div className="hero-badge">
            <span className="badge-icon">👋</span>
            <span className="badge-text">{t.hero.badge}</span>
          </div>

          <h1 className="hero-name">
            {t.hero.title}
            <span className="gradient-text"> {t.hero.titleHighlight}</span>
          </h1>

          <h2 className="hero-role">
            {t.hero.subtitle}
          </h2>

          <p className="hero-description">
            {t.hero.description}
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              <span>{t.hero.ctaPrimary}</span>
              <span className="btn-icon">→</span>
            </button>
            <button className="btn btn-secondary" onClick={scrollToContact}>
              <span>{t.hero.ctaSecondary}</span>
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stats-card">
              <div className="stats-icon">🚀</div>
              <div className="stats-content">
                <span className="stat-number">14+</span>
                <span className="stat-label">{t.hero.stats.projects}</span>
              </div>
            </div>
            <div className="hero-stats-card">
              <div className="stats-icon">💼</div>
              <div className="stats-content">
                <span className="stat-number">3+</span>
                <span className="stat-label">{t.hero.stats.experience}</span>
              </div>
            </div>
            <div className="hero-stats-card">
              <div className="stats-icon">⭐</div>
              <div className="stats-content">
                <span className="stat-number">100%</span>
                <span className="stat-label">{t.hero.stats.satisfaction}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper" ref={imageRef}>
          <div className="hero-image-bg"></div>
          <img src={heroImage} alt="Developer workspace" className="hero-image" />
          <div className="hero-image-decoration decoration-1"></div>
          <div className="hero-image-decoration decoration-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

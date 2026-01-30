import React from 'react';
import './style.css';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Portfolio</h3>
            <p className="footer-tagline">
              {t.footer.tagline}
            </p>
          </div>

          <div className="footer-links-section">
            <div className="footer-column">
              <h4>{t.footer.navigation}</h4>
              <ul>
                <li><a href="#skills">{t.nav.skills}</a></li>
                <li><a href="#projects">{t.nav.projects}</a></li>
                <li><a href="#contact">{t.nav.contact}</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>{t.footer.social}</h4>
              <ul>
                <li>
                  <a href="https://github.com/votreprofil" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:votre.email@example.com">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Portfolio. {t.footer.copyright}
          </p>
          <button onClick={scrollToTop} className="back-to-top" aria-label={t.footer.backToTop}>
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
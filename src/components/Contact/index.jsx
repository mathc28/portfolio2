import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact = () => {
  const formRef = useRef();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({
    type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Configuration EmailJS - À REMPLACER PAR VOS PROPRES IDENTIFIANTS
    // Créez un compte sur https://www.emailjs.com/
    // Puis remplacez ces valeurs par les vôtres
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: t.contact.messages.success,
        });
        setFormData({
          from_name: '',
          from_email: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: t.contact.messages.error,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-header">
          <h2>{t.contact.title}</h2>
          <p className="contact-subtitle">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>{t.contact.info.email}</h3>
              <a href="mailto:votre.email@example.com">votre.email@example.com</a>
            </div>

            <div className="info-card">
              <div className="info-icon">💼</div>
              <h3>{t.contact.info.linkedin}</h3>
              <a href="https://linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">🐙</div>
              <h3>{t.contact.info.github}</h3>
              <a href="https://github.com/votreprofil" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>{t.contact.info.location}</h3>
              <p>{t.contact.info.locationValue}</p>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="from_name">{t.contact.form.name}</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="from_email">{t.contact.form.email}</label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.contact.form.message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
              ></textarea>
            </div>

            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

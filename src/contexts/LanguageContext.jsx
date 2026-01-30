import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const translations = {
  fr: {
    // Header
    nav: {
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
    },

    // Hero
    hero: {
      badge: 'Disponible pour de nouveaux projets',
      title: 'Développeur Web',
      titleHighlight: 'Front-End',
      subtitle: 'Je transforme vos idées en expériences web exceptionnelles',
      description: 'Passionné par la création d\'interfaces modernes et performantes. Expert en React, JavaScript et animations web avec GSAP.',
      ctaPrimary: 'Découvrir mes projets',
      ctaSecondary: 'Me contacter',
      stats: {
        projects: 'Projets réalisés',
        experience: 'Années d\'expérience',
        satisfaction: 'Clients satisfaits',
      },
    },

    // Projects
    projects: {
      title: 'Mes Projets',
      subtitle: 'Découvrez une sélection de mes réalisations récentes',
      filterAll: 'Tous',
      viewProject: 'Voir le projet',
      technologies: 'Technologies utilisées',
      close: 'Fermer',
    },

    // Skills
    skills: {
      title: 'Mes Compétences',
      subtitle: 'Un aperçu de mes expertises techniques et outils maîtrisés',
      expertise: {
        frontend: {
          title: 'Développement Front-End',
          description: 'Création d\'interfaces utilisateur réactives et performantes avec les technologies web modernes.',
        },
        frameworks: {
          title: 'Frameworks & Libraries',
          description: 'Maîtrise de React, Vue.js et autres frameworks JavaScript pour des applications robustes.',
        },
        tools: {
          title: 'Outils & Workflow',
          description: 'Git, VS Code, NPM/Yarn et outils de développement moderne pour un workflow efficace.',
        },
        design: {
          title: 'Design & UX',
          description: 'Sensibilité au design et aux principes UX pour créer des expériences utilisateur optimales.',
        },
      },
      barsTitle: 'Technologies Maîtrisées',
    },

    // Contact
    contact: {
      title: 'Contactez-moi',
      subtitle: 'Une question, un projet ? N\'hésitez pas à me contacter',
      form: {
        name: 'Nom',
        email: 'Email',
        message: 'Message',
        submit: 'Envoyer',
        sending: 'Envoi en cours...',
      },
      info: {
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        location: 'Localisation',
        locationValue: 'France',
      },
      messages: {
        success: 'Message envoyé avec succès ! Je vous répondrai bientôt.',
        error: 'Une erreur est survenue. Veuillez réessayer.',
      },
    },

    // Footer
    footer: {
      tagline: 'Développeur Web Front-End passionné par la création d\'expériences web modernes.',
      navigation: 'Navigation',
      social: 'Réseaux',
      copyright: 'Tous droits réservés. Fait avec React & GSAP.',
      backToTop: 'Retour en haut',
    },
  },

  en: {
    // Header
    nav: {
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },

    // Hero
    hero: {
      badge: 'Available for new projects',
      title: 'Web Developer',
      titleHighlight: 'Front-End',
      subtitle: 'I transform your ideas into exceptional web experiences',
      description: 'Passionate about creating modern and performant interfaces. Expert in React, JavaScript and web animations with GSAP.',
      ctaPrimary: 'Discover my projects',
      ctaSecondary: 'Contact me',
      stats: {
        projects: 'Projects completed',
        experience: 'Years of experience',
        satisfaction: 'Client satisfaction',
      },
    },

    // Projects
    projects: {
      title: 'My Projects',
      subtitle: 'Discover a selection of my recent work',
      filterAll: 'All',
      viewProject: 'View project',
      technologies: 'Technologies used',
      close: 'Close',
    },

    // Skills
    skills: {
      title: 'My Skills',
      subtitle: 'An overview of my technical expertise and mastered tools',
      expertise: {
        frontend: {
          title: 'Front-End Development',
          description: 'Creating responsive and performant user interfaces with modern web technologies.',
        },
        frameworks: {
          title: 'Frameworks & Libraries',
          description: 'Proficient in React, Vue.js and other JavaScript frameworks for robust applications.',
        },
        tools: {
          title: 'Tools & Workflow',
          description: 'Git, VS Code, NPM/Yarn and modern development tools for an efficient workflow.',
        },
        design: {
          title: 'Design & UX',
          description: 'Design sensitivity and UX principles to create optimal user experiences.',
        },
      },
      barsTitle: 'Mastered Technologies',
    },

    // Contact
    contact: {
      title: 'Contact Me',
      subtitle: 'Got a question or a project? Feel free to reach out',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send',
        sending: 'Sending...',
      },
      info: {
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        location: 'Location',
        locationValue: 'France',
      },
      messages: {
        success: 'Message sent successfully! I\'ll get back to you soon.',
        error: 'An error occurred. Please try again.',
      },
    },

    // Footer
    footer: {
      tagline: 'Front-End Web Developer passionate about creating modern web experiences.',
      navigation: 'Navigation',
      social: 'Social',
      copyright: 'All rights reserved. Made with React & GSAP.',
      backToTop: 'Back to top',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

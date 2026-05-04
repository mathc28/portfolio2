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
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
    },

    // About
    about: {
      title: 'À propos',
      subtitle: 'Quelques mots sur mon parcours et ma façon de travailler',
      badge: 'Disponible en freelance',
      heading: 'Développeur web passionné par les interfaces qui marquent',
      description1: 'Je m\'appelle Mathieu, développeur web front-end basé en France. Après une reconversion professionnelle, j\'ai suivi la formation OpenClassrooms et j\'ai rapidement développé une vraie appétence pour la création d\'interfaces modernes, accessibles et performantes.',
      description2: 'Aujourd\'hui en freelance, j\'accompagne des clients de toute taille — des indépendants aux PME — dans la création et la refonte de leurs sites web, avec une attention particulière portée au design, au SEO et à l\'expérience utilisateur.',
      location: 'France',
      status: 'Freelance — disponible pour de nouveaux projets',
      formation: 'Formation OpenClassrooms — Développeur Web',
      cvButton: 'Télécharger mon CV',
      contactButton: 'Me contacter',
      values: [
        {
          icon: '🎯',
          title: 'Rigueur',
          description: 'Code propre, respect des délais et attention aux détails à chaque étape du projet.',
        },
        {
          icon: '🚀',
          title: 'Performance',
          description: 'Sites rapides, bien référencés et optimisés pour tous les appareils.',
        },
        {
          icon: '🤝',
          title: 'Communication',
          description: 'Un point de contact clair tout au long du projet, de la conception à la livraison.',
        },
        {
          icon: '✨',
          title: 'Créativité',
          description: 'Des interfaces pensées pour l\'utilisateur, avec un vrai sens du design.',
        },
      ],
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
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },

    // About
    about: {
      title: 'About Me',
      subtitle: 'A few words about my background and the way I work',
      badge: 'Available for freelance',
      heading: 'Web developer passionate about interfaces that make an impact',
      description1: 'My name is Mathieu, a front-end web developer based in France. After a career change, I completed the OpenClassrooms program and quickly developed a real passion for building modern, accessible, and performant interfaces.',
      description2: 'Now working as a freelancer, I help clients of all sizes — from solo entrepreneurs to SMBs — create and redesign their websites, with a strong focus on design, SEO, and user experience.',
      location: 'France',
      status: 'Freelance — available for new projects',
      formation: 'OpenClassrooms — Web Developer Program',
      cvButton: 'Download my CV',
      contactButton: 'Contact me',
      values: [
        {
          icon: '🎯',
          title: 'Precision',
          description: 'Clean code, deadlines respected, and attention to detail at every step.',
        },
        {
          icon: '🚀',
          title: 'Performance',
          description: 'Fast, SEO-friendly sites optimised for every device.',
        },
        {
          icon: '🤝',
          title: 'Communication',
          description: 'A clear point of contact throughout the project, from design to delivery.',
        },
        {
          icon: '✨',
          title: 'Creativity',
          description: 'Interfaces designed with the user in mind, with a genuine sense of design.',
        },
      ],
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

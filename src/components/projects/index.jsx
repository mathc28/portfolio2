import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { useLanguage } from "../../contexts/LanguageContext";
import PhotoLapilli from "../../assets/photo-projets/lapilli.webp";
import PhotoPortfolio from "../../assets/photo-projets/portfolio.webp";
import PhotoHotdog from "../../assets/photo-projets/fabrik.webp";
import PhotoArgentbank from "../../assets/photo-projets/projet-7.webp";
import PhotoKasa from "../../assets/photo-projets/kasa.webp";
import PhotoTodo from "../../assets/photo-projets/todo-list.webp";
import Photo724 from "../../assets/photo-projets/projet-10.webp";
import PhotoSeoportfolio from "../../assets/photo-projets/projet-9.webp";
import PhotoQwanta from "../../assets/photo-projets/Qwenta.webp";
import PhotoArchiportfolio from "../../assets/photo-projets/archi portfolio.webp";
import PhotoPrint from "../../assets/photo-projets/projet-4.webp";
import PhotoOhmyfood from "../../assets/photo-projets/projet-3.webp";
import PhotoBooki from "../../assets/photo-projets/projet-2.webp";
import PhotoRc from "../../assets/photo-projets/projet-1.webp";

const allProjects = [
    {
      title: "Portfolio",
      minidescription:"Mon portfolio personnel",
      description: "Mon portfolio personnel. J'ai crée ce nouveau protfolio pour ma nouvelle fonction de freelance.",
      image: PhotoPortfolio,
      link: "https://mathcoc.vercel.app",
      technologies: ["React", "CSS"],
    },
    {
      title: "Domaine Lapilli",
      minidescription:"Création d'un site vitrine",
      description: "Création d'un site vitrine pour le jeune domaine Lapilli, un domaine situé en auvergne producteur de vin bio. La mission : un site vitrine simple et épuré  ",
      image: PhotoLapilli,
      link: "https://domaine-lapilli.com",
      technologies: ["HTML", "CSS"],
    },
    {
      title: "La Fabrique du Hot-Dog",
      minidescription:"Audit SEO + refonte",
      description: "Audit SEO du site web de la frabrique du hot dog + refonte visuelle du site web et de lapartie responsive ",
      image: PhotoHotdog,
      link: "https://www.lafabriqueduhotdog.com",
      technologies: ["Google Lighthouse", "Wave", "Wix"],
    },
    {
      title: "Todo List",
      minidescription: 'To-do list',
      description: 'Première prise en main de vue.js avec la création de cette petite To-do list',
      image: PhotoTodo,
      link: "https://mc-todolist.vercel.app",      
      technologies: ["vue.js", "CSS"],

    },
    {
      title: "Argent Bank",
      minidescription:"Interface Bancaire",
      description: "App React/Redux avec authentification.",
      image: PhotoArgentbank,
      link: "https://mc-argent-bank.vercel.app/",
      technologies: ["React", "Redux", "scs"],
    },
    {
      title: "Kasa",
      minidescription:"Mon portfolio personnel",
      description: "Projet React avancé.",
      image: PhotoKasa,
      link: "https://mc-kasa.vercel.app",
      technologies: ["React", "CSS"],
    },
    {
      title: "724 Events",
      minidescription: "Debug d'un site web d'évènementiel",
      description: "débugger et finaliser le développement d'un site one-page",
      image: Photo724,
      link: "https://mc-724events.vercel.app",
      technologies: ["Chrome DevTools", "Javascipt"],

    },
    {
      title: "Portfolio Nina Carducci ",
      minidescription: 'Mission SEO sur un portfolio',
      description: 'Optimisation du référencement d’un portfolio de photographe avec amélioration de sa performance ainsi que de son accessibilité.',
      image: PhotoSeoportfolio,
      link: "https://mc-ninacarducci.vercel.app/",
      technologies: ["Google Ligthouse", "Wave"],

    },
    {
      title: "Menu Maker by Kwanta",
      minidescription:"Plannification de création de site web",
      description: "Optimisation SEO et accessibilité.",
      image: PhotoQwanta,
      link: "https://mc-printit.vercel.app",
      technologies: ["React", "CSS"],
    },
    {
      title: "Portfolio architecte intérieur",
      minidescription:"Dynamisation portfolio architecte intérieur",
      description: "Utilisation de Javascript pour dynamiser une page statique. Création d'une page de connexion administrateur ainsi que la modale permettant d'uploader de nouveaux projets.",
      image: PhotoArchiportfolio,
      link: "https://mathcoc.vercel.app",
      technologies: ["Javascript", "CSS"],
    },
    {
      title: "Print-it",
      minidescription:"Création carrousel dynamique",
      description: "React + Node.js.",
      image: PhotoPrint,
      link: "#",
      technologies: ["React", "CSS"],
    },
    {
      title: "Oh My Food Paris",
      minidescription:"Créstion d'un site pour restaurateurs",
      description: "Développement d'un site “mobile first” qui répertorie les menus de restaurants gastronomiques.",
      image: PhotoOhmyfood,
      link: "https://mc-printit.vercel.app",
      technologies: ["HTML", "SASS"],
    },
    {
      title: "Booki",
      minidescription: "intégration d'une interface web",
      description: "Intégration de la maquette Figma de site de Booki, un site de réservation en ligne d'hébergement.",
      image: PhotoBooki,
      link: "https://mc-booki.vercel.app",
      technologies: ["HTML", "CSS"],
    },
    {
      title: "Riding cities",
      minidescription: "Mise à jour de site web",
      description: "mise à jour la page Internet de Riding Cities, une association sportive qui promeut le skate en région.",
      image: PhotoRc,
      link: "https://mc-riding-cities.vercel.app/",
      technologies: ["HTML", "CSS"],
    },
  ];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const lastCardRef = useRef(null);
  const { t } = useLanguage();

  const allTechnologies = ['all', ...new Set(allProjects.flatMap(p => p.technologies))];

  const filteredProjects = filter === 'all'
    ? allProjects
    : allProjects.filter(p => p.technologies.includes(filter));

  useEffect(() => {
    setVisibleCount(6);
  }, [filter]);

  useEffect(() => {
    if (!lastCardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoading && visibleCount < filteredProjects.length) {
          setIsLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + 3, filteredProjects.length));
            setIsLoading(false);
          }, 800);
        }
      },
      { threshold: 1.0 }
    );

    const current = lastCardRef.current;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, [visibleCount, isLoading, filteredProjects.length]);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2>{t.projects.title}</h2>
          <p className="projects-subtitle">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="filter-buttons">
          {allTechnologies.slice(0, 8).map((tech) => (
            <button
              key={tech}
              className={`filter-btn ${filter === tech ? 'active' : ''}`}
              onClick={() => setFilter(tech)}
            >
              {tech === 'all' ? t.projects.filterAll : tech}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
          <div
            key={index}
            className="project-card"
            ref={index === visibleCount - 1 ? lastCardRef : null}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <button
                  className="view-project-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  {t.projects.viewProject}
                </button>
              </div>
            </div>
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.minidescription}</p>
              <div className="project-tech-tags">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label={t.projects.close}>×</button>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            <p>{selectedProject.description}</p>
            {selectedProject.technologies && (
              <div className="tech-stack">
                <h4>{t.projects.technologies} :</h4>
                <ul>
                  {selectedProject.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-link">
              {t.projects.viewProject}
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
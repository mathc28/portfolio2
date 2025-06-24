import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import PhotoLapilli from "../../assets/photo-projets/lapilli.webp";
import PhotoPortfolio from "../../assets/photo-projets/portfolio.webp";
import PhotoHotdog from "../../assets/photo-projets/fabrik.webp";
import PhotoArgentbank from "../../assets/photo-projets/projet-7.webp";
import PhotoKasa from "../../assets/photo-projets/kasa.webp";
import PhotoTodo from "../../assets/photo-projets/todo-list.webp";
import Photo724 from "../../assets/photo-projets/projet-10.webp";
import PhotoSeoportfolio from "../../assets/photo-projets/projet-9.webp"





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
      image: PhotoPortfolio,
      link: "https://mc-printit.vercel.app",
      technologies: ["React", "CSS"],
    },
    {
      title: "Portfolio",
      minidescription:"Mon portfolio personnel",
      description: "Mon portfolio personnel.",
      image: PhotoPortfolio,
      link: "https://mathcoc.vercel.app",
      technologies: ["React", "CSS"],
    },
    {
      title: "Site E-commerce",
      minidescription:"Mon portfolio personnel",
      description: "React + Node.js.",
      image: PhotoPortfolio,
      link: "#",
      technologies: ["React", "CSS"],
    },
    {
      title: "OhMyFood Paris",
      minidescription:"Mon portfolio personnel",
      description: "Site mobile first avec animations.",
      image: PhotoPortfolio,
      link: "https://mc-ohmyfood.vercel.app",
      technologies: ["React", "CSS"],
    },
    {
      title: "Kasa",
      minidescription:"Mon portfolio personnel",
      description: "Projet React avancé.",
      image: PhotoPortfolio,
      link: "https://mc-kasa.vercel.app",
      technologies: ["React", "CSS"],
    },
    {
      title: "Argent Bank",
      minidescription:"Mon portfolio personnel",
      description: "App React/Redux avec authentification.",
      image: PhotoPortfolio,
      link: "https://mc-argent-bank.vercel.app/",
      technologies: ["React", "CSS"],
    },
    {
      title: "Print it",
      minidescription:"Mon portfolio personnel",
      description: "Optimisation SEO et accessibilité.",
      image: PhotoPortfolio,
      link: "https://mc-printit.vercel.app",
      technologies: ["React", "CSS"],
    },
  ];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const lastCardRef = useRef(null);

  useEffect(() => {
    if (!lastCardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoading && visibleCount < allProjects.length) {
          setIsLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + 3, allProjects.length));
            setIsLoading(false);
          }, 800);
        }
      },
      { threshold: 1.0 }
    );

    const current = lastCardRef.current;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, [visibleCount, isLoading]);

  return (
    <section id="projects" className="projects">
      <h2>Mes Projets</h2>
      <p className="skills-subtitle">Des projets réels pour des besoins concrets.</p>

      <div className="projects-grid">
        {allProjects.slice(0, visibleCount).map((project, index) => (
          <div
            key={index}
            className="project-card"
            ref={index === visibleCount - 1 ? lastCardRef : null}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.minidescription}</p>
              <button onClick={() => setSelectedProject(project)}>
                Voir le projet →
              </button>
            </div>
          </div>
        ))}
      </div>

      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            <p>{selectedProject.description}</p>
            {selectedProject.technologies && (
              <div className="tech-stack">
                <h4>Technologies utilisées :</h4>
                <ul>
                  {selectedProject.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-link">
              Accéder au site
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
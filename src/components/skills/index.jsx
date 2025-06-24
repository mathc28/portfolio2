import React from "react";
import "./style.css";

const CompetencesDisplay = () => {
  const developmentSkills = [
    { label: "HTML / CSS", level: 85 },
    { label: "JavaScript / React", level: 70 },
    { label: "Responsive / UX", level: 65},
    { label: "WordPress / PHP", level: 60 },
    { label: "TypeScript/ Next.js", level: 30 },
    { label: "Figma", level: 25 },
  ];

  const renderSkillBar = (skill) => (
    <div className="skill-bar" key={skill.label}>
      <div className="label">{skill.label}</div>
      <div className="bar">
        <div
          className="fill"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section className="competences-section" id="skills">
      <div className="title-section">
        <h2 className="skills-title">Mes compétences</h2>
        <p className="skills-subtitle">
          De la technique à la créativité, toutes les compétences pour faire la différence.        
        </p>
      </div>
      <div className="left">
        <h2>Domaines de compétences :</h2>
        <ul>
          <li><strong>Développement Front-End</strong><br /> HTML5, CSS, JavaScript, React.js, responsive design, performance et accessibilité.</li>
          <li><strong>Intégration WordPress sur-mesure</strong><br />Thèmes personnalisés, WooCommerce, SEO</li>
          <li><strong>Optimisation Web</strong><br />SEO, performance Lighthouse, accessibilité, audit de code.</li>
          <li><strong>Gestion de projets digitaux</strong><br />Conception, suivi de projet, accompagnement client, refonte & maintenance.</li>
        </ul>
      </div>
      <div className="right">
        <h2>Compétences en développement :</h2>
        {developmentSkills.map(renderSkillBar)}
      </div>
    </section>
  );
};

export default CompetencesDisplay;

import React from 'react';
import './style.css';

function BandeauDefilant() {
  // Définition du texte directement dans le composant
  const texteFixe = "DÉVELOPPEMENT WEB -- FORMAT RESPONSIVE -- GESTION DE PROJETS -- RÉFÉRENCEMENT NATUREL -- SOCIAL MEDIA -- STRATÉGIE DIGITALE --";

  // Le texte est répété pour assurer un défilement continu
  const texteRepete = `${texteFixe}\u00A0\u00A0\u00A0${texteFixe}`;

  return (
    <div className="bandeau-container">
      <div className="bandeau-texte">
        {texteRepete}
      </div>
    </div>
  );
}

export default BandeauDefilant;

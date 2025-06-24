// Importation des composants et des éléments nécessaires depuis React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Accueil from "../Pages/home";


/**
 * Configuration des différentes routes de l'application
 */
function Webrouter (){
  return <Routes>
    <Route path="/" element={<Accueil/>} />
  </Routes>
}

export default Webrouter
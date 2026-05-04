// Importation des différentes pages de l'application
import Header from "./components/header/index2";
import Footer from "./components/footer"
import Router from "./router";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Header />
        <Router />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

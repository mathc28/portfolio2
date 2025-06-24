// Importation des différentes pages de l'application
import Header from "./components/header/index2";
import Footer from "./components/footer"
import Router from "./router";

function App() {
  return (
    <div className="app">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;

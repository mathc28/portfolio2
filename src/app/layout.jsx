import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/header';
import Footer from '../components/footer';
import './globals.css';

export const metadata = {
  title: 'Mathieu Cocu — Développeur Web Front-End',
  description: 'Portfolio de Mathieu Cocu, développeur web front-end freelance spécialisé React, JavaScript et WordPress.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <LanguageProvider>
          <div className="app">
            <Header />
            {children}
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

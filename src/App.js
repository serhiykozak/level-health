import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import CaseStudiesPage from './components/pages/CaseStudiesPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import ProcessPage from './components/pages/ProcessPage';

const App = () => {
  const [activePage, setActivePage] = useState('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <HomePage setActivePage={setActivePage} />;
      case 'Services':
        return <ServicesPage setActivePage={setActivePage} />;
      case 'Cases':
        return <CaseStudiesPage setActivePage={setActivePage} />;
      case 'About':
        return <AboutPage setActivePage={setActivePage} />;
      case 'Contact':
        return <ContactPage />;
      case 'Process':
        return <ProcessPage setActivePage={setActivePage} />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {renderPage()}
      <footer className="bg-blue-900 text-white p-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 <span className="font-bold">levɘl</span> health navigation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { Route } from 'lucide-react';
import Navbar from './components/layout/Navbar';
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import CaseStudiesPage from './components/pages/CaseStudiesPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import ProcessPage from './components/pages/ProcessPage';
import ThankYouPage from './components/pages/ThankYouPage';
import DebugPage from './components/pages/DebugPage';

const App = () => {
  const [activePage, setActivePage] = useState('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Debug':
        return <DebugPage setActivePage={setActivePage} />;
      case 'Home':
        return <HomePage setActivePage={setActivePage} />;
      case 'Services':
        return <ServicesPage setActivePage={setActivePage} />;
      case 'Cases':
        return <CaseStudiesPage setActivePage={setActivePage} />;
      case 'About':
        return <AboutPage setActivePage={setActivePage} />;
      case 'Contact':
        return <ContactPage setActivePage={setActivePage} />;
      case 'Process':
        return <ProcessPage setActivePage={setActivePage} />;
      case 'ThankYou':
        return <ThankYouPage setActivePage={setActivePage} />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {renderPage()}
      <footer className="bg-blue-50 p-4 mt-12 shadow-sm">
        <div className="container mx-auto text-center">
          <p className="text-blue-900 flex items-center justify-center space-x-1">
            <span>&copy; 2024</span>
            <Route className="w-4 h-4 text-blue-600 transform rotate-[130deg] scale-y-[-1]" />
            <span><span className="font-bold">levɘl</span> health navigation. All rights reserved.</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

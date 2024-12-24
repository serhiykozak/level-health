import React, { useState } from 'react';
import Layout from './components/layout/Layout';
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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePageChange = (newPage) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActivePage(newPage);
      setIsTransitioning(false);
    }, 300);
  };

  const renderPage = () => {
    const props = { 
      setActivePage: handlePageChange,
      className: `transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`
    };

    switch (activePage) {
      case 'Debug':
        return <DebugPage {...props} />;
      case 'Home':
        return <HomePage {...props} />;
      case 'Services':
        return <ServicesPage {...props} />;
      case 'Cases':
        return <CaseStudiesPage {...props} />;
      case 'About':
        return <AboutPage {...props} />;
      case 'Contact':
        return <ContactPage {...props} />;
      case 'Process':
        return <ProcessPage {...props} />;
      case 'ThankYou':
        return <ThankYouPage {...props} />;
      default:
        return <HomePage {...props} />;
    }
  };

  return (
    <Layout activePage={activePage} setActivePage={handlePageChange}>
      <div className="min-h-screen">
        {renderPage()}
      </div>
    </Layout>
  );
};

export default App;

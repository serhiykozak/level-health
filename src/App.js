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
    <Layout activePage={activePage} setActivePage={setActivePage}>
      {renderPage()}
    </Layout>
  );
};

export default App;

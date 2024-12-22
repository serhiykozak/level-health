import React, { useState } from 'react';
import { Route, Bug } from 'lucide-react';
import Navbar from './components/layout/Navbar';
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import CaseStudiesPage from './components/pages/CaseStudiesPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import ProcessPage from './components/pages/ProcessPage';
import ThankYouPage from './components/pages/ThankYouPage';
import DebugPage from './components/pages/DebugPage';

// Add Google Fonts
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Onest:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Supreme:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=General+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Hauora:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Switzer:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Aeonik:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Chillax:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Mona+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Neue+Montreal:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roobert:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Faktum:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Gilroy:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Proxima+Nova:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Sofia+Pro:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=TT+Commons:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Untitled+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Visuelt:wght@400;600;700&display=swap');
`;

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
      <style>{fontStyles}</style>
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

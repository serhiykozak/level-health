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
`;

const StyleTester = () => {
  const colorSchemes = [
    {
      name: 'Current Blue',
      bg: 'bg-blue-50',
      text: 'text-blue-900',
      accent: 'text-blue-600'
    },
    {
      name: 'Navy',
      bg: 'bg-[#F0F4F8]',
      text: 'text-[#1B365D]',
      accent: 'text-[#2B4F8B]'
    },
    {
      name: 'Teal',
      bg: 'bg-teal-50',
      text: 'text-teal-900',
      accent: 'text-teal-600'
    }
  ];

  const fonts = [
    { name: 'Montserrat', desc: 'Professional, modern, and clean', style: 'geometric' },
    { name: 'Open Sans', desc: 'Friendly, readable, and versatile', style: 'humanist' },
    { name: 'Raleway', desc: 'Elegant, contemporary, and distinctive', style: 'geometric' },
    { name: 'Source Sans Pro', desc: 'Clear, approachable, and balanced', style: 'humanist' },
    { name: 'Inter', desc: 'Modern, neutral, and highly legible', style: 'geometric' },
    { name: 'DM Sans', desc: 'Geometric, friendly, and tech-forward', style: 'geometric' },
    { name: 'Outfit', desc: 'Contemporary, minimal, and sophisticated', style: 'geometric' },
    { name: 'Quicksand', desc: 'Rounded, friendly, and modern', style: 'geometric' },
    { name: 'Work Sans', desc: 'Clean, professional, and versatile', style: 'geometric' },
    { name: 'Plus Jakarta Sans', desc: 'Modern, premium, and refined', style: 'geometric' },
    { name: 'Manrope', desc: 'Technical, precise, and contemporary', style: 'geometric' },
    { name: 'Red Hat Display', desc: 'Professional, clear, and approachable', style: 'humanist' }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Font Options</h2>
        
        {/* Font Section */}
        <section className="mb-12">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <p className="text-blue-900">
              <span className="font-bold">Currently Using: </span>
              System default font (San Francisco on macOS, Segoe UI on Windows)
            </p>
          </div>

          {/* Font Categories */}
          <div className="mb-8 flex gap-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Geometric Sans: Clean, modern, tech-forward
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Humanist Sans: Friendly, approachable, readable
            </span>
          </div>

          <div className="space-y-12">
            {fonts.map(font => (
              <div key={font.name} className="space-y-6">
                <div className="p-6 bg-blue-50 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-xl font-bold text-blue-900" style={{ fontFamily: font.name }}>
                      {font.name}
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      font.style === 'geometric' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {font.style === 'geometric' ? 'Geometric' : 'Humanist'}
                    </span>
                  </div>
                  <p className="text-sm text-blue-800 mb-4">{font.desc}</p>
                  <div className="space-y-6" style={{ fontFamily: font.name }}>
                    {colorSchemes.map(scheme => (
                      <div key={scheme.name} className={`${scheme.bg} p-4 rounded-lg`}>
                        <div className="space-y-3">
                          <p className={`text-4xl font-bold ${scheme.text}`}>
                            levɘl health navigation
                          </p>
                          <p className={`text-2xl ${scheme.accent}`}>
                            Your Health Journey, Guided with Care
                          </p>
                          <p className={`text-base ${scheme.text}`}>
                            Expert health advocacy and care navigation services tailored to your needs. 
                            The quick brown fox jumps over the lazy dog.
                          </p>
                          <div className={`flex gap-6 ${scheme.text}`}>
                            <span className="font-normal">Regular Weight</span>
                            <span className="font-semibold">Semibold Weight</span>
                            <span className="font-bold">Bold Weight</span>
                          </div>
                          <div className="flex gap-4 mt-4">
                            <button className={`${scheme.accent.replace('text-', 'bg-')} text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity`}>
                              Primary Button
                            </button>
                            <button className={`border-2 ${scheme.accent.replace('text-', 'border-')} ${scheme.accent} px-4 py-2 rounded-full hover:opacity-90 transition-opacity`}>
                              Secondary Button
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

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
      <StyleTester />
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

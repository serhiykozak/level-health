import React, { useState, useEffect } from 'react';
import { Heart, Home, Phone, Info, FileText, Navigation, Route, Bug, Menu, X } from 'lucide-react';

const Navbar = ({ activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: 'Debug', label: 'UI Tester', icon: Bug },
    { name: 'Home', icon: Home },
    { name: 'About', icon: Info },
    { name: 'Services', icon: Heart },
    { name: 'Process', icon: Navigation },
    { name: 'Cases', icon: FileText },
    { name: 'Contact', icon: Phone }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (pageName) => {
    setActivePage(pageName);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-blue-50/95 backdrop-blur-sm shadow-md' : 'bg-blue-50 shadow-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => handleNavigation('Home')}
            className="flex items-center space-x-2 text-xl text-blue-900 cursor-pointer hover:opacity-80 transition-all duration-300 transform hover:scale-105"
          >
            <Route className="w-6 h-6 text-blue-600 transform rotate-[130deg] scale-y-[-1] ml-1" />
            <div className="whitespace-nowrap">
              <span className="font-bold">levɘl</span> health navigation
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map(item => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.name)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-all duration-300 
                  ${activePage === item.name 
                    ? 'bg-blue-100 text-blue-900 shadow-sm scale-105' 
                    : 'text-blue-800 hover:bg-blue-100 hover:scale-105'
                  }`}
              >
                <item.icon size={16} className={`transition-transform duration-300 ${
                  activePage === item.name ? 'scale-110' : ''
                }`} />
                <span>{item.label || item.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-blue-900 hover:bg-blue-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {menuItems.map(item => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.name)}
                className={`flex items-center space-x-2 w-full px-4 py-3 rounded-lg transition-all duration-300 
                  ${activePage === item.name 
                    ? 'bg-blue-100 text-blue-900' 
                    : 'text-blue-800 hover:bg-blue-100'
                  }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label || item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/* Add this to your CSS file (e.g., index.css):
@layer utilities {
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
*/ 
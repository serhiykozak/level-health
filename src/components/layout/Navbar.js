import React, { useState, useEffect } from 'react';
import { Heart, Home, Phone, Info, FileText, Navigation, Route, Bug, Menu, X } from 'lucide-react';
import Container from '../common/Container';
import Text from '../common/Text';
import theme from '../../theme';

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
    if (pageName === activePage) return;
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActivePage(pageName);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-${theme.zIndex.navbar} transition-all duration-300 ${
        isScrolled ? 'bg-blue-50/95 backdrop-blur-sm shadow-md' : 'bg-blue-50 shadow-sm'
      }`}
      style={{ height: theme.layout.navbar.height }}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('Home')}
            className="flex items-center space-x-2 text-xl text-blue-900 hover:opacity-80 transition-opacity duration-300"
          >
            <Route className="w-6 h-6 text-blue-600 transform rotate-[130deg] scale-y-[-1] ml-1" />
            <div className="whitespace-nowrap">
              <span className="font-bold">levɘl</span> health navigation
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map(item => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.name)}
                className={`flex items-center space-x-1 px-3 py-2 rounded transition-all duration-300 whitespace-nowrap ${
                  activePage === item.name 
                    ? 'bg-blue-100 text-blue-900' 
                    : 'text-blue-800 hover:bg-blue-100'
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
        <div 
          className={`md:hidden fixed left-0 right-0 top-16 transition-all duration-300 ease-in-out overflow-hidden bg-blue-50/95 backdrop-blur-sm shadow-md ${
            isMenuOpen ? 'opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{
            transitionProperty: 'max-height, opacity',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            maxHeight: isMenuOpen ? '100vh' : '0'
          }}
        >
          <Container>
            <div className="py-4 space-y-2 pb-6">
              {menuItems.map(item => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.name)}
                  className={`flex items-center space-x-2 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    activePage === item.name 
                      ? 'bg-blue-100 text-blue-900' 
                      : 'text-blue-800 hover:bg-blue-100'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label || item.name}</span>
                </button>
              ))}
            </div>
          </Container>
        </div>
      </Container>
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
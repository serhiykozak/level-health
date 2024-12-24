import React from 'react';
import Navbar from './Navbar';
import { Route, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import Text from '../common/Text';
import theme from '../../theme';

const Layout = ({ children, activePage, setActivePage }) => {
  const quickLinks = [
    { name: 'Home', onClick: () => setActivePage('Home') },
    { name: 'About', onClick: () => setActivePage('About') },
    { name: 'Services', onClick: () => setActivePage('Services') },
    { name: 'Process', onClick: () => setActivePage('Process') },
    { name: 'Case Studies', onClick: () => setActivePage('Cases') },
    { name: 'Contact', onClick: () => setActivePage('Contact') }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow pt-16">
        <div className="overflow-hidden">
          {children}
        </div>
      </main>
      <footer className="bg-blue-50 pt-16 pb-8 mt-12 shadow-sm">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-xl text-blue-900">
                <Route className="w-6 h-6 text-blue-600 transform rotate-[130deg] scale-y-[-1]" />
                <div className="whitespace-nowrap">
                  <span className="font-bold">levɘl</span> health navigation
                </div>
              </div>
              <Text color="gray-600">
                Helping you navigate your healthcare journey with confidence.
              </Text>
              <div className="flex space-x-4">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    aria-label={name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <Text variant="h3" className="mb-4" color="blue-900">Quick Links</Text>
              <ul className="space-y-2">
                {quickLinks.map(({ name, onClick }) => (
                  <li key={name}>
                    <button
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        onClick();
                      }}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-1 group"
                    >
                      <span>{name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div>
              <Text variant="h3" className="mb-4" color="blue-900">Contact Info</Text>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:xxxx@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>xxxx@gmail.com</span>
                  </a>
                </li>
                <li>
                  <div className="text-gray-600 flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Contact us to schedule</span>
                  </div>
                </li>
                <li>
                  <div className="text-gray-600 flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Serving clients worldwide</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <Text variant="h3" className="mb-4" color="blue-900">Stay Updated</Text>
              <Text color="gray-600" className="mb-4">
                Subscribe to our newsletter for healthcare navigation tips and updates.
              </Text>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setActivePage('Contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-blue-100 pt-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 text-gray-600">
                <span>&copy; {new Date().getFullYear()}</span>
                <Route className="w-4 h-4 text-blue-600 transform rotate-[130deg] scale-y-[-1]" />
                <span><span className="font-bold">levɘl</span> health navigation. All rights reserved.</span>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Layout; 
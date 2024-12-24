import React from 'react';
import { Route, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import Text from '../common/Text';
import Button from '../common/Button';
import theme from '../../theme';

const Footer = ({ setActivePage }) => {
  const quickLinks = [
    { name: 'Home', onClick: () => setActivePage('Home') },
    { name: 'About', onClick: () => setActivePage('About') },
    { name: 'Services', onClick: () => setActivePage('Services') },
    { name: 'Process', onClick: () => setActivePage('Process') },
    { name: 'Case Studies', onClick: () => setActivePage('Cases') },
    { name: 'Contact', onClick: () => setActivePage('Contact') }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', ariaLabel: 'Visit our Facebook page' },
    { name: 'Twitter', icon: Twitter, href: '#', ariaLabel: 'Follow us on Twitter' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', ariaLabel: 'Connect with us on LinkedIn' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'xxxx@gmail.com', href: 'mailto:xxxx@gmail.com' },
    { icon: Phone, text: 'Contact us to schedule' },
    { icon: MapPin, text: 'Serving clients worldwide' }
  ];

  return (
    <footer className="bg-blue-50 pt-16 pb-8 mt-auto shadow-sm">
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
              {socialLinks.map(({ name, icon: Icon, href, ariaLabel }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300 hover:scale-110 transform"
                  aria-label={ariaLabel}
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
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <Text variant="h3" className="mb-4" color="blue-900">Contact Info</Text>
            <ul className="space-y-3">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  {href ? (
                    <a 
                      href={href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>{text}</span>
                    </a>
                  ) : (
                    <div className="text-gray-600 flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span>{text}</span>
                    </div>
                  )}
                </li>
              ))}
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
              icon={ArrowRight}
              iconPosition="right"
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
  );
};

export default Footer; 
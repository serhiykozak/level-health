import React from 'react';
import { Home, Phone, Users, FileText, Route, Bug } from 'lucide-react';

const Navbar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { id: 'Debug', label: 'UI Tester', icon: Bug },
    { id: 'Home', label: 'Home', icon: Home },
    { id: 'Services', label: 'Services', icon: Route },
    { id: 'Cases', label: 'Case Studies', icon: FileText },
    { id: 'About', label: 'About', icon: Users },
    { id: 'Contact', label: 'Contact', icon: Phone },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0 flex items-center">
              <Route className="h-8 w-8 text-blue-600 transform rotate-[130deg] scale-y-[-1]" />
              <span className="ml-2 text-xl font-bold text-blue-900">
                lev<span className="transform scale-x-[-1] inline-block">e</span>l
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
                    ${activePage === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  <item.icon className="h-4 w-4 mr-1.5" />
                  {item.label}
                </button>
              ))}
            </div>
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
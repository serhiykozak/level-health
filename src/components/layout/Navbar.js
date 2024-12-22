import React from 'react';
import { Heart, Home, Phone, Info, FileText, Navigation, Route } from 'lucide-react';

const Navbar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: Info },
    { name: 'Services', icon: Heart },
    { name: 'Process', icon: Navigation },
    { name: 'Cases', icon: FileText },
    { name: 'Contact', icon: Phone }
  ];

  return (
    <nav className="bg-blue-50 p-4 shadow-sm">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div 
          onClick={() => {
            setActivePage('Home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center space-x-2 text-xl whitespace-nowrap text-blue-900 cursor-pointer hover:opacity-80 transition-opacity duration-300"
        >
          <Route className="w-6 h-6 text-blue-600 transform rotate-[130deg] scale-y-[-1] ml-1" />
          <div>
            <span className="font-bold">levɘl</span> health navigation
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-hide md:overflow-visible">
          <div className="flex space-x-2 md:space-x-4 px-1">
            {menuItems.map(item => ( 
              <button
                key={item.name}
                onClick={() => setActivePage(item.name)}
                className={`flex items-center space-x-1 px-3 py-2 rounded transition-all duration-300 whitespace-nowrap ${
                  activePage === item.name ? 'bg-blue-100 text-blue-900' : 'text-blue-800 hover:bg-blue-100'
                }`}
              >
                <item.icon size={16} />
                <span>{item.name}</span>
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
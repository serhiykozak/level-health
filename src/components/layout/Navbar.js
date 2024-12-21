import React from 'react';
import { Heart, Home, Phone, Info, FileText } from 'lucide-react';

const Navbar = ({ activePage, setActivePage }) => (
  <nav className="bg-blue-900 p-4 text-white">
    <div className="container mx-auto flex flex-wrap justify-between items-center">
      <div className="text-xl">
        <span className="font-bold">levɘl</span> health navigation
      </div>
      <div className="flex space-x-4">
        {[
          { name: 'Home', icon: Home },
          { name: 'Services', icon: Heart },
          { name: 'Cases', icon: FileText },
          { name: 'About', icon: Info },
          { name: 'Contact', icon: Phone }
        ].map(item => ( 
          <button
            key={item.name}
            onClick={() => setActivePage(item.name)}
            className={`flex items-center space-x-1 px-3 py-2 rounded transition-all duration-300 ${
              activePage === item.name ? 'bg-blue-700' : 'hover:bg-blue-800'
            }`}
            style={{
              backgroundColor: activePage === item.name ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
              color: 'white'
            }}
          >
            <item.icon size={16} />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar; 
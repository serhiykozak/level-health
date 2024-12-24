import React from 'react';
import Navbar from './Navbar';
import { Route } from 'lucide-react';
const Layout = ({ children, activePage, setActivePage }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-blue-50 p-8 mt-12 shadow-sm">
        <div className="container mx-auto">
          <div className="text-center text-gray-600">
            <p className="flex items-center justify-center space-x-1">
                <span>&copy; 2024</span>
                <Route className="w-4 h-4 text-blue-600 transform rotate-[130deg] scale-y-[-1]" />
                <span><span className="font-bold">levɘl</span> health navigation. All rights reserved.</span>
            </p>
            <p>Helping you navigate your healthcare journey with confidence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 
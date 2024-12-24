import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Container from '../common/Container';
import theme from '../../theme';

const Layout = ({ children, activePage, setActivePage }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow pt-16">
        <div className="overflow-hidden">
          {children}
        </div>
      </main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
};

export default Layout; 
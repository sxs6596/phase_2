import React from 'react';
import Navbar from './Navbar'; // Adjust the path based on your folder structure
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div data-theme="dark">
      {/* Navbar always displayed */}
      <Navbar />

      {/* Page content, injected via child routes */}
      <main className="">
        <Outlet />
      </main>

      {/* Optional: You can also include a footer here */}
    </div>
  );
};

export default Layout;

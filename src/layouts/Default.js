import React from 'react';
import { Link } from 'react-router-dom';

function DefaultLayout({ children }) {
  return (
    <div className="site-container">
      <header className="site-header">
        <Link to="/">Home</Link>
      </header>
      <main className="main">{children}</main>
    </div>
  );
}

export default DefaultLayout;

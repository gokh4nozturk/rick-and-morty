import React from 'react';
import Header from '../components/Header';

function DefaultLayout({ children }) {
  return (
    <div className="site-container">
      <Header />
      <main className="main">{children}</main>
    </div>
  );
}

export default DefaultLayout;

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Live from './LiveSchemeCarousal'
import Past from './PastSchemesCarousal'

const SchemesPage = () => {


  return (
    <div className="schemes-page min-h-screen bg-black">
      <Navbar />
      <Live/>
      <Past/>
      <Footer />
    </div>
  );
};

export default SchemesPage;

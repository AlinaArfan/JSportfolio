import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Awards from './components/Awards';
import Clients from './components/Clients';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <Portfolio />
      <Awards />
      <Clients />
      <Footer />
    </div>
  );
};

export default App;
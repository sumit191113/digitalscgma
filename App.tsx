import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Notices from './components/Notices';
import Gallery from './components/Gallery';
import Faculty from './components/Faculty';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Academics />
        <Admissions />
        <Notices />
        <Gallery />
        <Faculty />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
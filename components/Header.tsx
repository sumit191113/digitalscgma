import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Notices', href: '#notices' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-xs sm:text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} /> +91 98765 43210</span>
            <span className="flex items-center gap-2"><Mail size={14} /> info@scgma.edu.in</span>
          </div>
          <div>
            <span>Ahmadpur, Barabanki, Uttar Pradesh</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Logo Section */}
          <a href="#home" className="flex items-center gap-3">
            <img 
              src="https://i.postimg.cc/m2LfsRKp/image-removebg-preview.png" 
              alt="SCGMA Logo" 
              className="h-12 w-auto sm:h-16"
            />
            <div className="hidden sm:block">
              <h1 className="font-bold text-blue-900 text-lg leading-tight">Samrat Chandra Gupta <br/> Maurya Academy</h1>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a href="#admissions" className="bg-blue-900 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-800 transition-colors text-sm">
              Apply Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-blue-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white absolute top-full left-0 w-full border-t shadow-lg py-4 flex flex-col items-center space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-800 font-medium text-lg w-full text-center py-2 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#admissions" 
              className="bg-blue-900 text-white px-8 py-3 rounded-full font-medium"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
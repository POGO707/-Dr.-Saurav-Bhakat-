import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { DOCTOR_NAME, PHONE_NUMBER } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-primary-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold text-white tracking-tight">
          <a href="#home" className="flex flex-col">
            <span>{DOCTOR_NAME}</span>
            <span className={`text-xs font-sans font-normal text-accent-400 ${isScrolled ? 'opacity-100' : 'opacity-80'}`}>Emergency & Diabetes Care</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-accent-400 font-medium transition-colors text-sm uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-accent-500/50"
          >
            <Phone size={18} className="fill-white" />
            <span>Emergency</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className="bg-white/10 p-1 rounded" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 animate-slide-down border-t border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 font-bold text-lg hover:text-primary-600 border-b border-gray-100 pb-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-4 rounded-xl font-bold mt-4 shadow-md"
          >
            <Phone size={20} className="fill-white" />
            <span>Call Emergency</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
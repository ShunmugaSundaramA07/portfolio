
import React, { useState, useEffect } from 'react';
import resumePDF from '../assets/resume/sun_salesforce.pdf';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initial slide-down animation
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Hide navbar while scrolling down and show while scrolling up
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  // Lock scrolling while mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Smooth scroll handler
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const id = targetId.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });

      // Update URL hash without triggering a jump
      window.history.pushState(null, '', targetId);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 md:px-12 md:py-6 transition-all duration-500 ease-in-out ${
          show
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        } ${
          isMenuOpen ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-white font-black text-xl md:text-2xl tracking-widest uppercase cursor-pointer relative z-50"
        >
          SUNDAR
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-300 text-sm hover:text-sky-400 transition-colors uppercase tracking-wider font-medium cursor-pointer"
            >
              {link.name}
            </a>
          ))}

          {/* Resume Button */}
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-sm hover:text-sky-400 transition-colors uppercase tracking-wider font-medium cursor-pointer"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden text-white cursor-pointer hover:text-sky-400 transition-colors relative z-50 p-2"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`text-white text-2xl font-black uppercase tracking-widest hover:text-sky-400 transition-all duration-500 ${
                isMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Resume Link */}
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            style={{ transitionDelay: `${navLinks.length * 100}ms` }}
            className={`text-white text-2xl font-black uppercase tracking-widest hover:text-sky-400 transition-all duration-500 ${
              isMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

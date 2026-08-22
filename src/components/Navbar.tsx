import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import resumePdf from '@/assets/Rubina-Mollah-Resume.pdf?url';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add glass effect when scrolled
      setIsScrolled(currentScrollY > 50);
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.split('#')[1];
      if (location !== '/') {
        // We'll let wouter handle navigation to /, then we'll need to scroll.
        // For simplicity, we just use window.location
        window.location.href = href;
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}
          ${isScrolled ? 'py-4 glass border-b-transparent shadow-sm' : 'py-6 bg-transparent border-b-transparent'}
        `}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold tracking-tighter text-foreground group relative overflow-hidden">
            RM<span className="text-primary">.</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </button>
              ))}
            </div>
            
            <div className="h-6 w-px bg-border mx-2" />
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <a 
                href={resumePdf} 
                download="Rubina_Mollah_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 text-sm font-semibold"
              >
                <Download size={14} />
                <span>Resume</span>
              </a>
            </div>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              className="text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 glass flex flex-col items-center justify-center transition-all duration-500
          ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div className="flex flex-col items-center space-y-8 text-xl font-display">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a 
            href={resumePdf} 
            download="Rubina_Mollah_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white mt-8"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </>
  );
}

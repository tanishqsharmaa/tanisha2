import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, BookOpen } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Search', path: '/search' },
    { name: 'Explore', path: '/explore' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-md border-b border-beige shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Tagline */}
          <Link to="/" className="flex flex-col group py-1">
            <span className="font-serif text-2xl font-bold tracking-widest text-indigo group-hover:text-madder transition-colors">
              INDIAN TEXTILES
            </span>
            <span className="text-[11px] uppercase tracking-widest text-charcoal/70 font-sans -mt-0.5">
              Threads of Heritage
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wider uppercase transition-colors py-1 border-b-2 ${
                    isActive
                      ? 'text-madder border-madder font-semibold'
                      : 'text-charcoal/80 border-transparent hover:text-indigo hover:border-terracotta/40'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Search Shortcut Icon */}
            <button
              onClick={() => navigate('/search')}
              aria-label="Open Search"
              className="p-2 text-charcoal/70 hover:text-madder hover:bg-beige/40 rounded-full transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => navigate('/search')}
              aria-label="Search"
              className="p-2 text-charcoal/70 hover:text-madder"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 text-charcoal/80 hover:text-madder focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-beige bg-ivory px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wider ${
                  isActive
                    ? 'bg-beige/60 text-madder font-bold'
                    : 'text-charcoal/80 hover:bg-beige/30 hover:text-indigo'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-beige/60 flex items-center justify-between text-xs text-charcoal/60 px-3">
            <span className="font-serif italic">Preserving Living Handloom Knowledge</span>
            <BookOpen className="w-4 h-4 text-terracotta" />
          </div>
        </div>
      )}
    </header>
  );
};

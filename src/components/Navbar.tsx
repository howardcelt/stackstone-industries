import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Search, Globe, ChevronDown, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO, FOOTER_LINKS } from '../constants';
import { cn } from '../lib/utils';
import { useCart } from '../store/useCart';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const totalItems = useCart((state) => state.totalItems());

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Farm Divisions', 
      href: '#',
      subLinks: FOOTER_LINKS.farmDivisions 
    },
    { 
      name: 'Services', 
      href: '#',
      subLinks: [
        ...FOOTER_LINKS.exportServices,
        { name: 'Processing & Manufacturing', href: '/manufacturing' },
        { name: 'Packaging Services', href: '/packaging' },
      ]
    },
    { name: 'Products', href: '/products' },
    { name: 'Wholesale', href: '/wholesale' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4 text-white"
      )}
    >
      {/* Top Bar */}
      {!scrolled && (
        <div className="hidden lg:flex justify-between items-center px-8 pb-3 border-b border-white/10 text-xs font-medium tracking-wider uppercase">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>{COMPANY_INFO.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>{COMPANY_INFO.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/distributor" className="hover:text-accent transition-colors">Become a Distributor</Link>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-accent">
              <Globe className="w-3.5 h-3.5" />
              <span>EN / USD</span>
            </div>
          </div>
        </div>
      )}

      <div className={cn("max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center transition-all", !scrolled && "pt-3")}>
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-inner group-hover:rotate-12 transition-transform">
            <span className="text-accent font-bold text-xl">S</span>
          </div>
          <span className={cn("text-xl font-bold tracking-tighter transition-colors", scrolled ? "text-primary" : "text-white")}>
            STACKSTON<span className="font-light text-accent">INDUSTRIES</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link 
                to={link.href}
                className={cn(
                  "text-sm font-semibold flex items-center space-x-1 transition-colors",
                  location.pathname === link.href ? "text-accent" : (scrolled ? "text-ink hover:text-primary" : "text-white hover:text-accent")
                )}
              >
                <span>{link.name}</span>
                {link.subLinks && <ChevronDown className="w-4 h-4 opacity-50" />}
              </Link>
              
              {link.subLinks && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 py-4 border border-gray-100">
                  {link.subLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.href}
                      className="block px-6 py-3 text-sm text-ink hover:bg-surface hover:text-primary transition-colors font-medium border-l-4 border-transparent hover:border-primary"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 pl-4 border-l border-gray-200">
            <button className={cn("p-2 transition-colors", scrolled ? "text-ink hover:text-primary" : "text-white hover:text-accent")}>
              <Search className="w-5 h-5" />
            </button>
            <Link to="/cart" className={cn("p-2 relative transition-colors", scrolled ? "text-ink hover:text-primary" : "text-white hover:text-accent")}>
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-primary text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link 
              to="/products"
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-bold shadow-lg transition-all active:scale-95",
                scrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-accent text-primary hover:bg-white"
              )}
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <Link to="/cart" className={cn("p-2 relative", scrolled ? "text-ink" : "text-white")}>
            <ShoppingCart className="w-6 h-6" />
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={cn("p-2", scrolled ? "text-primary" : "text-white")}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-4">
                  <Link 
                    to={link.href}
                    onClick={() => !link.subLinks && setIsOpen(false)}
                    className="block text-xl font-bold text-primary"
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="pl-4 space-y-3 border-l-2 border-surface">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-ink/70 font-medium"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 border-t border-gray-100 flex flex-col space-y-4">
                <Link 
                  to="/products" 
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-primary text-white text-center rounded-xl font-bold"
                >
                  Shop Products
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 border-2 border-primary text-primary text-center rounded-xl font-bold"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

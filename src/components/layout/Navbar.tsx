import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Pepper Farm', path: '/farms/pepper' },
  { name: 'Goat Farm', path: '/farms/goat' },
  { name: 'Cassava Farm', path: '/farms/cassava' },
  { name: 'Export', path: '/services/export' },
  { name: 'Wholesale', path: '/services/wholesale' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-display font-bold text-xl">S</span>
          </div>
          <div className="flex flex-col">
            <span className={cn("font-display font-bold text-lg leading-tight", isScrolled ? "text-ink" : "text-white")}>
              STACKSTON
            </span>
            <span className={cn("text-[10px] tracking-widest uppercase", isScrolled ? "text-primary" : "text-accent")}>
              INDUSTRIES
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-medium text-sm transition-colors hover:text-accent",
                location.pathname === link.path 
                  ? "text-accent" 
                  : (isScrolled ? "text-ink" : "text-white")
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/cart"
            className={cn(
              "relative p-2 rounded-full transition-colors",
              isScrolled ? "text-ink hover:bg-surface-light" : "text-white hover:bg-white/10"
            )}
          >
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
          
          <button 
            className="lg:hidden p-2 text-white" 
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: isScrolled ? 'var(--color-ink)' : 'white' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link 
            to="/contact"
            className="hidden md:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg"
          >
            <MessageSquare size={16} />
            Request Quote
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 flex flex-col gap-4 lg:hidden border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-lg font-semibold py-2 border-b border-gray-50",
                  location.pathname === link.path ? "text-primary" : "text-ink"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="mt-4 bg-primary text-white py-4 rounded-xl text-center font-bold shadow-lg"
            >
              Request Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

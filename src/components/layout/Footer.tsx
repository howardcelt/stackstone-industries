import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A1A0C] text-white pt-20 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-display font-bold text-2xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-tight">STACKSTON</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-accent">INDUSTRIES</span>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Leading the way in modern agriculture and industrial processing. From sustainable farming to premium global supply chain solutions.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            Quick Links
          </h4>
          <ul className="flex flex-col gap-4 text-gray-400 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">About Company</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Product Store</Link></li>
            <li><Link to="/services/wholesale" className="hover:text-white transition-colors">Wholesale Program</Link></li>
            <li><Link to="/services/distributor" className="hover:text-white transition-colors">Distributor Sign-up</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Industry News</Link></li>
            <li><Link to="/checkout" className="hover:text-white transition-colors">Secure Checkout</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            Farm Divisions
          </h4>
          <ul className="flex flex-col gap-4 text-gray-400 text-sm">
            <li><Link to="/farms/pepper" className="hover:text-white transition-colors">Pepper Cultivation</Link></li>
            <li><Link to="/farms/goat" className="hover:text-white transition-colors">Commercial Goat Ranching</Link></li>
            <li><Link to="/farms/cassava" className="hover:text-white transition-colors">Industrial Cassava Processing</Link></li>
            <li><Link to="/manufacturing" className="hover:text-white transition-colors">Manufacturing Units</Link></li>
            <li><Link to="/packaging" className="hover:text-white transition-colors">Packaging Services</Link></li>
            <li><Link to="/services/export" className="hover:text-white transition-colors">Global Export Logistics</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            Contact Info
          </h4>
          <ul className="flex flex-col gap-5 text-gray-400 text-sm">
            <li className="flex gap-3">
              <MapPin size={24} className="text-accent shrink-0" />
              <span>Industrial Estate Phase II, Victoria Island, Lagos, Nigeria</span>
            </li>
            <li className="flex gap-3">
              <Phone size={20} className="text-accent shrink-0" />
              <span>+234 800 STACKSTON</span>
            </li>
            <li className="flex gap-3">
              <Mail size={20} className="text-accent shrink-0" />
              <span>hello@stackston.com</span>
            </li>
          </ul>
          
          <div className="mt-8">
            <h5 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Newsletter</h5>
            <div className="flex bg-white/5 rounded-lg p-1">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent border-none outline-none px-3 py-2 text-sm flex-1"
              />
              <button className="bg-primary text-white p-2 rounded-md hover:bg-primary/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-xs text-center md:text-left">
          &copy; {new Date().getFullYear()} Stackston Industries Limited. All Rights Reserved. 
          <span className="mx-2">|</span>
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <span className="mx-2">|</span>
          <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
        </p>
        <div className="flex gap-6 items-center flex-wrap justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Logo_Paystack.png" alt="Paystack" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
        </div>
      </div>
      
      {/* WhatsApp Fixed Button */}
      <a 
        href="https://wa.me/2348000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={28} />
      </a>
    </footer>
  );
}

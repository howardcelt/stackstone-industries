import React from 'react';
import { Mail, Phone, MapPin, Send, Download, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, FOOTER_LINKS } from '../constants';
import { cn } from '../lib/utils';

export default function Footer() {
  return (
    <footer className="bg-[#1B5E20] text-white pt-16 pb-8 px-4 md:px-8 border-t border-white/10" id="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight font-sans text-[#F9A825]">
                {COMPANY_INFO.name}
              </h2>
              <p className="text-white/80 max-w-sm italic">
                “{COMPANY_INFO.tagline}”
              </p>
            </div>
            
            <div className="space-y-4 text-white/70">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#F9A825]" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F9A825]" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F9A825]" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, color: '#F9A825' }}
                  className="bg-white/10 p-2 rounded-full transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 hover:text-[#F9A825] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories & Farms */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b border-white/20 pb-2">Product Categories</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.productCategories.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-white/70 hover:text-[#F9A825] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b border-white/20 pb-2">Farm Divisions</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.farmDivisions.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-white/70 hover:text-[#F9A825] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter & Brochures */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b border-white/20 pb-2">Export Services</h3>
              <ul className="space-y-3 text-sm">
                {FOOTER_LINKS.exportServices.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-white/70 hover:text-[#F9A825] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="text-sm text-white/70">Stay updated with industry news and offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-none rounded-l-md px-4 py-2 w-full focus:ring-1 focus:ring-[#F9A825] outline-none text-white placeholder:text-white/40"
                />
                <button className="bg-[#F9A825] hover:bg-[#e09620] px-4 py-2 rounded-r-md transition-colors">
                  <Send className="w-5 h-5 text-[#1B5E20]" />
                </button>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="#" 
                className="flex items-center space-x-2 bg-white text-[#1B5E20] px-4 py-3 rounded-md font-bold hover:bg-opacity-90 transition-all text-sm group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>Company Brochure PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Certifications & Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-8 opacity-60">
              <div className="text-xs font-mono">ISO 9001:2015</div>
              <div className="text-xs font-mono">NCDMB VERIFIED</div>
              <div className="text-xs font-mono">EXPORT READY</div>
              <div className="text-xs font-mono">GAP CERTIFIED</div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/50">
              <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

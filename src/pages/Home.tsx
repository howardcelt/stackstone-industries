import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, ShoppingBag, PhoneCall, Zap, Shield, Globe2, BarChart3, Users, Leaf, Truck, Factory, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND_COLORS, COMPANY_INFO } from '../constants';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Farming Drone View" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-md px-4 py-2 rounded-full border border-accent/30 text-accent text-sm font-bold tracking-widest uppercase">
              <Zap className="w-4 h-4" />
              <span>Modern Agriculture at Scale</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter">
              Industrial Farming, <br />
              <span className="text-accent underline decoration-4 underline-offset-8">Global Supply</span> <br />
              Solutions.
            </h1>
            
            <p className="text-xl text-white/80 max-w-xl font-light leading-relaxed">
              Stackston Industries delivers premium agricultural products, food processing, packaging, manufacturing, and export solutions from farm to market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/products" className="px-8 py-4 bg-accent text-primary font-bold rounded-xl flex items-center justify-center space-x-2 hover:bg-white transition-all shadow-xl group">
                <span>Shop Products</span>
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl flex items-center justify-center space-x-2 hover:bg-white/20 transition-all group">
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={COMPANY_INFO.whatsapp} className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl flex items-center justify-center space-x-2 hover:opacity-90 transition-all">
                <PhoneCall className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-xl border-t border-white/10 hidden lg:block">
          <div className="container mx-auto px-8 py-8 flex justify-between items-center text-white">
            {[
              { label: 'Export Ready', value: '100%', sub: 'Compliance Rate' },
              { label: 'Farm Acreage', value: '5,000+', sub: 'Active Hectares' },
              { label: 'Daily Capacity', value: '250', sub: 'Tons Processed' },
              { label: 'Global Partners', value: '15+', sub: 'Countries' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-accent font-bold text-3xl">{stat.value}</span>
                <span className="text-sm font-semibold tracking-wider uppercase text-white/60">{stat.label}</span>
                <span className="text-xs text-white/40">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="py-24 bg-surface px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold bg-primary text-white inline-block px-6 py-2 rounded-lg">Our Divisions</h2>
            <p className="text-ink/60">Explore our integrated ecosystem from cultivation to distribution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: 'Pepper Farm', desc: 'Premium fresh and dried varieties for exports.', color: 'bg-red-50', link: '/farms/pepper' },
              { icon: Users, title: 'Goat Farm', desc: 'Industrial-grade livestock breeding and supply.', color: 'bg-orange-50', link: '/farms/goat' },
              { icon: Factory, title: 'Cassava Processing', desc: 'Starch, Garri and Flour at industrial scale.', color: 'bg-yellow-50', link: '/farms/cassava' },
              { icon: ShoppingBag, title: 'Product Store', desc: 'Direct-to-consumer and wholesale ecommerce.', color: 'bg-green-50', link: '/products' },
              { icon: Package, title: 'Packaging Services', desc: 'Custom branding and export-ready packaging.', color: 'bg-blue-50', link: '/packaging' },
              { icon: Truck, title: 'Logistics & Export', desc: 'Warehousing and global supply chain.', color: 'bg-indigo-50', link: '/export' },
              { icon: Globe2, title: 'Distribution', desc: 'Wholesale partnership programs globally.', color: 'bg-purple-50', link: '/wholesale' },
              { icon: BarChart3, title: 'Investment', desc: 'Partner with a growing industrial agro leader.', color: 'bg-stone-50', link: '/investors' },
            ].map((item, i) => (
              <Link 
                key={i} 
                to={item.link}
                className={cn("group p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-64 bg-white")}
              >
                <div className={cn("w-12 h-12 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform", item.color)}>
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                  <p className="text-sm text-ink/60">{item.desc}</p>
                </div>
                <div className="flex items-center text-accent text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1589923188900-85da3d293c6b?auto=format&fit=crop&q=80&w=1000" 
                alt="Stackston Vision" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block">
              <p className="text-2xl font-bold italic mb-4">"We don't just grow crops; we build global food stability."</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-accent" />
                <div>
                  <p className="font-bold">Mac-Dickson Celt</p>
                  <p className="text-xs opacity-60 uppercase tracking-widest font-bold">Founder, CEO</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Industrial Agribusiness Leadership</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">Decades of Agronomic <br />& Manufacturing Excellence.</h2>
            </div>
            
            <p className="text-lg text-ink/70 leading-relaxed">
              Stackston Industries is a dynamic, vertically integrated conglomerate focused on high-growth agricultural sectors. From deep-soil pepper cultivation to industrial cassava starch processing, we control the entire value chain.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
              {[
                { icon: Shield, title: 'Food Safety', desc: 'Strict hygiene and NAFDAC/ISO standard processing.' },
                { icon: Globe2, title: 'Global Reach', desc: 'Supply chains across Africa, Europe and the Americas.' },
                { icon: Leaf, title: 'Sustainable', desc: 'Solar-powered irrigation and organic soil health.' },
                { icon: Zap, title: 'Tech-Enabled', desc: 'Precision farming and real-time inventory tracking.' },
              ].map((item, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="text-sm text-ink/60 line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary transition-colors">
              <span>Our Full Story</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-primary text-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Consumer & Industrial Store</span>
              <h2 className="text-4xl md:text-5xl font-bold">Export-Grade Products <br />Ready for Your Market.</h2>
            </div>
            <Link to="/products" className="hidden md:flex items-center space-x-2 text-accent border-b border-accent pb-1 font-bold hover:scale-105 transition-transform">
              <span>View Full Catalog</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Red Cayenne Powder', price: '$12.99', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600' },
              { name: 'Premium Goat Meat (Frozen)', price: '$45.00', img: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=600' },
              { name: 'Ijevu Cassava Garri', price: '$8.50', img: 'https://images.unsplash.com/photo-1626082896492-766af4eb6501?auto=format&fit=crop&q=80&w=600' },
              { name: 'Industrial Cassava Starch', price: 'Inquire', img: 'https://images.unsplash.com/photo-1582234372722-50d02b123616?auto=format&fit=crop&q=80&w=600' },
            ].map((p, i) => (
              <div key={i} className="group flex flex-col bg-white text-ink rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-xs font-black uppercase tracking-tighter shadow-lg">New Harvest</div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg leading-tight line-clamp-1">{p.name}</h3>
                    <p className="text-secondary font-bold">{p.price}</p>
                  </div>
                  <button className="w-full py-3 bg-surface text-primary font-bold rounded-xl hover:bg-accent transition-colors flex items-center justify-center space-x-2">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & CTA */}
      <section className="py-24 relative overflow-hidden bg-white px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary">Ready to Scale Your Food Supply Business?</h2>
            <p className="text-xl text-ink/60 leading-relaxed font-light">
              Join dozens of global distributors and industrial food processors who rely on Stackston for consistent, high-grade agricultural supply.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/wholesale" className="px-10 py-5 bg-primary text-white rounded-2xl font-bold shadow-2xl hover:scale-105 transition-transform">
              Become a Distributor
            </Link>
            <Link to="/export" className="px-10 py-5 border-2 border-primary text-primary rounded-2xl font-bold hover:bg-primary/5 transition-transform">
              Export Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

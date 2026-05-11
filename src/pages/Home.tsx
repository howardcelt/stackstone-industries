import { motion } from 'motion/react';
import { ArrowRight, Leaf, ShieldCheck, Zap, Globe, Package, Users, BarChart3, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-[#0A1A0C]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2670" 
            alt="Farm Drone View" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A0C] via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-accent" />
                <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase">Est. 2012 | Premium Agro Exports</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
                From Farm to <span className="text-accent italic">Finished</span> Product.
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
                Stackston Industries delivers premium agricultural products, food processing, packaging, and global export solutions across the entire value chain.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link to="/products" className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-primary/90 transition-all flex items-center gap-2 group">
                  Shop Products
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-12 text-white/40">
           <div className="flex flex-col items-center gap-1">
             <span className="text-2xl font-display font-bold text-white">5,000+</span>
             <span className="text-[10px] uppercase font-bold tracking-widest text-accent">Acres of Farmland</span>
           </div>
           <div className="w-[1px] h-10 bg-white/20" />
           <div className="flex flex-col items-center gap-1">
             <span className="text-2xl font-display font-bold text-white">20+</span>
             <span className="text-[10px] uppercase font-bold tracking-widest text-accent">Export Countries</span>
           </div>
           <div className="w-[1px] h-10 bg-white/20" />
           <div className="flex flex-col items-center gap-1">
             <span className="text-2xl font-display font-bold text-white">100%</span>
             <span className="text-[10px] uppercase font-bold tracking-widest text-accent">Sustainable Practices</span>
           </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="py-12 px-6 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Pepper Farm', to: '/farms/pepper', icon: <Leaf className="text-accent" /> },
            { name: 'Goat Ranch', to: '/farms/goat', icon: <TrendingUp className="text-accent" /> },
            { name: 'Cassava Unit', to: '/farms/cassava', icon: <Zap className="text-accent" /> },
            { name: 'Product Store', to: '/products', icon: <Package className="text-accent" /> },
          ].map((item, idx) => (
            <Link key={idx} to={item.to} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group border border-gray-100">
              <div className="w-12 h-12 bg-surface-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-ink">{item.name}</h3>
              <div className="mt-2 flex items-center gap-1 text-xs text-primary font-bold">
                View Division <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=1548" 
              alt="Processing Facility" 
              className="rounded-[40px] shadow-2xl relative z-10 w-full aspect-square object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[30px] shadow-2xl z-20 hidden md:block border border-gray-100 max-w-[280px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  <ShieldCheck size={28} />
                </div>
                <h4 className="font-display font-bold leading-tight">Certified Quality Standards</h4>
              </div>
              <p className="text-xs text-gray-500">ISO 22000 & HACCP Compliant Industrial Processing Facilities.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="text-primary font-bold uppercase tracking-widest text-xs">The Stackston Legacy</span>
              <div className="h-[1px] flex-1 bg-gray-100" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ink leading-tight">
              A Decade of Agricultural <span className="text-primary">Excellence</span> & Industrial Scale.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded on the principles of sustainability and efficiency, Stackston Industries has grown from a local farm into a cross-border agricultural titan. We don't just grow food; we engineer the entire supply chain to ensure premium quality reaches global markets.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Leaf size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Sustainable Farming</h4>
                  <p className="text-sm text-gray-500">Eco-conscious cultivation using modern tech.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Global Distribution</h4>
                  <p className="text-sm text-gray-500">Exporting to 20+ countries worldwide.</p>
                </div>
              </div>
            </div>
            <Link to="/about" className="text-primary font-bold flex items-center gap-2 hover:underline">
              Our Full Corporate Story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 bg-surface-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="flex flex-col gap-4 max-w-xl">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">Premium Catalog</span>
              <h2 className="text-4xl font-display font-bold text-ink">Industrial Supply & Retail Products</h2>
            </div>
            <Link to="/products" className="bg-white text-primary border border-primary/20 px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-sm">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Fresh Chili Pepper', price: 12000, img: 'https://images.unsplash.com/photo-1588253518678-596bfd6b47e5?auto=format&fit=crop&q=80&w=1000', unit: 'per crate' },
              { name: 'Premium Garri (Yellow)', price: 45000, img: 'https://images.unsplash.com/photo-1621236304198-651565bb9dbb?auto=format&fit=crop&q=80&w=1000', unit: 'per 50kg bag' },
              { name: 'Processed Goat Meat', price: 6500, img: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=1000', unit: 'per kg' },
              { name: 'Dried Pepper Powder', price: 8500, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1000', unit: 'per kg' },
            ].map((p, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-50 flex flex-col h-full"
              >
                <div className="h-64 relative overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase text-primary">In Stock</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-lg mb-2 text-ink">{p.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{p.unit}</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-secondary font-bold text-lg">₦{p.price.toLocaleString()}</span>
                    </div>
                    <button className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing & Packaging CTA */}
      <section className="py-24 px-6 relative overflow-hidden bg-primary">
         <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 grayscale contrast-150 brightness-50" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2670)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
         </div>
         
         <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-2">
              <Package className="text-accent" size={32} />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
              Scalable Manufacturing & Custom Packaging Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-2xl">
              From food processing to industrial-grade packaging, we provide the infrastructure businesses need to grow at scale.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/manufacturing" className="bg-white text-primary px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all">
                Our Facilities
              </Link>
              <Link to="/packaging" className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                Packaging Services
              </Link>
            </div>
         </div>
      </section>

       {/* Why Choose Us */}
       <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">The Stackston Advantage</span>
             <h2 className="text-4xl font-display font-bold text-ink">Built for Scale & Trust</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Large Scale Production', icon: <BarChart3 size={32} />, desc: 'Managing over 5,000 acres of high-yield agricultural land across the region.' },
              { title: 'Export Readiness', icon: <Globe size={32} />, desc: 'Fully compliant with international EU, US, and Asian food safety standards.' },
              { title: 'Modern Machinery', icon: <Zap size={32} />, desc: 'State-of-the-art cold chain and processing units for maximum freshness.' },
              { title: 'Trusted Logistics', icon: <ArrowRight size={32} />, desc: 'Own fleet of vehicles ensuring seamless delivery from farm to warehouse.' },
              { title: 'Sustainable Focus', icon: <Leaf size={32} />, desc: 'Regenerative farming practices that ensure soil health for generations.' },
              { title: 'Hygiene & Quality', icon: <ShieldCheck size={32} />, desc: 'HACCP-certified processing plants with 100% sterile packaging environments.' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4 p-8 rounded-3xl hover:bg-surface-light transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-ink">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export & Distribution - Special Section */}
       <section className="bg-ink py-24 px-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-8 relative z-10">
              <span className="text-accent font-bold tracking-widest text-xs uppercase">Global Reach</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Your Reliable Export Partner from West Africa.</h2>
              <p className="text-lg text-gray-400">
                We bridge the gap between regional agricultural prowess and global market demands. Stackston Industries manages end-to-end export logistics, ensuring compliance, safety, and speed.
              </p>
              <div className="space-y-4">
                {['Air & Sea Freight Options', 'Full International Documentation Support', 'Standardized Packaging for Export', 'Cold-Chain Logistics Management'].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="font-semibold">{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link to="/services/export" className="bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent/90 transition-all shadow-xl">
                  Export Inquiries
                </Link>
                <Link to="/services/distributor" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                  Become a Distributor
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2670" 
                alt="Logistics Port" 
                className="rounded-[40px] shadow-2xl relative z-10"
              />
            </div>
          </div>
       </section>

      {/* Blog & News Preview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="flex flex-col gap-4">
              <span className="text-primary font-bold uppercase tracking-widest text-xs">Industry Insights</span>
              <h2 className="text-4xl font-display font-bold text-ink">Farm & Industrial News</h2>
            </div>
            <Link to="/blog" className="text-primary font-bold hover:underline mb-2">View All Articles</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'The Future of Cassava Processing in 2026', cat: 'Industry', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000' },
              { title: 'How We Achieve 0% Waste in Pepper Farming', cat: 'Sustainability', img: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&q=80&w=1000' },
              { title: 'Goat Ranching: From Local Supply to Global Demand', cat: 'Livestock', img: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&q=80&w=1000' },
            ].map((post, i) => (
              <Link key={i} to="/blog" className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                <div className="h-56 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-3">{post.cat}</span>
                  <h3 className="text-xl font-display font-bold text-ink leading-snug group-hover:text-primary transition-colors mb-6">{post.title}</h3>
                  <div className="mt-auto flex items-center text-xs font-bold text-primary gap-2">
                    Read Article <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Final */}
      <section className="py-24 bg-surface-light px-6">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-8 leading-tight">
             Ready to Partner with West Africa's Premier Agribusiness?
           </h2>
           <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
             Whether you need bulk supply, retail products, or industrial processing services, Stackston is your reliable partner.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
             <Link to="/products" className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-primary/90 transition-all">
               Browse Store
             </Link>
             <Link to="/contact" className="bg-white text-primary border border-primary/20 px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-all shadow-sm">
               Contact Us
             </Link>
           </div>
        </div>
      </section>
    </Layout>
  );
}

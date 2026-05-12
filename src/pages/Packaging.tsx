import React from 'react';
import { motion } from 'motion/react';
import { Package, ShieldCheck, Zap, Factory, Palette, Settings, BarChart3, CheckSquare, Layers, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

export default function Packaging() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-32 bg-stone-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
           <div className="grid grid-cols-4 gap-4 rotate-12 -translate-y-20">
              {Array.from({length: 16}).map((_, i) => (
                <div key={i} className="aspect-square bg-primary rounded-2xl" />
              ))}
           </div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-secondary text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                 <Package className="w-4 h-4 text-accent" />
                 <span>Industrial Branding</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold text-primary tracking-tighter">Export-Grade <br />Packaging.</h1>
              <p className="text-xl text-ink/60 font-light leading-relaxed">
                Protecting product integrity while amplifying brand visibility. Our packaging division delivers shelf-ready solutions for retail and industrial bulk containment.
              </p>
              <div className="flex gap-4">
                 <Link to="/contact" className="px-10 py-5 bg-primary text-white rounded-2xl font-bold hover:bg-secondary transition-all shadow-xl">
                    Get Free Samples
                 </Link>
                 <Link to="/manufacturing" className="px-10 py-5 border-2 border-primary text-primary rounded-2xl font-bold hover:bg-white transition-all">
                    Process Flow
                 </Link>
              </div>
           </div>
           <div className="relative">
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1586769852044-692d6e37bc35?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-xs">
                 <div className="flex items-center space-x-3 mb-4">
                    <ShieldCheck className="w-8 h-8 text-accent" />
                    <span className="font-bold text-primary text-lg">Shelf-Life Pro+</span>
                 </div>
                 <p className="text-sm text-ink/60">Our nitrogen-flushed sachet technology extends shelf life by up to 24 months without preservatives.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 md:px-8">
         <div className="max-w-7xl mx-auto space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { icon: Palette, title: 'Brand Design', desc: 'Custom structural and graphic design for your private label agricultural products.' },
                 { icon: Layers, title: 'Multi-Format', desc: 'From 50g retail sachets to 50kg industrial PP bags and vacuum bulk packs.' },
                 { icon: Zap, title: 'Fast Lead Times', desc: 'Fully automated lines delivering up to 100,000 units per shift.' },
                 { icon: ShieldCheck, title: 'Food Grade', desc: 'BPA-free, food-safe materials compliant with international food safety laws.' },
                 { icon: Settings, title: 'Automation', desc: 'Robotic weighing, filling, and sealing for zero-variance consistency.' },
                 { icon: Globe, title: 'Export Ready', desc: 'Barcode generation, GS1 standards, and multi-language labeling.' },
               ].map((service, i) => (
                 <div key={i} className="bg-surface p-10 rounded-[3rem] space-y-6 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-white flex items-center justify-center rounded-2xl shadow-sm">
                       <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                    <p className="text-ink/60 leading-relaxed">{service.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Industrial Hardware */}
      <section className="py-24 px-4 md:px-8 bg-primary text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" className="w-full h-full object-cover grayscale" />
         </div>
         <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Modern <br />Packaging Hub.</h2>
               <div className="space-y-6">
                  {[
                    { title: 'Rotary Pouch Filling', detail: 'High-speed containment for powders and granules.' },
                    { title: 'Vacuum Sealing', detail: 'Ideal for meat and fresh-dried pepper preservation.' },
                    { title: 'Nitrogen Flushing', detail: 'Oxygen displacement for extended shelf life.' },
                    { title: 'Automatic Labeling', detail: '360° bottle and jar label application.' },
                  ].map((h, i) => (
                    <div key={i} className="flex gap-6 items-start">
                       <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                          <CheckSquare className="w-5 h-5 text-accent" />
                       </div>
                       <div>
                          <h4 className="font-bold text-xl">{h.title}</h4>
                          <p className="text-white/60">{h.detail}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 p-12 rounded-[3.5rem] space-y-8">
               <h3 className="text-3xl font-bold">Capacity <br />Commitment.</h3>
               <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                     <span className="font-medium text-white/70">Daily Output</span>
                     <span className="text-2xl font-black text-accent">250k Units</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                     <span className="font-medium text-white/70">Material Recyclability</span>
                     <span className="text-2xl font-black text-accent">85%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                     <span className="font-medium text-white/70">QA Compliance</span>
                     <span className="text-2xl font-black text-accent">100%</span>
                  </div>
               </div>
               <Link to="/wholesale" className="block text-center py-5 bg-accent text-primary rounded-2xl font-bold hover:bg-white transition-all">
                  Discuss a Large Project
               </Link>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-surface">
         <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter">Your Products, <br />World-Class Protection.</h2>
            <p className="text-xl text-ink/60 font-light">Stackston doesn't just package food; we build market-leading consumer experiences through superior containment science.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link to="/contact" className="px-12 py-5 bg-primary text-white rounded-2xl font-bold shadow-2xl hover:bg-secondary transition-all">
                  Request Service Catalog
               </Link>
               <a href={COMPANY_INFO.whatsapp} className="px-12 py-5 border-2 border-primary text-primary rounded-2xl font-bold hover:bg-white transition-all">
                  Consultation on WhatsApp
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}

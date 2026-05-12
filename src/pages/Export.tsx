import React from 'react';
import { motion } from 'motion/react';
import { Globe2, Truck, Ship, Plane, ShieldCheck, MapPin, ArrowRight, BarChart3, Users, Building2, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Export() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl space-y-8 text-center">
           <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm">Supply Chain Global Reach</span>
           <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">Global Logistics <br />& Export Services.</h1>
           <p className="text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
             Stackston Industries operates a robust, multi-modal logistics network that connects our farm centers directly to global ports, ensuring the integrity of our premium products at every mile.
           </p>
           <div className="flex justify-center gap-4">
              <Link to="/wholesale" className="px-10 py-5 bg-accent text-primary rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-2xl">
                 Request Export Quote
              </Link>
           </div>
        </div>
      </section>

      {/* Logistics Modes */}
      <section className="py-24 px-4 md:px-8 bg-surface">
         <div className="max-w-7xl mx-auto space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { icon: Ship, title: 'Ocean Freight', desc: 'Optimized containerized shipping for bulk agricultural commodities like dry peppers and starch.' },
                 { icon: Plane, title: 'Air Logistics', desc: 'Express cold-chain air transport for fresh produce and frozen livestock products requiring speed.' },
                 { icon: Truck, title: 'Intermodal Haulage', desc: 'Secure trucking fleet equipped with real-time GPS tracking and temperature monitoring.' },
               ].map((mode, i) => (
                 <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-gray-100 space-y-6 hover:shadow-2xl transition-all group">
                    <div className="w-16 h-16 bg-primary/5 flex items-center justify-center rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                       <mode.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{mode.title}</h3>
                    <p className="text-ink/60 leading-relaxed">{mode.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Export Compliance */}
      <section className="py-24 px-4 md:px-8">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">Zero-Friction <br />Global Compliance.</h2>
                  <p className="text-ink/60 text-lg">We handle the complexity of international trade so you don't have to. Our documentation team ensures 100% compliance with target market regulations.</p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { title: 'Phytosanitary', desc: 'Full certification for all plant-based exports.' },
                    { title: 'ISO 22000', desc: 'Global food safety management standards.' },
                    { title: 'Customs Brokerage', desc: 'Seamless clearing at major international ports.' },
                    { title: 'Insurance', desc: 'All-risk transit coverage for high-value orders.' },
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                       <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                          <ShieldCheck className="w-5 h-5 text-primary" />
                       </div>
                       <h4 className="font-bold text-lg text-primary">{item.title}</h4>
                       <p className="text-sm text-ink/60">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="relative">
               <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1590674116499-fa3f249a9980?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -bottom-10 -right-10 bg-secondary text-white p-10 rounded-[3rem] shadow-2xl max-w-sm hidden xl:block">
                  <Globe2 className="w-12 h-12 mb-6 text-accent" />
                  <h3 className="text-2xl font-bold mb-4">Active Routes</h3>
                  <p className="text-sm opacity-80 leading-relaxed">Direct export lines to USA, United Kingdom, Netherlands, China, and the ECOWAS region.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Port Capacity Stats */}
      <section className="py-24 px-4 md:px-8 bg-primary text-white">
         <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Tons Exported', value: '12k+' },
              { label: 'Active Vessels', value: '45' },
              { label: 'Average Lead Time', value: '14 Days' },
              { label: 'Market Certs', value: '10+' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                 <span className="block text-5xl font-black text-accent">{stat.value}</span>
                 <span className="text-xs font-bold uppercase tracking-widest text-white/40">{stat.label}</span>
              </div>
            ))}
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8">
         <div className="max-w-5xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Bridge the Gap between African <br />Harvests and Global Consumers.</h2>
            <p className="text-xl text-ink/60 max-w-2xl mx-auto">
              Our export division is dedicated to maintaining the gold standard of African agrobusiness on the world stage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link to="/wholesale" className="px-12 py-5 bg-primary text-white rounded-2xl font-bold shadow-2xl hover:bg-secondary transition-all">
                  Request Export Catalog
               </Link>
               <Link to="/contact" className="px-12 py-5 border-2 border-primary text-primary rounded-2xl font-bold hover:bg-surface transition-all">
                  Consultation Call
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}

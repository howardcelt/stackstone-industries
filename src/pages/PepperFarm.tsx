import React from 'react';
import { Leaf, Droplets, Sun, Wind, ShieldCheck, Thermometer, ArrowRight, BarChart3, Globe2, Truck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function PepperFarm() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=2000" 
             className="w-full h-full object-cover shadow-inner" 
             referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl space-y-6">
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-md px-4 py-2 rounded-full border border-accent/40 text-accent text-sm font-black uppercase tracking-widest"
           >
              <Leaf className="w-4 h-4" />
              <span>Premium Division</span>
           </motion.div>
           <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">Pepper Farm.</h1>
           <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
             From deep-soil cultivation to export-grade dehydration, we produce the finest red and green cayenne peppers for the global market.
           </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary border-t border-white/10 py-12 px-4 md:px-8">
         <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Active Hectares', value: '1,200', icon: Sun },
              { label: 'Export Quality', value: '100%', icon: ShieldCheck },
              { label: 'Annual Yield', value: '5k Tons', icon: BarChart3 },
              { label: 'Growth Cycle', value: '90 Days', icon: Leaf },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2">
                 <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-accent" />
                 </div>
                 <span className="text-3xl font-black text-white">{stat.value}</span>
                 <span className="text-xs font-bold uppercase tracking-widest text-white/40">{stat.label}</span>
              </div>
            ))}
         </div>
      </section>

      {/* Agricultural Innovation */}
      <section className="py-24 px-4 md:px-8 bg-surface">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Precision Farming <br />for Predictable Yields.</h2>
                  <p className="text-ink/60 text-lg">We employ cutting-edge agronomic techniques to ensure consistent size, heat levels (SHU), and color intensity in every batch.</p>
               </div>

               <div className="space-y-8">
                  {[
                    { icon: Droplets, title: 'Smart Irrigation', desc: 'IoT-monitored drip systems delivery exact moisture levels based on real-time soil data.' },
                    { icon: Thermometer, title: 'Thermal Control', desc: 'Proprietary solar dehydration technology preserves capsaicin levels and natural oils.' },
                    { icon: Wind, title: 'Aeration Systems', desc: 'Advanced airflow warehouses prevent post-harvest mold and maintain freshness.' },
                  ].map((tech, i) => (
                    <div key={i} className="flex space-x-6 group">
                       <div className="flex-shrink-0 w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors">
                          <tech.icon className="w-6 h-6 text-primary" />
                       </div>
                       <div className="space-y-1">
                          <h4 className="text-xl font-bold text-primary">{tech.title}</h4>
                          <p className="text-ink/60 leading-relaxed">{tech.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 mt-12">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                     <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                     <img src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5" className="w-full h-full object-cover" />
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                     <img src="https://images.unsplash.com/photo-1591871937573-74dbba515c4c" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                     <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Export Section */}
      <section className="py-24 px-4 md:px-8">
         <div className="max-w-6xl mx-auto bg-primary rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
               <img src="https://images.unsplash.com/photo-1586771107445-d3ca88fb3f00" className="w-full h-full object-cover" />
            </div>
            <div className="max-w-xl space-y-8 relative z-10">
               <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Global Export Partnerships.</h2>
               <p className="text-lg text-white/70">
                 We are the preferred supplier for international spice blenders and food distributors. Our peppers meet all phytosanitary requirements for major industrial markets.
               </p>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'ISO 22000 Certified',
                    'Aflatoxin Verified',
                    'Standardized SHU Levels',
                    'Custom Mesh Milling',
                    'Vacuum Packaging',
                    'Air/Sea Logistics'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm font-bold">
                       <CheckCircle2 className="w-4 h-4 text-accent" />
                       <span>{item}</span>
                    </li>
                  ))}
               </ul>
               <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Link to="/wholesale" className="px-10 py-5 bg-accent text-primary rounded-2xl font-bold hover:bg-white transition-all shadow-2xl text-center">
                     Request Export Quote
                  </Link>
                  <Link to="/products" className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all text-center">
                     Shop Retail Packs
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

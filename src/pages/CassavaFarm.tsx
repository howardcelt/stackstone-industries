import React from 'react';
import { motion } from 'motion/react';
import { Factory, Leaf, Sun, Zap, ShieldCheck, ArrowRight, CheckCircle2, FlaskConical, Droplets, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CassavaFarm() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582234372722-50d02b123616?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl space-y-8">
           <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-md px-4 py-2 rounded-full border border-accent/40 text-accent text-sm font-bold tracking-widest uppercase">
              <Leaf className="w-4 h-4" />
              <span>Industrial Starch Division</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">The Cassava <br />Powerhouse.</h1>
           <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
             Driving industrial growth through high-yield cassava cultivation and advanced value-chain processing for flour, starch, and biofuel inputs.
           </p>
        </div>
      </section>

      {/* Industrial Processing */}
      <section className="py-24 px-4 md:px-8 bg-surface">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">From Roots <br />to Gold.</h2>
                  <p className="text-ink/60 text-lg">Our Cassava division is the engine of Stackston Manufacturing, converting thousands of tons of raw roots into high-value industrial products daily.</p>
               </div>

               <div className="space-y-8">
                  {[
                    { icon: Factory, title: 'HQCF Production', desc: 'High Quality Cassava Flour (HQCF) for industrial bakery and snack manufacturing.' },
                    { icon: FlaskConical, title: 'Industrial Starch', desc: 'Premium grade starch for pharmaceutical, textile, and paper industries.' },
                    { icon: Zap, title: 'Solar Dehydration', desc: 'Low-carbon footprint drying processes ensuring uniform moisture levels.' },
                    { icon: Recycle, title: 'Waste-to-Energy', desc: 'Peel and liquid waste converted into organic fertilizer and biogas.' },
                  ].map((tech, i) => (
                    <div key={i} className="flex space-x-6">
                       <div className="flex-shrink-0 w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center">
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

            <div className="bg-primary p-12 rounded-[3rem] text-white space-y-10">
               <div className="space-y-2">
                  <h3 className="text-3xl font-bold">Facility Statistics</h3>
                  <p className="text-white/60">Real-time throughput metrics for our Lagos hub.</p>
               </div>
               
               <div className="space-y-8">
                  {[
                    { label: 'Milling Capacity', value: '500 Tons/Day', percent: 85 },
                    { label: 'Export Quality Rate', value: '99.8%', percent: 99 },
                    { label: 'Energy Self-Sufficiency', value: '65% (Solar/Bio)', percent: 65 },
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex justify-between items-end">
                          <span className="text-sm font-bold text-white/80">{stat.label}</span>
                          <span className="text-accent font-black">{stat.value}</span>
                       </div>
                       <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: `${stat.percent}%` }}
                             className="bg-accent h-full" 
                          />
                       </div>
                    </div>
                  ))}
               </div>

               <div className="pt-6">
                  <Link to="/manufacturing" className="w-full py-5 bg-white text-primary rounded-2xl font-bold flex items-center justify-center space-x-2">
                     <span>View Manufacturing Specs</span>
                     <ArrowRight className="w-5 h-5" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* Sustainable Agriculture */}
      <section className="py-24 px-4 md:px-8">
         <div className="max-w-7xl mx-auto space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: 'Soil Enrichment', desc: 'Using proprietary organic bio-char to maintain multi-cycle soil health without heavy chemicals.' },
                 { title: 'Varietal Purity', desc: 'Focusing on PROVIT-A and industrial-grade high-starch varieties.' },
                 { title: 'Smallholder Hub', desc: 'Empowering 2,000+ local farmers through our industrial outgrower schemes.' },
               ].map((item, i) => (
                 <div key={i} className="border-l-4 border-accent pl-8 py-4 space-y-4">
                    <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                    <p className="text-ink/60 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>

            <div className="relative rounded-[4rem] overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                  <Link to="/wholesale" className="px-12 py-6 bg-white text-primary text-xl font-black rounded-3xl hover:bg-accent transition-all shadow-2xl">
                     Request Industrial Starch Quote
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

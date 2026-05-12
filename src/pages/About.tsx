import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, ShieldCheck, Globe2, Leaf, BarChart3, ArrowRight, CheckCircle2, History, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590674116499-fa3f249a9980?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl space-y-8">
           <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm">Our Legacy & Mission</span>
           <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">Stackston <br />Industries.</h1>
           <p className="text-xl text-white/70 font-light max-w-2xl leading-relaxed">
             A vertically integrated industrial agrobusiness focused on high-yield cultivation, advanced manufacturing, and global supply chain excellence.
           </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-4 md:px-8 bg-surface">
         <div className="max-w-7xl mx-auto space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-primary">Decentralized Production, <br />Centralized Excellence.</h2>
                  <p className="text-lg text-ink/70 leading-relaxed">
                    We combine localized smallholder networks with centralized industrial processing hubs. This model ensures community empowerment while maintaining the rigid quality control required for international exports.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <span className="text-3xl font-black text-secondary">5k+</span>
                        <p className="text-xs font-bold uppercase tracking-widest text-ink/40">Active Hectares</p>
                     </div>
                     <div className="space-y-2">
                        <span className="text-3xl font-black text-secondary">15+</span>
                        <p className="text-xs font-bold uppercase tracking-widest text-ink/40">Global Trade Routes</p>
                     </div>
                  </div>
               </div>
               <div className="relative">
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                     <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 md:px-8">
         <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
               <h2 className="text-4xl font-bold text-primary">The Stackston Invariants</h2>
               <p className="text-ink/60">The core principles that guide every seed planted and every unit shipped.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { icon: ShieldCheck, title: 'Integrity', desc: 'Total transparency from soil analysis to final packaging certificates.' },
                 { icon: Zap, title: 'Innovation', desc: 'Solar-powered irrigation and IoT-driven yield prediction models.' },
                 { icon: Globe2, title: 'Impact', desc: 'Creating measurable economic growth for rural farming clusters.' },
               ].map((v, i) => (
                 <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all space-y-6">
                    <div className="w-14 h-14 bg-surface flex items-center justify-center rounded-2xl">
                       <v.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{v.title}</h3>
                    <p className="text-ink/60 leading-relaxed">{v.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* History */}
      <section className="py-24 px-4 md:px-8 bg-primary text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto space-y-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
               <h2 className="text-4xl md:text-5xl font-bold">Our Growth Timeline.</h2>
               <div className="w-full md:w-1/3 bg-white/10 h-1 rounded-full relative">
                  <div className="absolute top-0 left-0 w-3/4 h-full bg-accent" />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                 { year: '2016', title: 'The Genesis', desc: 'Started with 10 hectares of pepper cultivation in Northern Nigeria.' },
                 { year: '2019', title: 'Industrial Shift', desc: 'Launch of the first cassava processing hub in Lagos state.' },
                 { year: '2022', title: 'Global Gateway', desc: 'Achieved ISO 22000 certification and first intercontinental export.' },
                 { year: '2026', title: 'Conglomerate', desc: 'Expanding into livestock 2.0 and industrial packaging services.' },
               ].map((t, i) => (
                 <div key={i} className="space-y-4">
                    <span className="text-3xl font-black text-accent">{t.year}</span>
                    <h4 className="font-bold text-xl">{t.title}</h4>
                    <p className="text-sm text-white/60 leading-relaxed">{t.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 px-4 md:px-8">
         <div className="max-w-5xl mx-auto text-center space-y-12 bg-surface rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 border-t-8 border-r-8 border-accent -translate-x-4 translate-y-4 opacity-20" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Join the Industrial <br />Agriculture Revolution.</h2>
            <p className="text-xl text-ink/60 max-w-2xl mx-auto">We are always looking for visionary partners, agronomic experts, and industrial innovators.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link to="/contact" className="px-10 py-5 bg-primary text-white rounded-2xl font-bold hover:bg-secondary transition-all shadow-2xl">
                  Connect with Us
               </Link>
               <Link to="/wholesale" className="px-10 py-5 border-2 border-primary text-primary rounded-2xl font-bold hover:bg-white transition-all">
                  Partner Programs
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}

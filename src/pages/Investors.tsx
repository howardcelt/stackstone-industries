import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, TrendingUp, ShieldCheck, Globe2, PieChart, Users, Building2, Briefcase, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Investors() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-32 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30 grayscale" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl space-y-8">
           <div className="inline-flex items-center space-x-2 bg-accent text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
              <TrendingUp className="w-4 h-4" />
              <span>Investment & Growth</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">Fueling Industrial <br />Agriculture.</h1>
           <p className="text-xl text-white/70 font-light max-w-2xl leading-relaxed">
             Partner with Stackston Industries. We are building a high-growth, vertically integrated agribusiness ecosystem that addresses global food security while delivering stable returns.
           </p>
           <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-5 bg-white text-primary rounded-2xl font-bold hover:bg-accent transition-all shadow-2xl">
                 Investor Relations
              </Link>
           </div>
        </div>
      </section>

      {/* Why Invest Grid */}
      <section className="py-24 px-4 md:px-8 bg-surface">
         <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
               <h2 className="text-4xl font-bold text-primary">Strategic Value Pillars</h2>
               <p className="text-ink/60">Our growth model is built on tangible assets, industrial capacity, and export-driven revenue.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { icon: Globe2, title: 'Export Driven', desc: 'Revenue generated in stable global currencies through institutional export contracts.' },
                 { icon: ShieldCheck, title: 'Asset Backed', desc: 'Investment anchored by thousands of hectares of arable land and state-of-the-art factories.' },
                 { icon: PieChart, title: 'Diversified', desc: 'Integrated portfolio across livestock, cash crops, and value-added manufacturing.' },
               ].map((item, i) => (
                 <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-gray-100 space-y-6 hover:shadow-xl transition-all group">
                    <div className="w-16 h-16 bg-surface flex items-center justify-center rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                       <item.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                    <p className="text-ink/60 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Performance Section */}
      <section className="py-24 px-4 md:px-8">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">Scale-Tested <br />Sustainability.</h2>
                  <p className="text-ink/60 text-lg">Stackston has transitioned from a localized farm to an industrial leader. Our track record shows consistent year-on-year capacity expansion.</p>
               </div>

               <div className="space-y-6">
                  {[
                    '40% Annualized Capacity Growth',
                    'Zero-Waste Circular Processing Model',
                    'Strategic Partnership with National Port Authorities',
                    'Modern ESG Documentation Compliance',
                    'Tech-Enabled Yield Prediction Models'
                  ].map((list, i) => (
                    <div key={i} className="flex items-center space-x-4">
                       <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-secondary" />
                       </div>
                       <span className="font-bold text-primary">{list}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-primary text-white p-12 rounded-[4rem] space-y-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent opacity-10 rounded-bl-[100%] pointer-events-none" />
               
               <div className="space-y-2">
                  <h3 className="text-3xl font-bold">Financial Roadmap</h3>
                  <p className="text-white/60 uppercase tracking-widest text-xs font-bold">Confidential - 2026/28</p>
               </div>

               <div className="space-y-8">
                  <div className="flex flex-col gap-4">
                     <div className="flex justify-between items-end">
                        <span className="font-bold text-white/80">Infrastructure Expansion</span>
                        <span className="text-xl font-black text-accent">$12M Capex</span>
                     </div>
                     <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                        <div className="bg-accent h-full w-[65%]" />
                     </div>
                  </div>
                  <div className="flex flex-col gap-4">
                     <div className="flex justify-between items-end">
                        <span className="font-bold text-white/80">Export Volume Target</span>
                        <span className="text-xl font-black text-accent">50k Tons/Year</span>
                     </div>
                     <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full w-[40%]" />
                     </div>
                  </div>
               </div>

               <div className="pt-8">
                  <Link to="/contact" className="w-full py-5 bg-white text-primary rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-xl hover:bg-accent transition-all">
                     <span>Request Prospectus</span>
                     <Briefcase className="w-5 h-5" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface">
         <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">Become a Growth Partner.</h2>
            <p className="text-xl text-ink/60 font-light">Stackston is open to strategic partnerships, institutional investment, and private growth capital to accelerate our continental expansion.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link to="/contact" className="px-10 py-5 bg-primary text-white rounded-2xl font-bold shadow-2xl hover:scale-105 transition-transform">
                  Schedule Private Briefing
               </Link>
               <a href="mailto:investors@stackston.com" className="px-10 py-5 border-2 border-primary text-primary rounded-2xl font-bold hover:bg-white transition-transform">
                  Contact Investor Relations
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}

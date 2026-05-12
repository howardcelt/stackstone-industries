import React from 'react';
import { Factory, ShieldCheck, Zap, Truck, Package, Settings, BarChart3, ArrowRight, CheckCircle2, FlaskConical } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

export default function Manufacturing() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-32 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
             className="w-full h-full object-cover opacity-40 grayscale" 
             referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl space-y-8">
           <div className="inline-flex items-center space-x-2 bg-accent text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
              <Settings className="w-4 h-4" />
              <span>Industrial Processing</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Food Processing & <br />Manufacturing at Scale.</h1>
           <p className="text-xl text-white/70 font-light max-w-2xl leading-relaxed">
             Our state-of-the-art facilities bridge the gap between fresh harvest and value-added retail products, ensuring maximum hygiene and global export compliance.
           </p>
           <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-5 bg-white text-primary rounded-2xl font-bold hover:bg-accent transition-all shadow-2xl">
                 Manufacturing Contract
              </Link>
           </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-4 md:px-8 bg-surface">
         <div className="max-w-7xl mx-auto space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { icon: FlaskConical, title: 'R&D Lab', desc: 'Customized recipe formulation and food science testing for new products.' },
                    { icon: Factory, title: 'Bulk Processing', desc: 'High-throughput lines for drying, milling, and paste-making.' },
                    { icon: ShieldCheck, title: 'ISO Standard', desc: 'Full compliance with global food safety (HACCP) and local NAFDAC standards.' },
                    { icon: Package, title: 'Smart Packaging', desc: 'Automated nitrogen-flushed and vacuum sealing for maximum shelf life.' },
                  ].map((cap, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all space-y-4">
                       <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-2xl">
                          <cap.icon className="w-6 h-6 text-primary" />
                       </div>
                       <h3 className="text-xl font-bold text-primary">{cap.title}</h3>
                       <p className="text-ink/60">{cap.desc}</p>
                    </div>
                  ))}
               </div>
               <div className="bg-primary text-white p-12 rounded-[3rem] flex flex-col justify-between">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold">Industrial <br />Capacity.</h3>
                    <ul className="space-y-4">
                       {[
                         '2,000kg/hr Milling Capacity',
                         'Solar-Powered Dehydration',
                         'Automated Sachet/Bottle Lines',
                         'Cold Chain Storage Integration',
                         'Warehouse Management (WMS)',
                       ].map((item, i) => (
                         <li key={i} className="flex items-center space-x-3 text-white/80">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                            <span>{item}</span>
                         </li>
                       ))}
                    </ul>
                  </div>
                  <div className="pt-8">
                     <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Current Utilization</p>
                     <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <div className="bg-accent h-full w-[82%]" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 px-4 md:px-8 overflow-hidden">
         <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
               <h2 className="text-4xl font-bold text-primary">Our Workflow Invariant</h2>
               <p className="text-ink/60 max-w-2xl mx-auto">From intake to dispatch, our process is mathematically optimized for quality and speed.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 relative">
               <div className="absolute top-1/2 left-0 w-full h-1 bg-surface hidden lg:block -z-10" />
               {[
                 { title: 'Intake & QA', desc: 'Incoming raw materials undergo immediate lab testing.' },
                 { title: 'Processing', desc: 'Optimized milling or drying at specific temperature curves.' },
                 { title: 'Fortification', desc: 'Addition of nutrients or required additives per spec.' },
                 { title: 'Packaging', desc: 'Secure, brand-aligned containment and labeling.' },
                 { title: 'Dispatch', desc: 'Export-ready palletization and logistics routing.' },
               ].map((step, i) => (
                 <div key={i} className="flex-1 bg-white border border-gray-100 p-8 rounded-3xl relative hover:translate-y-[-10px] transition-transform shadow-sm">
                    <div className="absolute -top-4 left-8 bg-accent text-primary w-8 h-8 rounded-lg flex items-center justify-center font-bold">{i+1}</div>
                    <h4 className="font-bold text-primary mb-2 mt-2">{step.title}</h4>
                    <p className="text-sm text-ink/60">{step.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-surface">
         <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-20 text-center space-y-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-accent -translate-x-2 -translate-y-2 opacity-50" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-accent translate-x-2 translate-y-2 opacity-50" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Partner with a Modern <br />Production Hub.</h2>
            <p className="text-xl text-ink/60 max-w-2xl mx-auto">
              Whether you need private label packaging or industrial raw materials at scale, our manufacturing division is ready to deliver.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link to="/contact" className="px-10 py-5 bg-primary text-white rounded-2xl font-bold hover:bg-secondary transition-all">
                  Request Factory Tour
               </Link>
               <a href={COMPANY_INFO.whatsapp} className="px-10 py-5 border-2 border-primary text-primary rounded-2xl font-bold hover:bg-surface transition-all">
                  Connect on WhatsApp
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}

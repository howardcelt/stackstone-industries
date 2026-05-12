import React from 'react';
import { motion } from 'motion/react';
import { Truck, ShieldCheck, Zap, Globe2, MapPin, ArrowRight, CheckCircle2, Building2, Users, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Distributor() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl space-y-8">
           <div className="inline-flex items-center space-x-2 bg-accent text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
              <Truck className="w-4 h-4" />
              <span>Partner Program</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">Scale with Stackston.</h1>
           <p className="text-xl text-white/70 font-light max-w-2xl leading-relaxed">
             Join our network of elite distributors. We provide the products, logistics, and marketing support to help you dominate your local food supply market.
           </p>
           <div className="pt-4">
              <a href="#apply" className="px-10 py-5 bg-accent text-primary rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-2xl">
                 Apply for Distributorship
              </a>
           </div>
        </div>
      </section>

      {/* Program Tiers */}
      <section className="py-24 px-4 md:px-8 bg-surface">
         <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
               <h2 className="text-4xl font-bold text-primary">Distributor Tiers</h2>
               <p className="text-ink/60">Choose the partnership level that aligns with your business capacity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { 
                   title: 'Regional Merchant', 
                   volume: '2-5 Tons / Month', 
                   desc: 'Best for local warehouse operators supplying city-wide retail clusters.',
                   accent: 'bg-stone-50',
                   benefits: ['Regional Exclusivity', 'Marketing Collateral', '48h Priority Delivery']
                 },
                 { 
                   title: 'National Stockist', 
                   volume: '10-50 Tons / Month', 
                   desc: 'Designed for large-scale logistics companies with nation-wide reach.',
                   accent: 'bg-primary text-white border-none shadow-[0_32px_64px_-12px_rgba(0,0,0,0.35)]',
                   benefits: ['Volume Rebates', 'Dedicated Supply Line', 'ERP Integration', 'Quarterly Incentives']
                 },
                 { 
                   title: 'Export Partner', 
                   volume: 'Bulk Container Loads', 
                   desc: 'For international traders moving African agrobusiness to global markets.',
                   accent: 'bg-stone-50',
                   benefits: ['Custom Labeling', 'FOB/CIF Pricing', 'Compliance Handiing', 'Direct Factory Lead']
                 }
               ].map((tier, i) => (
                 <div key={i} className={`p-12 rounded-[3.5rem] border border-gray-100 flex flex-col justify-between space-y-10 group transition-all hover:-translate-y-4 ${tier.accent}`}>
                    <div className="space-y-4">
                       <h3 className="text-3xl font-bold">{tier.title}</h3>
                       <p className="opacity-60 text-sm leading-relaxed">{tier.desc}</p>
                       <div className="pt-4">
                          <span className="block text-xs font-black uppercase tracking-widest opacity-40">Minimum Commit</span>
                          <span className={`text-2xl font-black ${tier.accent.includes('primary') ? 'text-accent' : 'text-primary'}`}>{tier.volume}</span>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <h4 className="text-xs font-black uppercase tracking-widest opacity-40">Partner Benefits</h4>
                       <ul className="space-y-3">
                          {tier.benefits.map((b, idx) => (
                            <li key={idx} className="flex items-center space-x-3 text-sm font-bold">
                               <CheckCircle2 className={`w-4 h-4 ${tier.accent.includes('primary') ? 'text-accent' : 'text-secondary'}`} />
                               <span>{b}</span>
                            </li>
                          ))}
                       </ul>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Support System */}
      <section className="py-24 px-4 md:px-8">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary">Unrivaled Partner <br />Success Infrastructure.</h2>
                  <p className="text-ink/60 text-lg leading-relaxed">Unlike traditional suppliers, Stackston acts as your back-office partner. We invest in your growth because it drives our industrial output.</p>
               </div>

               <div className="space-y-8">
                  {[
                    { icon: ShieldCheck, title: 'Price Stability', desc: 'Lock in seasonal prices with 12-month forward contracts to protect your margins.' },
                    { icon: Zap, title: 'Live Inventory', desc: 'Access our real-time manufacturing portal to see upcoming harvest and processing schedules.' },
                    { icon: Globe2, title: 'Trade Financing', desc: 'Flexible credit terms and bridge financing for verified high-volume national stockists.' },
                  ].map((s, i) => (
                    <div key={i} className="flex gap-6 group">
                       <div className="w-14 h-14 bg-surface flex items-center justify-center rounded-2xl group-hover:bg-accent transition-colors shrink-0">
                          <s.icon className="w-6 h-6 text-primary" />
                       </div>
                       <div className="space-y-1 pt-1">
                          <h4 className="font-bold text-xl text-primary">{s.title}</h4>
                          <p className="text-ink/60">{s.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="relative">
               <div className="aspect-[3/4] rounded-[4rem] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1494412574742-97bcd7517525?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -bottom-8 -left-8 bg-primary text-white p-12 rounded-[3rem] shadow-2xl space-y-6 max-w-sm">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                     <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Dedicated Manager</h3>
                  <p className="text-sm opacity-60">Every distributor is assigned a direct account lead for 24/7 support and logistics coordination.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Inquiry Form */}
      <section id="apply" className="py-24 px-4 md:px-8 bg-surface">
         <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-gray-100">
            <div className="text-center space-y-4 mb-12">
               <h2 className="text-3xl md:text-5xl font-bold text-primary">Apply for Partnership</h2>
               <p className="text-ink/60">Take the first step towards industrial supply leadership.</p>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-ink/40">Owner/Manager Name</label>
                  <input className="w-full px-6 py-4 bg-surface rounded-2xl outline-none focus:ring-2 focus:ring-primary font-bold" placeholder="Full name" />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-ink/40">Business Legal Name</label>
                  <input className="w-full px-6 py-4 bg-surface rounded-2xl outline-none focus:ring-2 focus:ring-primary font-bold" placeholder="Enter company name" />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-ink/40">Contact Email</label>
                  <input className="w-full px-6 py-4 bg-surface rounded-2xl outline-none focus:ring-2 focus:ring-primary font-bold" placeholder="name@company.com" />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-ink/40">Phone Number</label>
                  <input className="w-full px-6 py-4 bg-surface rounded-2xl outline-none focus:ring-2 focus:ring-primary font-bold" placeholder="+234..." />
               </div>
               <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-ink/40">Geographic Interest</label>
                  <input className="w-full px-6 py-4 bg-surface rounded-2xl outline-none focus:ring-2 focus:ring-primary font-bold" placeholder="States or countries you cover" />
               </div>
               <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-ink/40">Primary Product Interest</label>
                  <select className="w-full px-6 py-4 bg-surface rounded-2xl outline-none focus:ring-2 focus:ring-primary font-bold appearance-none">
                     <option>Pepper & Spice Products</option>
                     <option>Industrial Cassava (Starch/HQCF)</option>
                     <option>Goat Meat & Livestock</option>
                     <option>Export Commodity (Bulk)</option>
                  </select>
               </div>
               <button className="md:col-span-2 py-5 bg-primary text-white rounded-2xl font-bold hover:bg-secondary transition-all shadow-xl text-lg mt-4">
                  Submit Application
               </button>
            </form>
         </div>
      </section>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, MessageSquare, Send, Clock, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-primary pt-20 pb-24 text-white px-4 md:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1516383740770-fbcc5cbece03?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
           <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Get In Touch</span>
           <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Connect with <br />Stackston.</h1>
           <p className="text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
             From industrial wholesale inquiries to farm visit requests, our team is ready to assist you.
           </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 px-4 md:px-8">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Info Cards */}
            <div className="lg:col-span-2 space-y-8">
               <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-primary">Global Contact Hub</h2>
                  <p className="text-ink/60">We target sub-4-hour response times during industrial business hours.</p>
               </div>

               <div className="space-y-6">
                  {[
                    { icon: MapPin, label: 'Headquarters', value: 'Industrial Way, Ikeja, Lagos', sub: 'Nigeria Division' },
                    { icon: Phone, label: 'Business Line', value: COMPANY_INFO.phone, sub: 'Mon-Sat, 8am-6pm' },
                    { icon: Mail, label: 'Email', value: COMPANY_INFO.email, sub: 'General & Support' },
                    { icon: Clock, label: 'Response Target', value: '4 Hours', sub: 'For verified inquiries' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-6 p-8 bg-surface rounded-[2.5rem] border border-gray-100 hover:border-accent transition-all group">
                       <div className="w-12 h-12 bg-white flex items-center justify-center rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                          <item.icon className="w-6 h-6" />
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-black uppercase tracking-widest text-ink/40">{item.label}</p>
                          <p className="font-bold text-primary text-lg">{item.value}</p>
                          <p className="text-xs text-ink/60">{item.sub}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white p-8 md:p-16 rounded-[3.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-accent opacity-10 rounded-bl-full pointer-events-none" />
               
               <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-ink/60 ml-1">Your Name</label>
                        <input className="w-full px-6 py-4 bg-surface border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary font-medium" placeholder="Full name" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-ink/60 ml-1">Email Address</label>
                        <input className="w-full px-6 py-4 bg-surface border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary font-medium" placeholder="email@company.com" />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-bold text-ink/60 ml-1">Subject of Inquiry</label>
                     <select className="w-full px-6 py-4 bg-surface border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary font-medium appearance-none">
                        <option>General Partnership</option>
                        <option>Wholesale Order</option>
                        <option>Export Quotation</option>
                        <option>Manufacturing Request</option>
                        <option>Investment Inquiry</option>
                        <option>Career Opportunities</option>
                     </select>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-bold text-ink/60 ml-1">Detailed Message</label>
                     <textarea className="w-full px-6 py-8 bg-surface border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary font-medium resize-none" rows={6} placeholder="Tell us about your requirements or questions..." />
                  </div>

                  <button className="w-full py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center space-x-3 text-lg hover:bg-secondary transition-all shadow-xl group">
                     <span>Transmit Message</span>
                     <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
               </form>
            </div>
         </div>
      </section>

      {/* Map Placeholder/CTA */}
      <section className="py-24 px-4 md:px-8 bg-surface">
         <div className="max-w-7xl mx-auto bg-stone-900 rounded-[3.5rem] p-8 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/grid.png')]" />
            <div className="max-w-xl space-y-6 relative z-10">
               <h2 className="text-3xl md:text-5xl font-bold">Visit Our <br />Industrial Hub.</h2>
               <p className="text-white/60 text-lg">Schedule a factory tour or farm visit to see our industrial processes and quality control systems in person.</p>
               <button className="inline-flex items-center space-x-2 bg-accent text-primary px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-2xl">
                  <Building2 className="w-5 h-5" />
                  <span>Request Facility Tour</span>
               </button>
            </div>
            <div className="w-full md:w-80 h-80 bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center relative z-10 backdrop-blur-md">
               <div className="text-center space-y-4">
                  <Globe className="w-12 h-12 text-accent mx-auto animate-pulse" />
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40">Global Logistics <br />Ready for Dispatch</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

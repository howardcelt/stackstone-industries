import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Globe2, Package, Truck, BarChart3, Users, Building2, Mail, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Wholesale() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1586771107445-d3ca88fb3f00?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl space-y-8">
           <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm">Industrial Supply Chain</span>
           <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Wholesale & Distributor Program</h1>
           <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
             Scale your food business with Stackston Industries. We provide stable, high-volume agricultural supply to restaurants, retailers, and industrial processors globally.
           </p>
           <div className="pt-4">
              <a href="#apply" className="px-10 py-5 bg-accent text-primary rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-2xl">
                 Apply for Partnership
              </a>
           </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-4 md:px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { icon: BarChart3, title: 'Tiered Pricing', desc: 'Custom price lists based on volume commitments and contract length.' },
             { icon: Truck, title: 'Priority Logistics', desc: 'Dedicated cold-chain and dry logistics for wholesale partners.' },
             { icon: CheckCircle2, title: 'Quality Guarantee', desc: 'Every batch comes with a certificate of quality and lab report.' },
             { icon: Package, title: 'White Labeling', desc: 'Packaging and branding solutions for your private label needs.' },
             { icon: Users, title: 'Dedicated Manager', desc: 'A direct point of contact for all your large-scale orders.' },
             { icon: Globe2, title: 'Export Support', desc: 'Full customs and documentation handling for international buyers.' },
           ].map((benefit, i) => (
             <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all space-y-4">
                <div className="w-12 h-12 bg-surface flex items-center justify-center rounded-2xl">
                   <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">{benefit.title}</h3>
                <p className="text-ink/60 leading-relaxed">{benefit.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">Simple Onboarding <br />for Large Scale Growth.</h2>
              <div className="space-y-6">
                 {[
                   { step: '01', title: 'Application', desc: 'Fill out our partnership form with your business details and volume requirements.' },
                   { step: '02', title: 'KYC & Approval', desc: 'Our compliance team reviews your business and verifies trade credentials.' },
                   { step: '03', title: 'Portal Access', desc: 'Get access to our live inventory and B2B pricing portal.' },
                   { step: '04', title: 'Direct Fulfillment', desc: 'Automated recurring orders or manual bulk purchases with credit options.' },
                 ].map((s, i) => (
                   <div key={i} className="flex gap-6 items-start">
                      <span className="text-3xl font-black text-accent/30">{s.step}</span>
                      <div className="space-y-1 pt-1">
                        <h4 className="font-bold text-xl text-primary">{s.title}</h4>
                        <p className="text-ink/60">{s.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-primary relative">
                 <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-60" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[2.5rem] text-white text-center max-w-sm">
                       <BarChart3 className="w-16 h-16 mx-auto mb-6 text-accent" />
                       <h3 className="text-2xl font-bold mb-4">Enterprise Grade</h3>
                       <p className="text-sm opacity-80">Full ERP integration available for high-volume automated replenishments.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="apply" className="py-24 px-4 md:px-8 bg-surface">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-8">
               <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-primary">Let's Discuss <br />Business.</h2>
                  <p className="text-ink/60">Our partnership team targets 4-hour response times for verified business inquiries.</p>
               </div>
               
               <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-6 bg-white rounded-3xl border border-gray-100">
                     <Building2 className="w-8 h-8 text-secondary" />
                     <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-ink/40">Headquarters</p>
                        <p className="font-bold text-primary text-lg">Industrial Way, Lagos</p>
                     </div>
                  </div>
                  <div className="flex items-center space-x-4 p-6 bg-white rounded-3xl border border-gray-100">
                     <Phone className="w-8 h-8 text-secondary" />
                     <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-ink/40">Business Line</p>
                        <p className="font-bold text-primary text-lg">+234 800 STACKSTON</p>
                     </div>
                  </div>
                  <div className="flex items-center space-x-4 p-6 bg-white rounded-3xl border border-gray-100">
                     <Mail className="w-8 h-8 text-secondary" />
                     <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-ink/40">Wholesale Email</p>
                        <p className="font-bold text-primary text-lg">wholesale@stackston.com</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl space-y-8 border border-gray-100">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-ink/60">Full Name</label>
                      <input className="w-full px-6 py-4 bg-surface border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary" placeholder="Enter name" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-ink/60">Company Name</label>
                      <input className="w-full px-6 py-4 bg-surface border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary" placeholder="Business name" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-ink/60">Email Address</label>
                      <input className="w-full px-6 py-4 bg-surface border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary" placeholder="work@company.com" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-ink/60">Phone Number</label>
                      <input className="w-full px-6 py-4 bg-surface border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary" placeholder="+234..." />
                   </div>
                   <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold text-ink/60">Interest Area</label>
                      <select className="w-full px-6 py-4 bg-surface border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary appearance-none">
                         <option>Wholesale Distribution (Domestic)</option>
                         <option>International Export Partnership</option>
                         <option>Manufacturing Contact</option>
                         <option>Retail Stockist</option>
                      </select>
                   </div>
                   <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold text-ink/60">Requirements Summary</label>
                      <textarea className="w-full px-6 py-4 bg-surface border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary" rows={4} placeholder="Tell us about your volume needs..." />
                   </div>
                   <button className="md:col-span-2 py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center space-x-2 text-lg hover:bg-secondary transition-colors shadow-xl">
                      <span>Submit Inquiry</span>
                      <MessageSquare className="w-5 h-5" />
                   </button>
                </form>
            </div>
         </div>
      </section>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Milk, Beef, Users, ShieldCheck, Truck, BarChart3, ArrowRight, CheckCircle2, History, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GoatFarm() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-50" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl space-y-8">
           <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm">Industrial Livestock Division</span>
           <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">Goat Farm & <br />Commercial Rearing.</h1>
           <p className="text-xl text-white/70 font-light max-w-2xl leading-relaxed">
             Our livestock centers focus on the breeding and supply of premium commercial goats, optimized for meat quality, leather production, and large-scale industrial supply.
           </p>
           <div className="pt-4">
              <Link to="/wholesale" className="px-10 py-5 bg-accent text-primary rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-2xl">
                 Livestock Inquiry
              </Link>
           </div>
        </div>
      </section>

      {/* Breeding Standards */}
      <section className="py-24 px-4 md:px-8 bg-surface">
         <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
               <h2 className="text-4xl font-bold text-primary">Superior Husbandry Standards</h2>
               <p className="text-ink/60">We combine traditional care with modern veterinary science to ensure the healthiest livestock in West Africa.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { icon: Heart, title: 'Health First', desc: 'Routine veterinary screening and automated immunization tracking for every animal.' },
                 { icon: ShieldCheck, title: 'Bio-Security', desc: 'Strict facility access control to prevent disease spread and ensure organic growth.' },
                 { icon: Milk, title: 'Nutrition Matrix', desc: 'Precision-blended feed based on age and weight to optimize muscle development.' },
               ].map((item, i) => (
                 <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 space-y-6 hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-surface flex items-center justify-center rounded-2xl">
                       <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                    <p className="text-ink/60 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 px-4 md:px-8">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1543336495-2cc0f7f185f2?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent rounded-full flex flex-col items-center justify-center text-primary font-bold shadow-2xl invisible lg:flex">
                  <span className="text-3xl">15k+</span>
                  <span className="text-[10px] uppercase tracking-widest text-center px-4">Animals in Rotation</span>
               </div>
            </div>
            <div className="order-1 lg:order-2 space-y-12">
               <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary">Industrial Slaughterhouse <br />& Cold Storage.</h2>
                  <p className="text-ink/60 text-lg">Our integrated facility allows us to move from pasture to vacuum-sealed frozen meat in under 6 hours, maintaining peak freshness.</p>
               </div>

               <div className="space-y-6">
                  {[
                    'Automated cold-chain logistics fleet',
                    'ISO-Certified slaughtering protocols',
                    'Niche leather hide processing units',
                    'Specialized dairy division (R&D Stage)',
                    'Real-time weight monitoring IoT integration'
                  ].map((list, i) => (
                    <div key={i} className="flex items-center space-x-4">
                       <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-secondary" />
                       </div>
                       <span className="font-bold text-primary">{list}</span>
                    </div>
                  ))}
               </div>

               <Link to="/products" className="inline-flex items-center space-x-2 text-primary font-bold border-b-2 border-primary pb-2 hover:text-secondary hover:border-secondary transition-colors">
                  <span>Explore Meat Products</span>
                  <ArrowRight className="w-5 h-5" />
               </Link>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white">
         <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Partner with Our Commercial <br />Livestock Network.</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              We supply retail chains, hotels, and export traders with high-volume livestock and processed meat products on recurring contracts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link to="/wholesale" className="px-10 py-5 bg-accent text-primary rounded-2xl font-bold hover:bg-white transition-all shadow-2xl">
                  Contract Farming Inquiry
               </Link>
               <Link to="/contact" className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all">
                  Visit the Ranch
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}

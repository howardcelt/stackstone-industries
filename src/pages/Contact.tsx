import { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'general' | 'wholesale' | 'export'>('general');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real logic would be here
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Layout>
      <div className="bg-surface-light py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col gap-12">
               <div>
                  <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block underline underline-offset-4">Get in Touch</span>
                  <h1 className="text-4xl md:text-6xl font-display font-bold text-ink leading-tight mb-6">Let's build a sustainable <span className="text-primary italic">Global</span> future.</h1>
                  <p className="text-lg text-gray-500 font-light leading-relaxed">
                    Whether you are looking for premium agricultural supplies, industrial processing contracts, or export partnerships, our team is ready to assist.
                  </p>
               </div>

               <div className="space-y-8">
                  <div className="flex gap-6 items-start group">
                     <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all cursor-pointer">
                        <Phone size={24} />
                     </div>
                     <div>
                        <h4 className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1">Call Us Anywhere</h4>
                        <p className="text-xl font-display font-bold text-ink">+234 800 STACKSTON</p>
                        <p className="text-sm text-gray-400">Available Mon-Fri, 8am - 6pm WAT</p>
                     </div>
                  </div>
                  <div className="flex gap-6 items-start group">
                     <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all cursor-pointer">
                        <Mail size={24} />
                     </div>
                     <div>
                        <h4 className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1">Email Our Desk</h4>
                        <p className="text-xl font-display font-bold text-ink">hello@stackston.com</p>
                        <p className="text-sm text-gray-400">Responses within 24 business hours.</p>
                     </div>
                  </div>
                  <div className="flex gap-6 items-start group">
                     <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all cursor-pointer">
                        <MapPin size={24} />
                     </div>
                     <div>
                        <h4 className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1">Global HQ</h4>
                        <p className="text-xl font-display font-bold text-ink italic leading-tight">Victoria Island Corporate Center, Lagos, Nigeria</p>
                     </div>
                  </div>
               </div>

               <div className="mt-8 p-8 bg-ink rounded-[40px] text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10" />
                  <h4 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                     <Globe className="text-accent" size={20} /> Regional Presence
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <p className="text-[10px] uppercase font-bold text-accent tracking-widest mb-1">West Africa</p>
                        <p className="text-xs font-semibold text-gray-300">Nigeria, Ghana, Ivory Coast</p>
                     </div>
                     <div>
                        <p className="text-[10px] uppercase font-bold text-accent tracking-widest mb-1">Europe</p>
                        <p className="text-xs font-semibold text-gray-300">United Kingdom, Netherlands</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-[50px] shadow-2xl border border-gray-100 flex flex-col gap-10">
                <div className="flex items-center gap-2 bg-surface-light p-1 rounded-full w-fit border border-gray-200">
                  {(['general', 'wholesale', 'export'] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                        activeTab === tab ? "bg-primary text-white shadow-lg" : "text-gray-400 hover:text-ink"
                      )}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-20 text-center space-y-4"
                    >
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShieldCheck size={40} />
                      </div>
                      <h2 className="text-3xl font-display font-bold text-ink">Inquiry Sent Successfully</h2>
                      <p className="text-gray-500 max-w-sm mx-auto">Your request has been logged in our secure system. A specialized agent from our {activeTab} desk will reach out within 24 hours.</p>
                      <button 
                        type="button" 
                        onClick={() => setSubmitted(false)}
                        className="text-primary font-bold hover:underline mt-4 block mx-auto"
                      >
                        Send another inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 pl-4">Full Name</label>
                        <input required className="w-full bg-surface-light border-none rounded-3xl px-6 py-5 outline-none focus:ring-2 ring-primary/20 transition-all font-medium" placeholder="Alexander Graham" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 pl-4">Work Email</label>
                        <input required type="email" className="w-full bg-surface-light border-none rounded-3xl px-6 py-5 outline-none focus:ring-2 ring-primary/20 transition-all font-medium" placeholder="alex@company.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 pl-4">Phone Number</label>
                        <input required type="tel" className="w-full bg-surface-light border-none rounded-3xl px-6 py-5 outline-none focus:ring-2 ring-primary/20 transition-all font-medium" placeholder="+234 ..." />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 pl-4">Company Name</label>
                        <input required className="w-full bg-surface-light border-none rounded-3xl px-6 py-5 outline-none focus:ring-2 ring-primary/20 transition-all font-medium" placeholder="Industries Ltd" />
                      </div>
                      
                      <div className="sm:col-span-2 space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 pl-4">Tell us about your requirements</label>
                        <textarea required rows={4} className="w-full bg-surface-light border-none rounded-[32px] px-6 py-5 outline-none focus:ring-2 ring-primary/20 transition-all font-medium resize-none" placeholder="Details about quantity, logistics, or partnership..." />
                      </div>

                      <div className="sm:col-span-2 pt-4">
                        <button type="submit" className="w-full bg-primary text-white py-6 rounded-3xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 group">
                          Send {activeTab} Inquiry
                          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </form>

                <div className="mt-8 flex items-center justify-center gap-12 pt-8 border-t border-gray-100">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg" alt="Certification" className="h-10 opacity-20 grayscale" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg" alt="Certification" className="h-10 opacity-20 grayscale" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg" alt="Certification" className="h-10 opacity-20 grayscale" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Map Placeholder */}
       <section className="h-[500px] w-full bg-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 grayscale flex items-center justify-center text-gray-400 font-display font-medium text-lg uppercase tracking-[0.5em]">
             Interactive Global Map Placeholder
          </div>
          <div className="absolute bottom-10 left-10 bg-white p-6 rounded-3xl shadow-2xl z-10 border border-gray-100 max-w-sm">
             <h4 className="flex items-center gap-2 font-display font-bold text-ink mb-4">
                <MapPin size={20} className="text-accent" /> Our Locations
             </h4>
             <ul className="space-y-4 text-xs">
                <li className="flex flex-col">
                   <span className="font-bold uppercase tracking-wider text-primary">Regional Hub</span>
                   <span className="text-gray-500">Ilaro Industrial Farm Zone, Ogun State</span>
                </li>
                <li className="flex flex-col">
                   <span className="font-bold uppercase tracking-wider text-primary">Cold Storage</span>
                   <span className="text-gray-500">Apapa Logistics Park, Lagos</span>
                </li>
             </ul>
          </div>
       </section>
    </Layout>
  );
}

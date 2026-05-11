import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Layout } from '../components/layout/Layout';
import { Leaf, Package, Globe, ShieldCheck, ArrowRight, BarChart3, TrendingUp, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const FARM_DATA = {
  pepper: {
    title: 'Pepper Cultivation Unit',
    subtitle: 'Premium Habeñero & Chili Production',
    desc: 'Stackston Industries manages one of the largest specialized pepper irrigation systems in West Africa, ensuring year-round supply of export-grade chilies.',
    stats: [
      { label: 'Acreage', val: '1,200+' },
      { label: 'Varieties', val: '5+' },
      { label: 'Annual Yield', val: '15,000 Tons' },
    ],
    features: ['Solar-powered irrigation', 'Organic pest management', 'Zero-waste processing'],
    imgHero: 'https://images.unsplash.com/photo-1588253518678-596bfd6b47e5?auto=format&fit=crop&q=80&w=2670',
    details: 'Our pepper farms utilize advanced hydration mapping and nutrient-dense soil management to produce peppers with high capsaicin content and vibrant color. We specialize in Habeñero, Bird\'s Eye, and Scotch Bonnet varieties.'
  },
  goat: {
    title: 'Commercial Goat Ranching',
    subtitle: 'High-Scale Livestock Breeding & Processing',
    desc: 'Specializing in Boer and Kalahari Red crosses, our livestock division focuses on high-yield meat production and genetic excellence.',
    stats: [
      { label: 'Active Herd', val: '8,000+' },
      { label: 'Feed Source', val: '100% Organic' },
      { label: 'Facility', val: 'Climate Controlled' },
    ],
    features: ['Vaccination compliance', 'Eco-friendly disposal', 'Precision breeding'],
    imgHero: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&q=80&w=2670',
    details: 'The Stackston Goat ranch is a world-class facility where we prioritize animal welfare and data-driven breeding. Our livestock are grass-fed and supplemented with nutrient-rich processed farm waste, creating a circular economy.'
  },
  cassava: {
    title: 'Industrial Cassava Unit',
    subtitle: 'Processing & Value Addition',
    desc: 'From high-quality raw roots to industrial starch and consumer-grade garri, our cassava unit is integrated from farm to shelf.',
    stats: [
      { label: 'Daily Output', val: '500 Tons' },
      { label: 'End Products', val: '12+' },
      { label: 'Industrial Starch', val: '99% Purity' },
    ],
    features: ['Mechanical harvesting', 'Automated peeling lines', 'Vacuum packing'],
    imgHero: 'https://images.unsplash.com/photo-1621236304198-651565bb9dbb?auto=format&fit=crop&q=80&w=2670',
    details: 'Stackston Industries leads the industrialization of cassava processing. We leverage automated machinery for peeling, grating, and frying, significantly reducing human contact and ensuring the highest hygiene levels.'
  },
};

export default function FarmPage() {
  const { type } = useParams<{ type: keyof typeof FARM_DATA }>();
  const data = type ? FARM_DATA[type] : FARM_DATA.pepper;

  if (!data) return <Layout><div className="py-20 text-center">Section not found</div></Layout>;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-ink">
        <div className="absolute inset-0 opacity-40">
          <img src={data.imgHero} alt={data.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
           >
             <span className="text-accent font-bold inline-block mb-4 uppercase tracking-[0.4em] text-xs underline underline-offset-8">Farm Division</span>
             <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tight">{data.title}</h1>
             <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">{data.subtitle}</p>
           </motion.div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-12 bg-surface-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
           {data.stats.map((stat, i) => (
             <div key={i} className="flex flex-col items-center text-center">
               <span className="text-4xl font-display font-bold text-primary mb-1">{stat.val}</span>
               <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
             </div>
           ))}
        </div>
      </section>

      {/* Content & Details */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold text-ink leading-tight">Modernizing Agriculture through <span className="text-primary italic">Industrial Precision</span>.</h2>
              <p className="text-lg text-gray-600 leading-relaxed italic">{data.desc}</p>
              <div className="space-y-4">
                 {data.features.map((f, i) => (
                   <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-50 flex-1">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                         <ShieldCheck size={20} />
                      </div>
                      <span className="font-bold text-ink text-sm sm:text-base">{f}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-50 transition-opacity group-hover:opacity-100" />
              <img src={data.imgHero} alt="" className="rounded-[40px] shadow-2xl relative z-10 w-full aspect-video object-cover" />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[30px] shadow-xl z-20 border border-gray-100 max-w-xs transition-transform group-hover:-translate-y-2">
                 <h4 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                    <Zap className="text-accent" /> Eco-Efficiency
                 </h4>
                 <p className="text-xs text-gray-400 font-medium">All our farming units operate on 100% renewable energy by 2026.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Industrial Workflow */}
      <section className="bg-[#0A1A0C] py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center gap-10">
             <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mb-4 rotate-3 shadow-2xl">
                <BarChart3 className="text-white" size={40} />
             </div>
             <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase italic leading-none overflow-hidden">
               Production <span className="text-accent underline underline-offset-8">Workflow</span>
             </h2>
             <p className="text-xl text-gray-400 max-w-2xl leading-relaxed italic">
               {data.details}
             </p>
             <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/products" className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-primary/90 transition-all flex items-center gap-2">
                  View End Products <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                   Bulk Supply Inquiry
                </Link>
             </div>
          </div>
      </section>

      {/* Featured Products for this div */}
      <section className="py-24 px-6 bg-surface-light">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-ink mb-12 text-center">Ready to Ship</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
               {[1, 2, 3].map(i => (
                 <motion.div key={i} whileHover={{ y: -10 }} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-50 flex flex-col">
                    <img src={data.imgHero} alt="" className="h-48 w-full object-cover" />
                    <div className="p-6 flex flex-col flex-1">
                       <h3 className="font-display font-bold text-lg mb-4">{data.title} Product {i}</h3>
                       <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-50">
                          <span className="text-primary font-bold">₦25,000</span>
                          <Link to="/products" className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-1">Order Now <ArrowRight size={14} /></Link>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>
    </Layout>
  );
}

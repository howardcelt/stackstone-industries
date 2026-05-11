import { Layout } from '../components/layout/Layout';
import { motion } from 'motion/react';
import { Search, ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';

const MOCK_BLOGS: BlogPost[] = [
  { id: '1', title: 'The Future of Cassava Processing in 2026', excerpt: 'How vertical integration and automated peeling lines are revolutionizing industrial starch production in West Africa.', author: 'Dr. Samuel Stackston', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000', category: 'Industrial', createdAt: '2026-05-10' },
  { id: '2', title: 'Achieving Zero Waste in Commercial Pepper Farming', excerpt: 'Our journey to utilizing every part of the pepper plant, from seeds for next season to compost for our soil.', author: 'Adeshola Balogun', image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&q=80&w=1000', category: 'Sustainability', createdAt: '2026-05-08' },
  { id: '3', title: 'Global Export Compliance for Small Farms', excerpt: 'What small-scale distributors need to know when entering the European and US market with agricultural produce.', author: 'Kingsley Eke', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000', category: 'Export', createdAt: '2026-05-05' },
  { id: '4', title: 'Precision Feed Systems for Goat Ranching', excerpt: 'Evaluating the impact of automated nutrient tracking on livestock yield and animal welfare.', author: 'Dr. Samuel Stackston', image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&q=80&w=1000', category: 'Livestock', createdAt: '2026-05-02' },
];

export default function Blog() {
  return (
    <Layout>
      <div className="bg-surface-light py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
               <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-4 block underline underline-offset-8">Journal & Insights</span>
               <h1 className="text-4xl md:text-6xl font-display font-bold text-ink leading-tight">Stackston <span className="text-primary italic">Intelligence</span></h1>
               <p className="text-lg text-gray-500 mt-6 italic">Deep dives into the mechanics of modern agriculture, supply chains, and industrial food processing.</p>
            </div>
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-12 pr-6 py-4 rounded-full border border-gray-200 outline-none focus:ring-2 ring-primary/20 transition-all font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {/* Featured Post */}
            <div className="md:col-span-2">
               <div className="group relative bg-white rounded-[50px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-100 h-auto md:h-[500px]">
                  <div className="md:w-1/2 h-80 md:h-full overflow-hidden">
                    <img src={MOCK_BLOGS[0].image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center gap-6">
                     <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-accent">
                        <span>{MOCK_BLOGS[0].category}</span>
                        <div className="w-1 h-1 bg-gray-200 rounded-full" />
                        <span>{MOCK_BLOGS[0].createdAt}</span>
                     </div>
                     <h2 className="text-3xl md:text-5xl font-display font-bold text-ink leading-tight group-hover:text-primary transition-colors cursor-pointer">{MOCK_BLOGS[0].title}</h2>
                     <p className="text-gray-500 line-clamp-3 leading-relaxed">{MOCK_BLOGS[0].excerpt}</p>
                     <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 bg-surface-light rounded-full flex items-center justify-center text-primary">
                             <User size={18} />
                           </div>
                           <span className="text-xs font-bold text-ink">{MOCK_BLOGS[0].author}</span>
                        </div>
                        <Link to="#" className="ml-auto bg-primary text-white p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                          <ArrowRight size={24} />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>

            {/* Other Posts */}
            {MOCK_BLOGS.slice(1).map((post, idx) => (
               <motion.div 
                 key={post.id} 
                 whileHover={{ y: -10 }}
                 className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-lg group flex flex-col h-full"
               >
                  <div className="h-72 overflow-hidden relative">
                    <img src={post.image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-6 left-6 flex gap-2">
                       <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase text-primary shadow-sm">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col flex-1">
                     <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                        <Calendar size={14} className="text-accent" /> {post.createdAt}
                     </div>
                     <h3 className="text-2xl font-display font-bold text-ink leading-snug mb-4 group-hover:text-primary transition-colors cursor-pointer">{post.title}</h3>
                     <p className="text-gray-500 mb-8 flex-1 leading-relaxed italic line-clamp-3">{post.excerpt}</p>
                     <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                        <span className="text-xs font-bold text-gray-400">By {post.author}</span>
                        <Link to="#" className="text-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                           Read More <ArrowRight size={18} />
                        </Link>
                     </div>
                  </div>
               </motion.div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
             <button className="bg-white border border-gray-200 text-ink px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-all shadow-sm">
                Load Older Articles
             </button>
          </div>
        </div>
      </div>
      
      {/* Search by tag */}
      <section className="py-20 px-6 border-t border-gray-100">
         <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Browse by Department</h3>
            <div className="flex flex-wrap justify-center gap-4">
               {['Agriculture', 'Manufacturing', 'Supply Chain', 'Exports', 'Technology', 'Sustainability', 'Distributors'].map((tag, i) => (
                 <button key={i} className="bg-surface-light border border-gray-100 px-6 py-2 rounded-full text-sm font-semibold text-gray-600 hover:bg-primary hover:text-white transition-all">
                    {tag}
                 </button>
               ))}
            </div>
         </div>
      </section>
    </Layout>
  );
}

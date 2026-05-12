import React from 'react';
import { Calendar, User, ArrowRight, Share2, Bookmark, Clock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const POSTS = [
  {
    id: 1,
    title: 'Precision Agriculture: The Future of Pepper Farming in West Africa',
    excerpt: 'How data-driven soil analysis and solar irrigation are doubling yields at Stackston farm centers.',
    category: 'Innovations',
    author: 'Dr. Sarah Ade',
    date: 'May 10, 2026',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d'
  },
  {
    id: 2,
    title: 'The Industrial Cassava Boom: From Local Staples to Global Commodities',
    excerpt: 'Exploring the rising demand for HQCF and industrial starch in the international beverage industry.',
    category: 'Market Trends',
    author: 'James Stackston',
    date: 'May 05, 2026',
    readTime: '8 min read',
    img: 'https://images.unsplash.com/photo-1582234372722-50d02b123616'
  },
  {
    id: 3,
    title: 'Livestock 2.0: Modern Husbandry Techniques for Premium Goat Meat',
    excerpt: 'A deep dive into our cold-chain logistics and veterinary standards for export-grade meat production.',
    category: 'Livestock',
    author: 'Musa Bello',
    date: 'Apr 28, 2026',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1524024973431-2ad916746881'
  },
  {
    id: 4,
    title: 'Export Compliance: Navigating ISO & NAFDAC Standards in 2026',
    excerpt: 'A checklist for agribusinesses aiming for the European and North American markets.',
    category: 'Compliance',
    author: 'Lawal Grace',
    date: 'Apr 20, 2026',
    readTime: '12 min read',
    img: 'https://images.unsplash.com/photo-1586771107445-d3ca88fb3f00'
  }
];

export default function Blog() {
  return (
    <div className="pt-24 pb-20">
      {/* Featured Header */}
      <section className="bg-surface pt-20 pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-200 pb-12">
             <div className="space-y-4 max-w-xl">
                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">Industrial Insights</span>
                <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter">Agro Pulse.</h1>
                <p className="text-xl text-ink/60 font-light">Industry news, technical breakthroughs, and market analysis from the Stackston leadership team.</p>
             </div>
             <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input className="w-full pl-10 pr-4 py-4 bg-white border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder="Search articles..." />
             </div>
          </div>

          {/* Featured Post Card */}
          <div className="group relative rounded-[3rem] overflow-hidden bg-primary text-white h-[600px] flex items-end">
             <div className="absolute inset-0 z-0">
                <img src={POSTS[0].img} alt="Hero" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
             </div>
             <div className="relative z-10 p-8 md:p-16 max-w-3xl space-y-6">
                <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-xs font-black uppercase">{POSTS[0].category}</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">{POSTS[0].title}</h2>
                <div className="flex items-center space-x-6 text-sm opacity-80 border-t border-white/20 pt-6">
                   <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{POSTS[0].author}</span>
                   </div>
                   <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{POSTS[0].date}</span>
                   </div>
                   <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{POSTS[0].readTime}</span>
                   </div>
                </div>
                <Link to={`/blog/${POSTS[0].id}`} className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-accent transition-colors">
                   <span>Read Article</span>
                   <ArrowRight className="w-5 h-5" />
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
           <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-primary">Recent Articles</h2>
              <div className="flex space-x-4">
                 {['All', 'Innovations', 'Market Trends', 'Livestock'].map(cat => (
                   <button key={cat} className="text-sm font-bold text-ink/40 hover:text-primary transition-colors">{cat}</button>
                 ))}
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {POSTS.slice(1).map((post, i) => (
                <article key={i} className="group space-y-6">
                   <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-lg">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 right-4 flex space-x-2">
                         <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-accent transition-colors"><Bookmark className="w-4 h-4" /></button>
                         <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-accent transition-colors"><Share2 className="w-4 h-4" /></button>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-xs font-bold text-secondary uppercase tracking-widest">
                         <span>{post.category}</span>
                         <span className="w-1 h-1 bg-gray-300 rounded-full" />
                         <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 h-16">{post.title}</h3>
                      <p className="text-ink/60 line-clamp-2">{post.excerpt}</p>
                      <Link to={`/blog/${post.id}`} className="inline-flex items-center space-x-2 text-primary font-bold border-b-2 border-primary pb-1 group-hover:border-secondary transition-colors">
                         <span>Read More</span>
                         <ArrowRight className="w-4 h-4" />
                      </Link>
                   </div>
                </article>
              ))}
           </div>

           {/* Newsletter Mini */}
           <div className="bg-secondary rounded-[3rem] p-8 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-lg space-y-4">
                 <h2 className="text-3xl md:text-4xl font-bold">Industry Intelligence <br />Delivered Weekly.</h2>
                 <p className="text-white/70">Join 5,000+ agribusiness leaders who receive our monthly market reports and farm insights.</p>
              </div>
              <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
                 <input className="px-6 py-4 bg-white/10 border border-white/20 rounded-2xl outline-none focus:ring-2 focus:ring-accent min-w-[300px] text-white placeholder:text-white/40" placeholder="Enter your email" />
                 <button className="px-10 py-4 bg-accent text-primary rounded-2xl font-bold hover:bg-white transition-colors">Subscribe</button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

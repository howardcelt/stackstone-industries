import React, { useState } from 'react';
import { ShoppingBag, Search, Filter, ChevronDown, Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useCart } from '../store/useCart';

const PRODUCTS = [
  { id: 1, name: 'Premium Red Cayenne Powder (Export-Grade)', price: 12.99, category: 'Pepper', rating: 4.8, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d', badge: 'Best Seller' },
  { id: 2, name: 'Whole Dried Habanero Peppers (1kg Bulk)', price: 24.50, category: 'Pepper', rating: 4.9, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5', badge: 'Export Quality' },
  { id: 3, name: 'Traditional Ijevu Garri (5kg Pack)', price: 15.00, category: 'Cassava', rating: 4.7, img: 'https://images.unsplash.com/photo-1626082896492-766af4eb6501', badge: 'Native Grade' },
  { id: 4, name: 'Premium Goat Meat (Frozen Mixed Parts)', price: 45.00, category: 'Goat', rating: 4.9, img: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617', badge: 'Cold Chain' },
  { id: 5, name: 'Industrial Cassava Starch (25kg Bag)', price: 120.00, category: 'Cassava', rating: 5.0, img: 'https://images.unsplash.com/photo-1582234372722-50d02b123616', badge: 'Industrial' },
  { id: 6, name: 'Dried Pepper Flasks (Gift Box set)', price: 18.00, category: 'Pepper', rating: 4.6, img: 'https://images.unsplash.com/photo-1591871937573-74dbba515c4c', badge: 'Premium' },
  { id: 7, name: 'Live Commercial Goats (Bucks)', price: 180.00, category: 'Goat', rating: 4.8, img: 'https://images.unsplash.com/photo-1524024973431-2ad916746881', badge: 'Farming' },
  { id: 8, name: 'Fine Cassava Flour (HQCF)', price: 2.50, category: 'Cassava', rating: 4.7, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff', badge: 'Baking' },
];

const CATEGORIES = ['All', 'Pepper', 'Goat', 'Cassava', 'Industrial', 'Packaged Foods'];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const addItem = useCart((state) => state.addItem);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-primary pt-20 pb-24 text-white px-4 md:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1586771107445-d3ca88fb3f00" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Our Product Store</h1>
          <p className="text-xl text-white/70 font-light">From premium table-ready condiments to industrial-grade raw materials.</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex overflow-x-auto pb-2 md:pb-0 scrollbar-hide space-x-2 w-full md:w-auto">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap",
                  activeCategory === cat ? "bg-primary text-white" : "bg-surface text-primary hover:bg-gray-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-surface border-none rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <p className="text-ink/60 font-medium">{filteredProducts.length} Products Found</p>
          <div className="flex items-center space-x-2 text-sm font-bold text-primary cursor-pointer">
            <Filter className="w-4 h-4" />
            <span>Sort by: Relevance</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((p) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-surface">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter text-primary shadow-sm border border-gray-100">
                    {p.badge}
                  </div>
                  <button 
                    onClick={() => addItem({ id: p.id, name: p.name, price: p.price, img: p.img })}
                    className="absolute bottom-4 right-4 bg-primary text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-xl"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1 text-accent text-xs">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="font-bold">{p.rating}</span>
                    </div>
                    <h3 className="font-bold text-lg leading-tight text-primary line-clamp-2 h-14">{p.name}</h3>
                    <div className="flex justify-between items-center pt-2">
                       <span className="text-xl font-black text-ink">${p.price}</span>
                       <span className="text-xs text-ink/40 font-bold uppercase">Incl. Tax</span>
                    </div>
                  </div>

                  <div className="pt-2 flex gap-2">
                    <button className="flex-grow py-3 bg-primary text-white text-sm font-bold rounded-xl hover:bg-secondary transition-colors">
                      Quick Shop
                    </button>
                    <Link to={`/products/${p.id}`} className="p-3 bg-surface text-primary rounded-xl hover:bg-accent transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-32 space-y-4">
            <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto">
              <Search className="w-8 h-8 text-ink/20" />
            </div>
            <h2 className="text-2xl font-bold text-primary">No products found</h2>
            <p className="text-ink/60">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
              className="text-primary font-bold underline"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Wholesale Banner */}
      <section className="container mx-auto px-4 md:px-8 mt-12 mb-20">
        <div className="bg-secondary rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
             <img src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-xl space-y-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold">Bulk & Wholesale <br />Supply Program</h2>
            <p className="text-white/80 text-lg">Are you a restaurant owner, distributor, or food manufacturer? Access our exclusive wholesale pricing and tiered ordering system.</p>
            <Link to="/wholesale" className="inline-flex items-center space-x-2 bg-accent text-primary px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-2xl">
              <span>Apply for Wholesale</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center relative z-10">
             <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                <span className="block text-3xl font-black text-accent">500+</span>
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">Verified Distributors</span>
             </div>
             <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                <span className="block text-3xl font-black text-accent">24h</span>
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">Fulfillment Target</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

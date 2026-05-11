import { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { motion } from 'motion/react';
import { Search, Filter, ShoppingCart, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Fresh Habeñero Pepper', price: 15000, category: 'Pepper', unit: 'Crate (20kg)', moq: 1, description: 'Bright, spicy and fresh from our farms.', imageUrl: 'https://images.unsplash.com/photo-1588253518678-596bfd6b47e5?auto=format&fit=crop&q=80&w=1000' },
  { id: '2', name: 'Premium Yellow Garri', price: 42000, category: 'Cassava', unit: 'Bag (50kg)', moq: 1, description: 'Fine texture, well-processed with palm oil.', imageUrl: 'https://images.unsplash.com/photo-1621236304198-651565bb9dbb?auto=format&fit=crop&q=80&w=1000' },
  { id: '3', name: 'Commercial Goat (Large)', price: 75000, category: 'Livestock', unit: 'Unit', moq: 1, description: 'Healthy, grass-fed livestock.', imageUrl: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&q=80&w=1000' },
  { id: '4', name: 'Dried Chili Powder', price: 5500, category: 'Processed', unit: 'Kg', moq: 5, description: 'Pure ground chili with no additives.', imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1000' },
  { id: '5', name: 'White Garri (Export Grade)', price: 48000, category: 'Cassava', unit: 'Bag (50kg)', moq: 10, description: 'Double-sifted, dry and crunchy.', imageUrl: 'https://images.unsplash.com/photo-1621236304198-651565bb9dbb?auto=format&fit=crop&q=80&w=1000' },
  { id: '6', name: 'Smoked Goat Meat', price: 9500, category: 'Processed', unit: 'Kg', moq: 2, description: 'Traditional smoked flavor, vacuum sealed.', imageUrl: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=1000' },
];

const categories = ['All', 'Pepper', 'Cassava', 'Livestock', 'Processed'];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const filteredProducts = MOCK_PRODUCTS.filter(p => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <Layout>
      <div className="bg-surface-light py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-display font-bold text-ink mb-2">Our Catalog</h1>
              <p className="text-gray-500">Premium agricultural products for retail and wholesale.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative flex-grow sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 outline-none focus:border-primary transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex bg-white rounded-full p-1 border border-gray-200 overflow-x-auto no-scrollbar">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap",
                      selectedCategory === cat ? "bg-primary text-white shadow-md" : "text-gray-500 hover:text-ink"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <motion.div 
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col"
              >
                <Link to={`/products/${product.id}`} className="block h-60 relative overflow-hidden group">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white text-ink px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1">
                      <Info size={14} /> Quick View
                    </span>
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{product.category}</span>
                    <span className="text-[10px] bg-surface-light text-primary px-2 py-0.5 rounded font-bold uppercase">{product.unit}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-ink mb-1">{product.name}</h3>
                  <p className="text-gray-400 text-xs line-clamp-2 mb-4">{product.description}</p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col leading-none">
                        <span className="text-xs text-gray-400 font-medium">Price</span>
                        <span className="text-xl font-bold text-secondary">₦{product.price.toLocaleString()}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-gray-400 block">Min Order</span>
                        <span className="text-xs font-bold text-ink">{product.moq} {product.unit.split(' ')[0]}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-5 gap-2">
                      <button 
                        onClick={() => addToCart(product)}
                        className="col-span-4 bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg active:scale-95"
                      >
                        <ShoppingCart size={18} />
                        Add to Cart
                      </button>
                      <Link 
                        to={`/products/${product.id}`}
                        className="col-span-1 bg-surface-light text-primary rounded-xl flex items-center justify-center hover:bg-primary/10 transition-colors"
                      >
                         <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200">
              <div className="w-16 h-16 bg-surface-light rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-display font-bold text-ink">No products found</h3>
              <p className="text-gray-500 max-w-xs mx-auto mt-2">Try adjusting your filters or search query to find what you're looking for.</p>
              <button 
                onClick={() => {setSelectedCategory('All'); setSearchQuery('');}}
                className="mt-6 text-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Newsletter */}
      <section className="bg-primary py-20 px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-display font-bold text-white mb-2">Wholesale & Export Quotes</h2>
              <p className="text-white/70">Need a bulk order or export pricing? Request a custom quote today.</p>
            </div>
            <Link to="/contact" className="bg-accent text-white px-10 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-all whitespace-nowrap">
              Bulk Inquiry
            </Link>
          </div>
      </section>
    </Layout>
  );
}

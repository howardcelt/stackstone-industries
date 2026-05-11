import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart, ShieldCheck, Truck, RotateCcw, Package, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';

const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Fresh Habeñero Pepper', price: 15000, category: 'Pepper', unit: 'Crate (20kg)', moq: 1, description: 'Bright, spicy and fresh from our farms. Hand-picked at peak ripeness to ensure maximum flavor and heat. Ideal for industrial spice processing and retail distribution.', imageUrl: 'https://images.unsplash.com/photo-1588253518678-596bfd6b47e5?auto=format&fit=crop&q=80&w=1000' },
  { id: '2', name: 'Premium Yellow Garri', price: 42000, category: 'Cassava', unit: 'Bag (50kg)', moq: 1, description: 'Fine texture, well-processed with palm oil. Our yellow garri is fortified with Vitamin A and processed under strict hygienic conditions. Crunchy and perfect for drinking or making eba.', imageUrl: 'https://images.unsplash.com/photo-1621236304198-651565bb9dbb?auto=format&fit=crop&q=80&w=1000' },
  { id: '3', name: 'Commercial Goat (Large)', price: 75000, category: 'Livestock', unit: 'Unit', moq: 1, description: 'Healthy, grass-fed livestock. Our goats are raised in a stress-free environment with premium organic feed. Vet-certified and ready for commercial supply.', imageUrl: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&q=80&w=1000' },
  { id: '4', name: 'Dried Chili Powder', price: 5500, category: 'Processed', unit: 'Kg', moq: 5, description: 'Pure ground chili with no additives. Export-grade pepper powder, finely ground and vacuum-packed to preserve its natural pungency and color.', imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1000' },
  { id: '5', name: 'White Garri (Export Grade)', price: 48000, category: 'Cassava', unit: 'Bag (50kg)', moq: 10, description: 'Double-sifted, dry and crunchy. Our export-grade white garri meets international food safety standards and is packaged for long-shelf life.', imageUrl: 'https://images.unsplash.com/photo-1621236304198-651565bb9dbb?auto=format&fit=crop&q=80&w=1000' },
  { id: '6', name: 'Smoked Goat Meat', price: 9500, category: 'Processed', unit: 'Kg', moq: 2, description: 'Traditional smoked flavor, vacuum sealed. Hardwood smoked goat meat, perfectly preserved without chemical additives. Tender and rich in flavor.', imageUrl: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=1000' },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const found = MOCK_PRODUCTS.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setQuantity(found.moq || 1);
    } else {
      navigate('/products');
    }
  }, [id, navigate]);

  if (!product) return null;

  return (
    <Layout>
      <div className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-12 font-medium transition-colors">
            <ArrowLeft size={18} /> Back to Catalog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-surface-light rounded-[40px] overflow-hidden aspect-square">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                 {[1, 2, 3, 4].map(i => (
                   <div key={i} className="aspect-square bg-surface-light rounded-2xl overflow-hidden cursor-pointer hover:ring-2 ring-primary transition-all">
                      <img src={product.imageUrl} alt="" className="w-full h-full object-cover opacity-60 hover:opacity-100" />
                   </div>
                 ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col gap-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs underline underline-offset-4">{product.category}</span>
                  <div className="h-4 w-[1px] bg-gray-200" />
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                    <ShieldCheck size={14} className="text-primary" /> Verified Origin
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4">{product.name}</h1>
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-3xl font-bold text-secondary font-display">₦{product.price.toLocaleString()}</span>
                  <span className="text-gray-400 mb-1 font-medium italic">/ {product.unit}</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg italic">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 py-8 border-y border-gray-100">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-surface-light rounded-full flex items-center justify-center text-primary">
                     <Package size={20} />
                   </div>
                   <div>
                     <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider">Unit Packaging</h4>
                     <p className="font-semibold">{product.unit}</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-surface-light rounded-full flex items-center justify-center text-primary">
                     <ShieldCheck size={20} />
                   </div>
                   <div>
                     <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider">Quality Grade</h4>
                     <p className="font-semibold">Export Standard (Premium)</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-surface-light rounded-full flex items-center justify-center text-primary">
                     <Truck size={20} />
                   </div>
                   <div>
                     <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider">Global Shipping</h4>
                     <p className="font-semibold">Available via Sea & Air</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-surface-light rounded-full flex items-center justify-center text-primary">
                     <RotateCcw size={20} />
                   </div>
                   <div>
                     <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider">Return Terms</h4>
                     <p className="font-semibold">Agricultural Perishable Policy</p>
                   </div>
                 </div>
              </div>

              <div className="space-y-6">
                 <div>
                   <label className="block text-sm font-bold text-ink mb-3 uppercase tracking-widest">Select Quantity</label>
                   <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-200 rounded-full p-1 w-fit bg-surface-light">
                        <button 
                          onClick={() => setQuantity(Math.max(product.moq || 1, quantity - 1))}
                          className="w-10 h-10 rounded-full hover:bg-white flex items-center justify-center font-bold text-gray-500"
                        >
                          -
                        </button>
                        <span className="w-12 text-center font-bold text-ink">{quantity}</span>
                        <button 
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-10 rounded-full hover:bg-white flex items-center justify-center font-bold text-gray-500"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-gray-400 text-sm font-medium">({product.unit.split(' ')[0]}s)</span>
                   </div>
                   <p className="mt-2 text-xs text-secondary font-bold italic">Minimum Order Quantity: {product.moq} {product.unit.split(' ')[0]}(s)</p>
                 </div>

                 <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => addToCart(product, quantity)}
                      className="flex-1 bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95"
                    >
                      <ShoppingCart size={20} />
                      Add to Cart — ₦{(product.price * quantity).toLocaleString()}
                    </button>
                    <button className="sm:w-auto bg-ink text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all">
                      <MessageSquare size={20} />
                      Wholesale Quote
                    </button>
                 </div>
              </div>

              <div className="bg-surface-light p-6 rounded-3xl border border-gray-100 flex items-center gap-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent shrink-0">
                    <Package size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink">Industrial Distribution</h4>
                    <p className="text-sm text-gray-500">Become a certified distributor or export partner for this product.</p>
                    <Link to="/services/distributor" className="text-primary text-xs font-bold hover:underline mt-1 inline-block">Partner with us</Link>
                  </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-24">
             <h2 className="text-3xl font-display font-bold text-ink mb-12">Product Specifications</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {[
                  { label: "Storage Temp", val: "10°C - 15°C (Recommended)" },
                  { label: "Shelf Life", val: "14-21 Days (Fresh), 12 Months (Dried)" },
                  { label: "Origin", val: "Stackston Farm Unit Alpha, Ogun State, Nigeria" },
                  { label: "Certification", val: "NAFDAC / ISO 22000" },
                  { label: "Processing Method", val: "Industrial Wash & Sift" },
                  { label: "Extraction Date", val: "Within 48 hours of dispatch" },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between py-4 border-b border-gray-50">
                    <span className="font-bold text-gray-400 uppercase text-xs tracking-widest">{spec.label}</span>
                    <span className="font-semibold text-ink">{spec.val}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

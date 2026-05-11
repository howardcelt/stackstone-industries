import { Layout } from '../components/layout/Layout';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, ArrowRight, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="py-32 px-6 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 bg-surface-light rounded-full flex items-center justify-center text-gray-300 mb-8">
            <ShoppingBag size={48} />
          </div>
          <h1 className="text-3xl font-display font-bold text-ink mb-4">Your cart is empty</h1>
          <p className="text-gray-500 max-w-xs mb-10">Looks like you haven't added any premium Stackston products to your cart yet.</p>
          <Link to="/products" className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-primary/90 transition-all flex items-center gap-2">
            Start Shopping <ArrowRight size={20} />
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-surface-light py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-display font-bold text-ink mb-12">Shopping Cart ({totalItems})</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={item.id} 
                  className="bg-white p-6 rounded-[32px] shadow-sm flex flex-col sm:flex-row gap-6 border border-gray-50"
                >
                  <div className="w-full sm:w-32 h-32 bg-surface-light rounded-2xl overflow-hidden shrink-0">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{item.category}</span>
                        <h3 className="text-xl font-display font-bold text-ink mb-1">{item.name}</h3>
                        <p className="text-xs text-gray-400 font-medium">{item.unit}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-300 hover:text-red-500 transition-colors p-2"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center border border-gray-100 rounded-full p-1 bg-surface-light">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full hover:bg-white flex items-center justify-center font-bold text-gray-500"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center font-bold text-ink text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full hover:bg-white flex items-center justify-center font-bold text-gray-500"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-400 block font-semibold mb-1">Subtotal</span>
                        <span className="text-xl font-bold text-ink">₦{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-50 sticky top-24">
                <h2 className="text-2xl font-display font-bold text-ink mb-8">Order Summary</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal ({totalItems} items)</span>
                    <span className="font-semibold text-ink">₦{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Estimated Shipping</span>
                    <span className="font-semibold text-primary">TBD at Checkout</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Tax (Estimated)</span>
                    <span className="font-semibold text-ink">₦{(totalPrice * 0.075).toLocaleString()}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex justify-between items-end">
                    <span className="font-display font-bold text-xl">Total</span>
                    <div className="text-right">
                      <span className="block text-[10px] text-accent uppercase font-bold tracking-widest mb-1">Incl. VAT</span>
                      <span className="text-3xl font-display font-bold text-secondary leading-none">
                        ₦{(totalPrice * 1.075).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/checkout"
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 active:scale-95"
                >
                  Proceed to Checkout
                  <ArrowRight size={20} />
                </Link>
                
                <div className="mt-8 flex flex-col gap-4 text-xs text-gray-400">
                   <div className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                     <span>Secure encrypted checkout powered by Paystack</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                     <span>Quality Guarantee on all perishable items</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

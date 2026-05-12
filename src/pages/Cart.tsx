import React from 'react';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag, CreditCard, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../store/useCart';
import { motion, AnimatePresence } from 'motion/react';

export default function Cart() {
  const { items, updateQuantity, removeItem, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-40 pb-24 px-4 text-center space-y-8">
        <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center mx-auto">
          <ShoppingBag className="w-10 h-10 text-primary/20" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-primary">Your cart is empty</h1>
          <p className="text-ink/60">Looks like you haven't added anything yet.</p>
        </div>
        <Link 
          to="/products" 
          className="inline-flex items-center space-x-2 bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-secondary transition-colors"
        >
          <span>Continue Shopping</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12">Shopping Cart ({totalItems()})</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode='popLayout'>
              {items.map((item) => (
                <motion.div 
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white border border-gray-100 rounded-3xl"
                >
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-32 h-32 object-cover rounded-2xl bg-surface" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-grow space-y-1">
                    <h3 className="text-lg font-bold text-primary">{item.name}</h3>
                    <p className="text-secondary font-bold">${item.price}</p>
                  </div>
                  <div className="flex items-center bg-surface rounded-xl p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-white rounded-lg transition-colors text-primary"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-bold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-white rounded-lg transition-colors text-primary"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-right sm:min-w-[100px]">
                    <p className="font-black text-lg text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 p-2 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="space-y-6">
            <div className="bg-surface p-8 rounded-[2rem] space-y-6 sticky top-32">
              <h2 className="text-2xl font-bold text-primary">Order Summary</h2>
              
              <div className="space-y-4 border-b border-gray-200 pb-6">
                <div className="flex justify-between text-ink/60">
                  <span>Subtotal</span>
                  <span className="font-bold text-ink">${totalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-ink/60">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold">Calculated at next step</span>
                </div>
                <div className="flex justify-between text-ink/60">
                   <span>Tax (Est.)</span>
                   <span className="font-bold text-ink">$0.00</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-xl font-bold text-primary">Total</span>
                <span className="text-3xl font-black text-primary">${totalPrice().toFixed(2)}</span>
              </div>

              <Link 
                to="/checkout"
                className="w-full py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-secondary transition-colors shadow-2xl"
              >
                <CreditCard className="w-5 h-5" />
                <span>Secure Checkout</span>
              </Link>

              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-3 text-xs font-bold text-green-700 uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Secure SSL Encryption</span>
                </div>
                <p className="text-xs text-ink/40">By proceeding to checkout, you agree to our Terms of Service and Privacy Policy.</p>
              </div>

              {/* Payment Badges */}
              <div className="flex justify-center items-center gap-4 border-t border-gray-200 pt-6 opacity-30 grayscale hover:grayscale-0 transition-all">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

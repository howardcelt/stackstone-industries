import React, { useState } from 'react';
import { useCart } from '../store/useCart';
import { CreditCard, Truck, ShieldCheck, CheckCircle2, ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setIsSuccess(true);
      setTimeout(() => {
        clearCart();
        navigate('/');
      }, 3000);
    }
  };

  if (items.length === 0 && !isSuccess) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <Link to="/products" className="text-primary underline mt-4 block">Return to Shop</Link>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="pt-40 pb-24 flex flex-col items-center justify-center space-y-6 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-primary">Payment Successful!</h1>
          <p className="text-ink/60">Thank you for your order. We've sent a confirmation email to your inbox.</p>
          <p className="text-sm text-ink/40 italic">Redirecting to home...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
           <Link to="/cart" className="p-2 hover:bg-surface rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6" />
           </Link>
           <h1 className="text-3xl font-bold text-primary">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Form */}
          <div className="space-y-8">
            {/* Steps Indicator */}
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-primary text-white' : 'bg-surface text-ink/40'}`}>1</div>
              <div className="flex-grow h-px bg-gray-200" />
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-primary text-white' : 'bg-surface text-ink/40'}`}>2</div>
            </div>

            <form onSubmit={handleCheckout} className="space-y-8">
              {step === 1 ? (
                <div className="space-y-6 animate-in slide-in-from-left duration-300">
                  <h2 className="text-2xl font-bold flex items-center space-x-2">
                    <Truck className="w-6 h-6 text-accent" />
                    <span>Shipping Details</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-ink/60">First Name</label>
                      <input required className="w-full px-4 py-3 bg-surface border-none rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-ink/60">Last Name</label>
                      <input required className="w-full px-4 py-3 bg-surface border-none rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-ink/60">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 bg-surface border-none rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-ink/60">Shipping Address</label>
                    <textarea required className="w-full px-4 py-3 bg-surface border-none rounded-xl focus:ring-2 focus:ring-primary outline-none" rows={3} placeholder="123 Industrial Way, Lagos" />
                  </div>
                </div>
              ) : (
                <div className="space-y-6 animate-in slide-in-from-right duration-300">
                  <h2 className="text-2xl font-bold flex items-center space-x-2">
                    <CreditCard className="w-6 h-6 text-accent" />
                    <span>Payment Information</span>
                  </h2>
                  <div className="p-6 bg-surface border border-primary/10 rounded-2xl space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-ink/60">Card Number</label>
                      <div className="relative">
                        <input required className="w-full px-4 py-3 bg-white border-none rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="0000 0000 0000 0000" />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                           <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" />
                           <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-3" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-ink/60">Expiry Date</label>
                        <input required className="w-full px-4 py-3 bg-white border-none rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-ink/60">CVC</label>
                        <input required className="w-full px-4 py-3 bg-white border-none rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="123" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-100 rounded-xl text-green-700 text-sm">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Your payment is secured with industry-standard encryption.</span>
                  </div>
                </div>
              )}

              <div className="pt-8">
                <button 
                  type="submit"
                  className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-xl shadow-2xl hover:bg-secondary transition-all flex items-center justify-center space-x-3"
                >
                  {step === 1 ? (
                    <>
                      <span>Continue to Payment</span>
                      <ArrowRight className="w-6 h-6" />
                    </>
                  ) : (
                   <>
                      <CreditCard className="w-6 h-6" />
                      <span>Complete Payment (${totalPrice().toFixed(2)})</span>
                   </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right: Summary */}
          <div className="bg-surface p-8 md:p-12 rounded-[3rem] h-fit sticky top-32 border border-gray-100">
             <h3 className="text-xl font-bold mb-8 flex items-center space-x-2">
               <ShoppingBag className="w-5 h-5 text-accent" />
               <span>Order Snapshot</span>
             </h3>
             <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
                {items.map(item => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-200">
                        <img src={item.img} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-primary line-clamp-1">{item.name}</p>
                        <p className="text-xs text-ink/40 font-bold">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-bold text-sm text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
             </div>
             <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
                <div className="flex justify-between text-ink/60">
                  <span>Subtotal</span>
                  <span className="font-bold text-primary">${totalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-ink/60">
                   <span>Shipping (Standard)</span>
                   <span className="font-bold text-primary">$0.00</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-xl font-bold text-primary">Total Payalble</span>
                  <span className="text-3xl font-black text-primary">${totalPrice().toFixed(2)}</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, CreditCard, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    paymentMethod: 'paystack'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      // Final submission
      console.log('Order submitted:', { formData, cart, totalPrice });
      // Clear cart and redirect to success
      clearCart();
      alert('Order placed successfully! Redirecting to confirmation...');
      navigate('/');
    }
  };

  if (cart.length === 0) {
    navigate('/products');
    return null;
  }

  return (
    <Layout>
      <div className="bg-surface-light min-h-screen py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-16 gap-4">
             <div className={cn("flex flex-col items-center gap-2", step >= 1 ? "text-primary" : "text-gray-300")}>
               <div className={cn("w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold", step >= 1 ? "border-primary bg-primary text-white" : "border-gray-200")}>
                 {step > 1 ? <CheckCircle2 size={24} /> : "1"}
               </div>
               <span className="text-xs font-bold uppercase tracking-widest">Shipping</span>
             </div>
             <div className={cn("h-[2px] w-20 mb-6", step > 1 ? "bg-primary" : "bg-gray-200")} />
             <div className={cn("flex flex-col items-center gap-2", step >= 2 ? "text-primary" : "text-gray-300")}>
               <div className={cn("w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold", step === 2 ? "border-primary bg-primary text-white" : step > 2 ? "border-primary bg-primary text-white" : "border-gray-200")}>
                 {step > 2 ? <CheckCircle2 size={24} /> : "2"}
               </div>
               <span className="text-xs font-bold uppercase tracking-widest">Payment</span>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {step === 1 && (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-display font-bold text-ink mb-8 flex items-center gap-3">
                        <Truck className="text-primary" /> Delivery Information
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-1">First Name</label>
                          <input required name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full bg-surface-light border-none rounded-xl px-5 py-4 outline-none focus:ring-2 ring-primary/20 transition-all font-medium" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-1">Last Name</label>
                          <input required name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full bg-surface-light border-none rounded-xl px-5 py-4 outline-none focus:ring-2 ring-primary/20 transition-all font-medium" placeholder="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-1">Email Address</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-surface-light border-none rounded-xl px-5 py-4 outline-none focus:ring-2 ring-primary/20 transition-all font-medium" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-1">Phone Number</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-surface-light border-none rounded-xl px-5 py-4 outline-none focus:ring-2 ring-primary/20 transition-all font-medium" placeholder="+234 ..." />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-1">Detailed Address</label>
                        <input required name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-surface-light border-none rounded-xl px-5 py-4 outline-none focus:ring-2 ring-primary/20 transition-all font-medium" placeholder="Street name, house number..." />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-1">City</label>
                          <input required name="city" value={formData.city} onChange={handleInputChange} className="w-full bg-surface-light border-none rounded-xl px-5 py-4 outline-none focus:ring-2 ring-primary/20 transition-all font-medium" placeholder="Lagos" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-1">State</label>
                          <input required name="state" value={formData.state} onChange={handleInputChange} className="w-full bg-surface-light border-none rounded-xl px-5 py-4 outline-none focus:ring-2 ring-primary/20 transition-all font-medium" placeholder="Lagos State" />
                        </div>
                      </div>
                      <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl active:scale-95">
                        Continue to Payment <ArrowRight size={20} />
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-8"
                    >
                      <h2 className="text-2xl font-display font-bold text-ink mb-8 flex items-center gap-3">
                        <CreditCard className="text-primary" /> Secure Payment
                      </h2>
                      
                      <div className="space-y-4">
                        {[
                          { id: 'paystack', name: 'Paystack (Cards, Transfer, USSD)', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Logo_Paystack.png' },
                          { id: 'flutterwave', name: 'Flutterwave', icon: 'https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/og3u1szd3it0vzz8oxom' },
                          { id: 'bank', name: 'Direct Bank Transfer (Manual)', icon: null },
                        ].map(method => (
                          <label 
                            key={method.id}
                            className={cn(
                              "flex items-center justify-between p-6 rounded-2xl border-2 transition-all cursor-pointer",
                              formData.paymentMethod === method.id ? "border-primary bg-primary/5" : "border-gray-100 hover:border-gray-200"
                            )}
                          >
                            <div className="flex items-center gap-4">
                              <input 
                                type="radio" 
                                name="paymentMethod" 
                                value={method.id} 
                                checked={formData.paymentMethod === method.id}
                                onChange={handleInputChange}
                                className="w-5 h-5 text-primary focus:ring-primary"
                              />
                              <span className="font-bold text-ink">{method.name}</span>
                            </div>
                            {method.icon && <img src={method.icon} alt={method.id} className="h-6 opacity-80" />}
                          </label>
                        ))}
                      </div>

                      <div className="bg-surface-light p-6 rounded-2xl border border-gray-100 flex items-center gap-4 text-sm text-gray-500">
                        <Lock className="text-primary shrink-0" size={24} />
                        <p>Your payment information is encrypted and securely processed. Stackston Industries never stores your card details.</p>
                      </div>

                      <div className="flex gap-4">
                        <button 
                          type="button" 
                          onClick={() => setStep(1)}
                          className="flex-1 bg-white border border-gray-200 text-ink py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all"
                        >
                          Back
                        </button>
                        <button type="submit" className="flex-[2] bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl active:scale-95">
                          Complete Order — ₦{(totalPrice * 1.075).toLocaleString()}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 sticky top-24">
                <h3 className="font-display font-bold text-xl mb-8 flex items-center gap-2">
                  Order Summary
                  <span className="text-gray-400 font-medium text-sm">({cart.length} items)</span>
                </h3>

                <div className="space-y-6 mb-8 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-16 h-16 bg-surface-light rounded-xl overflow-hidden shrink-0">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-ink text-sm truncate">{item.name}</h4>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-gray-400 font-medium">Qty: {item.quantity}</span>
                          <span className="text-sm font-bold text-ink">₦{(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Subtotal</span>
                    <span className="font-bold text-ink">₦{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Shipping Fee</span>
                    <span className="font-bold text-primary">FREE</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>VAT (7.5%)</span>
                    <span className="font-bold text-ink">₦{(totalPrice * 0.075).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-end pt-4 mt-2 border-t border-dashed border-gray-200">
                    <span className="font-display font-bold text-xl">Total Payable</span>
                    <div className="flex flex-col items-end">
                       <span className="text-2xl font-display font-bold text-secondary">
                         ₦{(totalPrice * 1.075).toLocaleString()}
                       </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                   <div className="flex flex-col items-center p-4 bg-surface-light rounded-2xl text-center">
                     <ShieldCheck size={24} className="text-primary mb-2" />
                     <span className="text-[10px] font-bold uppercase tracking-tight text-ink uppercase">Safe Payment</span>
                   </div>
                   <div className="flex flex-col items-center p-4 bg-surface-light rounded-2xl text-center">
                     <Truck size={24} className="text-primary mb-2" />
                     <span className="text-[10px] font-bold uppercase tracking-tight text-ink uppercase">Fast Delivery</span>
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

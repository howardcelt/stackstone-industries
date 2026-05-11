import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../../lib/utils';

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: 'Welcome to Stackston Industries. I am your AI farming and trade assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = { role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: (process.env as any).GEMINI_API_KEY });
      // In a real app within this environment, process.env.GEMINI_API_KEY is available
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        systemInstruction: "You are an expert AI assistant for Stackston Industries. You specialize in Agribusiness, Pepper/Goat/Cassava farming, and agricultural exports. Be professional, technical yet accessible.",
        contents: input,
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I'm sorry, I couldn't process that. Please contact our support team." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: "Stackston AI is currently processing high volume. Please try again or use WhatsApp for urgent inquiries." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Toggle */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-8 z-[55] bg-ink text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-2 border-accent/20"
      >
        <Sparkles size={28} className="text-accent" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, x: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50, x: 50 }}
            className="fixed bottom-8 right-8 z-[70] w-[90vw] sm:w-[400px] h-[600px] bg-white rounded-[40px] shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-ink p-8 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-accent">
                   <Bot size={24} />
                </div>
                <div>
                   <h3 className="font-display font-bold">Stackston AI</h3>
                   <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest flex items-center gap-1">
                     <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" /> Online
                   </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col custom-scrollbar">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex gap-3 max-w-[85%]",
                    msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    msg.role === 'ai' ? "bg-surface-light text-primary" : "bg-primary text-white"
                  )}>
                    {msg.role === 'ai' ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className={cn(
                    "p-4 rounded-2xl text-sm leading-relaxed",
                    msg.role === 'ai' ? "bg-surface-light text-ink rounded-tl-none" : "bg-primary text-white rounded-tr-none"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 bg-surface-light rounded-full flex items-center justify-center text-primary">
                    <Bot size={16} />
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-200 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-200 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-gray-200 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-gray-100">
               <div className="relative">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about exports, farming, or products..."
                    className="w-full bg-surface-light border-none rounded-2xl pl-6 pr-12 py-4 outline-none focus:ring-2 ring-primary/10 transition-all text-sm font-medium"
                  />
                  <button 
                    onClick={handleSend}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary/90 transition-all shadow-md active:scale-90"
                  >
                    <Send size={16} />
                  </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Minus, Sparkles, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../lib/utils';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', content: string }[]>([
    { role: 'model', content: "Hello! I'm Stackston's AI advisor. How can I help you with our agribusiness, manufacturing, or export services today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
      const ai = new GoogleGenAI({ apiKey: apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: `You are a helpful AI assistant for "Stackston Industries", a premium agribusiness and manufacturing company. 
          The company does: Pepper farming, Goat farming, Cassava farming, Food processing (Garri, Starch, Flour, Spices), Manufacturing, Packaging, Export, and Wholesale.
          Tone: Professional, expert, helpful, Industrial-modern.
          User says: ${userMsg}` }] }
        ],
        config: {
            systemInstruction: "Always represent Stackston Industries as a leader in industrial agriculture and food processing."
        }
      });

      const aiContent = response.text || "I'm sorry, I couldn't process that. Please contact our support team.";
      setMessages(prev => [...prev, { role: 'model', content: aiContent }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: "Our AI is currently optimizing farm data. Please try again later or contact us directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-10 right-10 z-[60] bg-accent text-primary p-4 rounded-full shadow-2xl flex items-center justify-center group"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-8 h-8" />}
        <span className="absolute right-full mr-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Stackston AI Advisor
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50, x: 20 }}
            className="fixed bottom-28 right-6 md:right-10 z-[60] w-[calc(100vw-2rem)] md:w-96 bg-white rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-primary p-6 text-white flex justify-between items-center">
               <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                     <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                     <h3 className="font-bold">Stackston AI</h3>
                     <p className="text-[10px] uppercase tracking-widest text-accent font-black">Industrial Assistant</p>
                  </div>
               </div>
               <button onClick={() => setIsOpen(false)} className="opacity-60 hover:opacity-100"><Minus className="w-6 h-6" /></button>
            </div>

            {/* Messages */}
            <div 
               ref={scrollRef}
               className="flex-grow p-6 overflow-y-auto space-y-6 scrollbar-thin bg-surface/30"
            >
               {messages.map((msg, i) => (
                 <div key={i} className={cn("flex flex-col", msg.role === 'user' ? "items-end" : "items-start")}>
                    <div className={cn(
                      "max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed",
                      msg.role === 'user' ? "bg-primary text-white rounded-tr-none" : "bg-white text-ink shadow-sm border border-gray-100 rounded-tl-none"
                    )}>
                       {msg.content}
                    </div>
                    <span className="text-[10px] mt-1 text-ink/40 font-bold uppercase tracking-wider">{msg.role === 'user' ? 'You' : 'AI Advisor'}</span>
                 </div>
               ))}
               {isLoading && (
                 <div className="flex space-x-2 items-center text-ink/40">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-xs font-bold uppercase">Processing...</span>
                 </div>
               )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
               <div className="flex items-center bg-surface rounded-2xl p-1 pr-3">
                  <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about exports, farming..." 
                    className="flex-grow bg-transparent border-none outline-none p-3 text-sm"
                  />
                  <button 
                    onClick={handleSend}
                    className="bg-primary text-white p-2.5 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
               </div>
               <p className="text-[9px] text-center mt-3 text-ink/40 font-medium">Powered by Gemini AI Technology</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

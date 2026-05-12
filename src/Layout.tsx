import React from 'react';
import { Navbar, Footer, AIAssistant } from './components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <AIAssistant />
      <Footer />
    </div>
  );
}

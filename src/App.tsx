import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wholesale from './pages/Wholesale';
import Blog from './pages/Blog';
import Manufacturing from './pages/Manufacturing';
import PepperFarm from './pages/PepperFarm';
import GoatFarm from './pages/GoatFarm';
import CassavaFarm from './pages/CassavaFarm';
import Export from './pages/Export';
import Packaging from './pages/Packaging';
import Investors from './pages/Investors';
import Distributor from './pages/Distributor';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/farms/pepper" element={<PepperFarm />} />
          <Route path="/farms/goat" element={<GoatFarm />} />
          <Route path="/farms/cassava" element={<CassavaFarm />} />
          <Route path="/export" element={<Export />} />
          <Route path="/packaging" element={<Packaging />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/distributor" element={<Distributor />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

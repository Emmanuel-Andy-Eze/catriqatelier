import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import StoreScreen from './screens/StoreScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/store" element={<StoreScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
          </Routes>
        </main>
        <Footer />
      </Router>

  );
}

export default App;

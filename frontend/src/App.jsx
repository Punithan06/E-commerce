import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';

function App() {
    return (
        
        <Router>
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category/:id" element={<ProductListing />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                    </Routes>
                </main>
                <footer className="bg-white border-t py-8 text-center text-gray-500">
                    <p>&copy; 2026 Ecommerce Store. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;

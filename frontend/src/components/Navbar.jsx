import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="glass sticky top-0 z-50 bg-white/80 border-b border-gray-100">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold tracking-tight text-primary flex items-center">
                        <div className="bg-primary text-white p-1 rounded-lg mr-2">
                            <ShoppingCart size={20} />
                        </div>
                        LUXE<span className="text-gray-900">STORE</span>
                    </Link>

                    {/* Nav Links */}
                    {/* <div className="hidden md:flex space-x-8 text-sm font-medium">
                        <Link to="/" className="hover:text-primary transition">Home</Link>
                        <Link to="/" className="hover:text-primary transition">Categories</Link>
                        <Link to="/" className="hover:text-primary transition">New Arrivals</Link>
                        <Link to="/" className="hover:text-primary transition">Special Offers</Link>
                    </div> */}

                    {/* Icons */}
                    {/* <div className="flex items-center space-x-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition"><Search size={20} /></button>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition"><User size={20} /></button>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition relative">
                            <ShoppingCart size={20} />
                            <span className="absolute top-0 right-0 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
                        </button>
                        <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition"><Menu size={20} /></button>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, SlidersHorizontal, Search, ShoppingBag } from 'lucide-react';
import { getProducts, getCategoryById } from '../api';

const ProductListing = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [priceRange, setPriceRange] = useState(1000);
    const [sortBy, setSortBy] = useState('newest');

    useEffect(() => {
        setLoading(true);
        Promise.all([
            getCategoryById(id),
            getProducts({ category: id, max_price: priceRange })
        ]).then(([catRes, prodRes]) => {
            setCategory(catRes.data);
            setProducts(prodRes.data);
            setLoading(false);
        }).catch(err => {
            console.error(err);
            // Fallback data
            setProducts([
                { id: 1, name: 'Premium Wireless Headphones', price: '299.99', image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' },
                { id: 2, name: 'Mechanical Keyboard', price: '159.00', image_url: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500' },
                { id: 3, name: 'Smart Watch Series X', price: '399.00', image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' },
                { id: 4, name: 'Designer Leather Bag', price: '450.00', image_url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500' },
            ]);
            setLoading(false);
        });
    }, [id, priceRange]);

    return (
        <div className="container py-12 animate-fade-in">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">{category ? category.name : 'Products'}</h1>
                <div className="flex items-center text-gray-500">
                    <Link to="/" className="hover:text-primary transition">Home</Link>
                    <span className="mx-2">/</span>
                    <span>{category ? category.name : 'Category'}</span>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Sidebar Filters */}
                <aside className="w-full lg:w-64 space-y-8">
                    <div className="glass p-6 rounded-2xl">
                        <h3 className="text-lg font-bold mb-6 flex items-center">
                            <Filter size={18} className="mr-2" /> Filters
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-4">Max Price: ${priceRange}</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    step="50"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(e.target.value)}
                                    className="w-full accent-primary"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-2">
                                    <span>$0</span>
                                    <span>$1000+</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-4">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                >
                                    <option value="newest">Newest First</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-grow">
                    {loading ? (
                        <div className="text-center py-20">Loading products...</div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                {products.map(product => (
                                    <Link key={product.id} to={`/product/${product.id}`} className="group">
                                        <div className="card h-full flex flex-col">
                                            <div className="relative aspect-square overflow-hidden">
                                                <img
                                                    src={product.image_url}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold">
                                                    ${product.price}
                                                </div>
                                            </div>
                                            <div className="p-6 flex-grow flex flex-col justify-between">
                                                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition">{product.name}</h3>
                                                <p className="text-gray-500 text-sm line-clamp-2">Premium quality crafted with attention to every detail.</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            {products.length === 0 && (
                                <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
                                    <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
                                    <p className="text-gray-500">No products found in this range.</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductListing;

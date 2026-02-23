import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import { getCategories } from '../api';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCategories()
            .then(res => {
                setCategories(res.data);
                setLoading(false);
                
            })
            .catch(err => {
                console.error(err);
                // Fallback data for demo if backend is not running
                setCategories([
                    { id: 1, name: 'Electronics', image_url: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500' },
                    { id: 2, name: 'Clothing', image_url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500' },
                    { id: 3, name: 'Accessories', image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' },
                ]);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="container py-20 text-center">Loading categories...</div>;

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600"
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Modern Shopping</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Discover our curated collection of premium products across all categories.</p>
                    {/* <button className="btn btn-primary px-8 py-4 text-lg">Shop Now</button> */}
                </div>
            </section>

            {/* Categories Grid */}
            <section className="container py-20">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
                        <p className="text-gray-500">Pick a category to explore our products</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Link key={category.id} to={`/category/${category.id}`} className="group">
                            <div className="card relative h-[400px]">
                                <img
                                    src={category.image_url}
                                    alt={category.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                                    <div className="flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Products <ChevronRight size={16} className="ml-1" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;

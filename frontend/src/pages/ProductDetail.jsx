import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Star, ShieldCheck, Truck } from 'lucide-react';
import { getProductById } from '../api';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setLoading(true);
        getProductById(id)
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                // Fallback
                setProduct({
                    id: id,
                    name: 'Premium Wireless Headphones',
                    price: '299.99',
                    description: 'Experience pure sound with our flagship wireless headphones. Features active noise cancellation, 40-hour battery life, and premium leather ear cups for ultimate comfort during long listening sessions.',
                    image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'
                });
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="container py-20 text-center">Loading product...</div>;
    if (!product) return <div className="container py-20 text-center">Product not found.</div>;

    return (
        <div className="container py-12 animate-fade-in">
            <div className="mb-8">
                <div className="flex items-center text-gray-500 text-sm">
                    <Link to="/" className="hover:text-primary">Home</Link>
                    <span className="mx-2">/</span>
                    <span>Products</span>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-medium">{product.name}</span>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                {/* Image Gallery */}
                <div className="w-full lg:w-1/2">
                    <div className="bg-gray-50 rounded-2xl overflow-hidden aspect-square">
                        <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Product Info */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
                            <div className="flex items-center space-x-4">
                                <div className="flex text-yellow-500">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <span className="text-gray-400 text-sm">(120 Reviews)</span>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <button className="p-2 border rounded-full hover:bg-gray-50 transition"><Heart size={20} /></button>
                            <button className="p-2 border rounded-full hover:bg-gray-50 transition"><Share2 size={20} /></button>
                        </div>
                    </div>

                    <div className="text-3xl font-bold text-primary mb-8">${product.price}</div>

                    <div className="prose prose-sm text-gray-600 mb-8 max-w-none">
                        <p>{product.description}</p>
                    </div>

                    <div className="space-y-6 mb-10">
                        <div className="flex items-center space-x-4">
                            <span className="font-bold text-gray-900">Quantity</span>
                            <div className="flex items-center border rounded-lg">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-4 py-2 border-r hover:bg-gray-50"
                                >-</button>
                                <span className="px-6 py-2 font-medium">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-4 py-2 border-l hover:bg-gray-50"
                                >+</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button className="btn btn-primary flex-grow flex items-center justify-center space-x-2">
                            <ShoppingCart size={20} />
                            <span>Add to Cart</span>
                        </button>
                        <button className="btn bg-gray-900 text-white flex-grow">Buy Now</button>
                    </div>

                    <div className="grid grid-cols-2 gap-6 border-t pt-8">
                        <div className="flex items-center space-x-3">
                            <div className="bg-primary/10 p-2 rounded-lg text-primary"><Truck size={20} /></div>
                            <div>
                                <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Shipping</div>
                                <div className="text-sm font-medium">Free Worldwide</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="bg-primary/10 p-2 rounded-lg text-primary"><ShieldCheck size={20} /></div>
                            <div>
                                <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Warranty</div>
                                <div className="text-sm font-medium">2 Year Protection</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

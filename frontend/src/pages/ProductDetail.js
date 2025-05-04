import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../services/ProductService';
import { handleApiError } from '../utils/errorHandler';
// Removed unused ToastContainer and toast imports
import 'react-toastify/dist/ReactToastify.css';

// Utility function to truncate and expand text
const ExpandableText = ({ text, maxLength = 300 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!text) return null;

    const toggleExpand = () => setIsExpanded(!isExpanded);

    if (text.length <= maxLength) {
        return <p className="text-gray-700  text-wrap text-justify">{text}</p>;
    }

    return (
        <div>
            <p className="text-gray-700 leading-relaxed">
                {isExpanded ? text : text.substring(0, maxLength) + '...'}
            </p>
            <button
                onClick={toggleExpand}
                className="text-blue-500 hover:text-blue-700 text-sm mt-2 focus:outline-none"
            >
                {isExpanded ? 'Show Less' : 'Read More'}
            </button>
        </div>
    );
};

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                setLoading(true);
                const data = await ProductService.getProductById(id);
                setProduct(data);
                setLoading(false);
            } catch (error) {
                handleApiError(error, 'Failed to fetch product details');
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (!product) {
        return <div className="flex justify-center items-center h-screen">Product not found</div>;
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="bg-white shadow-lg rounded-2xl">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-6 md:p-10">
                        {/* Product Image */}
                        <div className="flex justify-center items-center bg-gray-100 rounded-xl p-6">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="max-w-full max-h-[500px] object-contain rounded-lg shadow-md transform transition-transform hover:scale-105"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h1 className="text-4xl font-bold text-gray-900 mb-3">{product.title}</h1>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <span className="text-3xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                                        {product.discountPercentage && (
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                                                {product.discountPercentage}% OFF
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <span className="font-medium text-gray-600 text-lg">Category:</span>
                                    <span className="text-gray-800 text-lg capitalize">{product.category}</span>
                                </div>

                                <div className="bg-gray-100 rounded-lg p-4">
                                    <h2 className="text-xl font-semibold mb-3 text-gray-800">Description</h2>
                                    <ExpandableText text={product.description} maxLength={300} />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <button className="bg-blue-600 text-white py-3.5 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2 group">
                                        <span className="group-hover:scale-110 transition-transform">🛒</span>
                                        <span>Add to Cart</span>
                                    </button>
                                    <button className="bg-green-600 text-white py-3.5 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center space-x-2 group">
                                        <span className="group-hover:scale-110 transition-transform">⚡</span>
                                        <span>Buy Now</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

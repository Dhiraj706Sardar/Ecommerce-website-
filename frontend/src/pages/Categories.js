import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../services/ProductService';
import { handleApiError } from '../utils/errorHandler';
// Removed unused ToastContainer and toast imports

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            // Fetch all products and extract unique categories
            const allProducts = await ProductService.getAllProducts();
            const uniqueCategories = [...new Set(allProducts.map(product => product.category))];
            setCategories(uniqueCategories);
            setLoading(false);
        } catch (error) {
            handleApiError(error, 'Failed to fetch categories');
        } finally {
            setLoading(false);
        }
    };

    const fetchProductsByCategory = async (category) => {
        try {
            setSelectedCategory(category);
            const allProducts = await ProductService.getAllProducts();
            const filteredProducts = allProducts.filter(product => product.category === category);
            setCategoryProducts(filteredProducts);
        } catch (error) {
            handleApiError(error, `Failed to fetch products in ${category} category`);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Product Categories</h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => fetchProductsByCategory(category)}
                        className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                            selectedCategory === category 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-200 text-gray-800 hover:bg-blue-100'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {selectedCategory && (
                <div>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                        {selectedCategory} Products
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categoryProducts.map(product => (
                        <div 
                            key={product.id} 
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
                        >
                            <div className="relative h-48 overflow-hidden flex items-center justify-center bg-gray-50">
                                <Link to={`/product/${product.id}`} className="absolute inset-0 flex items-center justify-center">
                                    <img 
                                        src={product.image} 
                                        alt={product.title} 
                                        className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
                                    />
                                </Link>
                                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
                                    {product.category}
                                </div>
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <Link to={`/product/${product.id}`} className="mb-2">
                                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors h-14">
                                        {product.title}
                                    </h3>
                                </Link>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
                                    <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                                        <span className="text-yellow-500 mr-2">★</span>
                                        <span className="text-sm text-gray-700 font-semibold">
                                            {product.rating.rate.toFixed(1)} ({product.rating.count})
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-700 line-clamp-2 text-sm mb-4 flex-grow">
                                    A versatile and high-quality product designed to meet your everyday needs.
                                </p>
                                <div className="flex space-x-2">
                                    <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                                        Add to Cart
                                    </button>
                                    <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm">
                                        Quick View
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            )}
        </div>
    );
};

export default Categories;

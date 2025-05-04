import React from 'react';
import { Link } from 'react-router-dom';

// Utility function to truncate text
const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength 
        ? text.substring(0, maxLength) + '...' 
        : text;
};

const ProductCard = ({ product }) => {
    return (
        <Link 
            to={`/product/${product.id}`} 
            className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 flex flex-col h-full"
        >
            <div className="relative overflow-hidden rounded-t-lg h-48 flex items-center justify-center bg-gray-50">
                <img 
                    src={product.image || 'https://via.placeholder.com/150'} 
                    alt={product.title} 
                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                    {truncateText(product.category, 15)}
                </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 
                    className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 h-12 overflow-hidden"
                    title={product.title}
                >
                    {truncateText(product.title, 50)}
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-wrap text-justify">
                    {truncateText(product.description || 'No description available', 100)}
                </p>
                <div className="flex justify-between items-center mt-auto">
                    <span className="text-green-600 font-bold text-xl">${product.price.toFixed(2)}</span>
                    <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="text-sm text-gray-700">
                            {product.rating.rate.toFixed(1)} ({product.rating.count})
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;

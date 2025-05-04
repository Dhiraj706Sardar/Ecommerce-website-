import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductService from '../services/ProductService';
import ProductCard from '../components/ProductCard';
import { handleApiError } from '../utils/errorHandler';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get('query') || '';
        fetchProducts(query);
    }, [location.search]);

    const fetchProducts = async (query) => {
        try {
            setLoading(true);
            const data = await ProductService.getAllProducts(query);
            setProducts(data);
            setLoading(false);
        } catch (error) {
            handleApiError(error, 'Failed to fetch products');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
                </div>
            ) : products.length === 0 ? (
                <p className="text-center text-gray-500">No products found</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </>
    );
};

export default ProductList;

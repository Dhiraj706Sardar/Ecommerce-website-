import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { handleApiError } from '../utils/errorHandler';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Retrieve cart items from localStorage
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        setCartItems(savedCartItems);
        calculateTotal(savedCartItems);
    }, []);

    const calculateTotal = (items) => {
        const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setTotal(totalPrice);
    };

    const updateQuantity = (id, newQuantity) => {
        try {
            const updatedCart = cartItems.map(item => 
                item.id === id 
                    ? { ...item, quantity: Math.max(1, newQuantity) } 
                    : item
            );
            
            setCartItems(updatedCart);
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            calculateTotal(updatedCart);
        } catch (error) {
            handleApiError(error, 'Failed to update cart');
        }
    };

    const removeItem = (id) => {
        try {
            const updatedCart = cartItems.filter(item => item.id !== id);
            
            setCartItems(updatedCart);
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            calculateTotal(updatedCart);
            toast.success('Item removed from cart');
        } catch (error) {
            handleApiError(error, 'Failed to remove item from cart');
        }
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
        setTotal(0);
        toast.info('Cart cleared');
    };

    const checkout = () => {
        // Placeholder for checkout process
        toast.success('Checkout functionality coming soon!');
    };

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
                <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
                <Link 
                    to="/" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    {cartItems.map(item => (
                        <div 
                            key={item.id} 
                            className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-6"
                        >
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-24 h-24 object-contain rounded-lg"
                            />
                            <div className="flex-grow">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-green-600 font-bold">${item.price.toFixed(2)}</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button 
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300"
                                >
                                    -
                                </button>
                                <span className="text-lg font-semibold">{item.quantity}</span>
                                <button 
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300"
                                >
                                    +
                                </button>
                                <button 
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 h-fit">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-semibold">${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Shipping</span>
                            <span className="font-semibold">$0.00</span>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between text-xl font-bold">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="mt-6 space-y-4">
                        <button 
                            onClick={checkout}
                            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Proceed to Checkout
                        </button>
                        <button 
                            onClick={clearCart}
                            className="w-full bg-red-100 text-red-600 py-3 rounded-lg hover:bg-red-200 transition-colors"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

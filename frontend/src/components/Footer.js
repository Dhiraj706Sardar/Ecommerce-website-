import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">E-Commerce Store</h3>
                    <p className="text-sm text-gray-400">
                        Your one-stop shop for quality products across various categories.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <nav className="space-y-2">
                        <Link to="/" className="block text-gray-300 hover:text-white">Home</Link>
                        <Link to="/categories" className="block text-gray-300 hover:text-white">Categories</Link>
                        <Link to="/cart" className="block text-gray-300 hover:text-white">Cart</Link>
                    </nav>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Customer Service</h4>
                    <nav className="space-y-2">
                        <Link to="/contact" className="block text-gray-300 hover:text-white">Contact Us</Link>
                        <Link to="/shipping" className="block text-gray-300 hover:text-white">Shipping</Link>
                        <Link to="/returns" className="block text-gray-300 hover:text-white">Returns</Link>
                    </nav>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Connect With Us</h4>
                    <div className="flex space-x-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">🐦 Twitter</a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">📘 Facebook</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">📸 Instagram</a>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

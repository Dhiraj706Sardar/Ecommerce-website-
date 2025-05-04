import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/?query=${encodeURIComponent(searchQuery)}`);
            setSearchQuery('');
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 shadow-lg">
            <div className="container mx-auto px-4 flex justify-between items-center relative">
                <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    E-Store
                </Link>
                
                <form onSubmit={handleSearch} className="flex-grow max-w-xl mx-4 hidden md:block">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search products, categories..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <button 
                            type="submit" 
                            className="absolute right-0 top-0 mt-2 mr-4 text-gray-600 hover:text-gray-800"
                        >
                            🔍
                        </button>
                    </div>
                </form>

                <div className="hidden md:flex space-x-4 items-center">
                    <Link to="/" className="hover:text-blue-200 transition-colors flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        Home
                    </Link>
                    <Link to="/categories" className="hover:text-blue-200 transition-colors flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        Categories
                    </Link>
                    <Link to="/cart" className="hover:text-blue-200 transition-colors flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        Cart
                    </Link>
                </div>

                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="text-white focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-blue-700 md:hidden">
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            <form onSubmit={handleSearch} className="mb-4">
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        placeholder="Search products..." 
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    />
                                    <button 
                                        type="submit" 
                                        className="absolute right-0 top-0 mt-2 mr-4 text-gray-600 hover:text-gray-800"
                                    >
                                        🔍
                                    </button>
                                </div>
                            </form>
                            <Link to="/" className="block py-2 hover:bg-blue-600 rounded">Home</Link>
                            <Link to="/categories" className="block py-2 hover:bg-blue-600 rounded">Categories</Link>
                            <Link to="/cart" className="block py-2 hover:bg-blue-600 rounded">Cart</Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

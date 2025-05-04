import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/products';

const ProductService = {
    getAllProducts: async (query = '') => {
        try {
            const response = await axios.get(`${BASE_URL}${query ? `?query=${query}` : ''}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    getProductById: async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching product with id ${id}:`, error);
            throw error;
        }
    },

    getProductsByCategory: async (category) => {
        try {
            const response = await axios.get(`${BASE_URL}/category/${category}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching products in category ${category}:`, error);
            throw error;
        }
    },

    createProduct: async (productData) => {
        try {
            const response = await axios.post(BASE_URL, productData);
            return response.data;
        } catch (error) {
            console.error('Error creating product:', error);
            throw error;
        }
    },

    updateProduct: async (id, productData) => {
        try {
            const response = await axios.put(`${BASE_URL}/${id}`, productData);
            return response.data;
        } catch (error) {
            console.error(`Error updating product with id ${id}:`, error);
            throw error;
        }
    },

    deleteProduct: async (id) => {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
        } catch (error) {
            console.error(`Error deleting product with id ${id}:`, error);
            throw error;
        }
    }
};

export default ProductService;

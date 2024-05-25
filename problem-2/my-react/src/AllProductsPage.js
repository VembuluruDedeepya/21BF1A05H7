import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import { generateUniqueId } from '../utils/helpers';

const AllProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        // Fetch products from the API
        axios.get('/api/products').then(response => {
            const productsWithId = response.data.map(product => ({
                ...product,
                id: generateUniqueId(product)
            }));
            setProducts(productsWithId);
        });
    }, []);

    const applyFilters = () => {
        // Implement filtering logic based on filters state
    };

    return (
        <div>
            <Filters setFilters={setFilters} applyFilters={applyFilters} />
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default AllProductsPage;
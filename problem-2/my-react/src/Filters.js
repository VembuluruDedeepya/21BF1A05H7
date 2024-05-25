import React from 'react';

const Filters = ({ setFilters, applyFilters }) => {
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    };

    return (
        <div className="filters">
            <select name="category" onChange={handleFilterChange}>
                <option value="">Category</option>
                {/* Add categories */}
            </select>
            <select name="company" onChange={handleFilterChange}>
                <option value="">Company</option>
                {/* Add companies */}
            </select>
            <input type="number" name="rating" placeholder="Min Rating" onChange={handleFilterChange} />
            <input type="number" name="minPrice" placeholder="Min Price" onChange={handleFilterChange} />
            <input type="number" name="maxPrice" placeholder="Max Price" onChange={handleFilterChange} />
            <select name="availability" onChange={handleFilterChange}>
                <option value="">Availability</option>
                <option value="in stock">In Stock</option>
                <option value="out of stock">Out of Stock</option>
            </select>
            <button onClick={applyFilters}>Apply Filters</button>
        </div>
    );
};

export default Filters;
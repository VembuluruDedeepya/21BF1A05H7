import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.company}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
            <p>{product.discount}</p>
            <p>{product.availability}</p>
            <img src={product.image} alt={product.name} />
            <Link to={/product/${product.id}}>View Details</Link>
    </div >
  );
};

export default ProductCard;
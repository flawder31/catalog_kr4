import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            <h2>Товары ({products.length})</h2>
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
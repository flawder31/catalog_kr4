import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <div className="category-filter">
            <h3>Категории</h3>
            <div className="category-buttons">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`category-button ${selectedCategory === category.id ? 'active' : ''
                            }`}
                        onClick={() => onCategoryChange(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;
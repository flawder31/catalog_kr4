import React, { useState } from 'react';
import { products, categories } from './data/products';
import ProductList from './components/ProductList';
import CategoryFilter from './components/CategoryFilter';
import './App.css';

function App() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    return (
        <div className="App">
            <header className="app-header">
                <h1>Каталог товаров</h1>
                <p>Найдите то, что вам нужно</p>
            </header>

            <div className="app-content">
                <aside className="sidebar">
                    <CategoryFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={handleCategoryChange}
                    />
                </aside>

                <main className="main-content">
                    <ProductList products={filteredProducts} />
                </main>
            </div>
        </div>
    );
}

export default App;
import React, { useEffect, useState } from 'react';
import './Scrollindicator.css'; 

function Scrollindicator() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [scrollProgress, setScrollProgress] = useState(0);

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=100`);
            const data = await response.json();
            if (data && data.products && data.products.length) {
                setProducts(data.products);
                setLoading(false);
            }
        } catch (e) {
            console.log(e.message);
            setLoading(false);
        } 
    }
   
    useEffect(() => {
        fetchProducts();
    }, []);

    
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercentage = (scrollTop / windowHeight) * 100;
            setScrollProgress(scrollPercentage);
        };

        
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <center>
            <div className="scroll-container">
              <h1>Scroll Indicator</h1>
                <div
                    className="scroll-indicator"
                    style={{ width: `${scrollProgress}%` }}
                />
                <div>
                    {loading ? <p className="loading">Loading...</p> : null}
                    
                    <div>
                        {products.length > 0 ? products.map(product => (
                            <div key={product.id} className="product-item">
                                {product.title}
                            </div>
                        )) : null}
                    </div>
                </div>
            </div>
        </center>
    );
}

export default Scrollindicator;

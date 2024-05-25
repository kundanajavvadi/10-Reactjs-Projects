import React, { useEffect, useState } from 'react'
import './LoadMoreButton.css'
function LoadMoreButton() {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [disableButton, setDisableButton] = useState(false);


    async function fetchProducts() {
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();
            if (data && data.products && data.products.length) {

                setProducts((prevData) => [...prevData, ...data.products]);
                setLoading(false);
            }
            console.log(data);
        }
        catch (e) {
            console.log(e.message);
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchProducts();
    }, [count]);
    useEffect(() => {
        if (products && products.length === 100) {
            setDisableButton(true);
        }
    }, [products])

    return (
        <center>

        <div className='load-more-container'>
            <h1>Load Items</h1>
            <div className='product-container'>
                {
                    products && products.length ? products.map(productItem => <div className='product'>
                        <img alt={productItem.title} src={productItem.thumnail} />
                        <p>{productItem.title}</p>
                    </div>) : null

                }
                <div className='button-container' >
                    <button disabled={disableButton} onClick={() => setCount(count + 1)}> Load More Items</button>
                    {
                        disableButton ? <p>You have reached to 100 products</p> : null
                    }
                </div>
            </div>
        </div>
        </center>
    )
}

export default LoadMoreButton
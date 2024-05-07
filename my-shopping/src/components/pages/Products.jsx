import { useState, useEffect } from "react";
import axios from 'axios';
import MakeCard from "./MakeCard";
import './ProductStyle.css';

const url = "http://makeup-api.herokuapp.com/api/v1/products.json";

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await axios.get(url);
                setProducts(response.data);
                console.log(response.data);
            } catch (error) {
                console.log('Products Error: ', error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div className="container">
            <h1>Products</h1>
            <div className="products-container">
                {products.length === 0 && <p>Loading...</p>}
                {products.length > 0 && products.map((product, id) => (
                    <MakeCard make={product} key={id}/>
                ))}
            </div>
        </div>
    );
};

export default Products;
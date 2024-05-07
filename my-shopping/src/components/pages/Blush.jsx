import { useState, useEffect } from 'react';
import axios from 'axios'

const url = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick";

const Blush = () => {
    const [blushes, setBlushes] = useState([]);

    useEffect(() => {
        const fetchBlushes = async () => {
            try {
                const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush');
                setBlushes(response.data);
                console.log(response.data);
            } catch (error) {
                console.log('Erro ao obter blushes:', error);
            }
        };

        fetchBlushes();
    }, []);

    return (
        <div>
            <h1>Blushes</h1>
            <ul>
                {blushes.map((blush, index) => (
                    <li key={index}>{blush.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Blush;
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/allproducts")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <Container>
            <Row>
                {
                    products.map(product => <Product product={product} key={product._id}></Product> )
                }
            </Row>
        </Container>
    );
};

export default Products;
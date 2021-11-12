import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allreviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container className="my-3">
            <h2 className="text-center">Give a look at our products review</h2>
            <Carousel>
                {
                    reviews.map(review =><Carousel.Item key={review._id}>
                        <Card className="my-3 shadow" >
                            <Row>
                                <Col md={4} sm={12} className="border">
                                    <Card.Body className="p-5">
                                        <Card.Title>{review.product.name}</Card.Title>
                                        <Card.Text>
                                            <span>Price: {review.product.price} BDT</span>
                                            <br />
                                            <span>Capacity: {review.product.capacity} LTR</span>
                                            <br />
                                            <span>Band: {review.product.band}</span>
                                            <br />
                                            <span>Warranty: {review.product.warranty} YEARS</span>
                                            <br />
                                            <span>Made In: {review.product.madeIn}</span>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col md={4} sm={12} className="border">
                                    <Card.Img style={{width:'260px'}} src={review.product.imageUrl} />
                                </Col>
                                <Col md={4} sm={12} className="border">
                                    <Card.Body className="p-5">
                                        <Card.Title>Customer Feedback</Card.Title>
                                        <Card.Text>
                                            <span>Customer Name: {review.user}</span>
                                            <br />
                                            <span>Customer Email: {review.email}</span>
                                            <br />
                                            <span>Rating: {review.count}</span>
                                            <br />
                                            <span>Review: {review.feedback}</span>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
    
                    </Carousel.Item>)
                }
                
            </Carousel>
        </Container>
    );
};

export default Reviews;
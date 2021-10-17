import React from 'react';
import './OurService.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../images/Image/serveBurger.png';
import img2 from '../../images/Image/chef-cook-food-.png';
import img3 from '../../images/Image/delibari.png';

const OurService = () => {
    return (
        <Container className="my-5">
            <h1>Why you choose us</h1>
            <p className="pb-5 pt-3">Barton waited twenty always repair in within we do, An delighted offending <br /> curisity my dashwoods at. Boy prosperous increasing surrounded </p>
            <Row xs={1} sm={2} md={3} className="g-4">
                <Col>
                    <Card className="chooseCard">
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Fast Delevery</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet, dolorum ad nesciunt totam aliquam quas laborum at, blanditiis cum pariatur ex eveniet voluptatem nulla, debitis assumenda quidem libero porro.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="chooseCard">
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>A Good Auto Responder</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, est maxime a, quasi illo non saepe qui dolore ab esse eaque minus asperiores neque animi tenetur ea, accusantium alias facere.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="chooseCard">
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Home Delivery</Card.Title>
                            <Card.Text>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus dicta tempore dolor est voluptatum, itaque architecto ab debitis quos? Mollitia porro voluptate tempora sunt velit ut ipsum animi sapiente ex!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default OurService;
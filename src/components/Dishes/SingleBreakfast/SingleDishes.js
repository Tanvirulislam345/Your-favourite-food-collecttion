import React from 'react';
import './SingleDishes.css';
import { Card, Col } from 'react-bootstrap';

const SingleDishes = (props) => {
    const { name, description, balance, picture } = props.result;
    return (
        <Col className="App py-5">
            <Card className="cardStyle border-0">
                <Card.Img variant="top" src={picture} height="350px" className="p-2" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Title>{balance}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleDishes;
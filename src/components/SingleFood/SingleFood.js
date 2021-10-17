import React from 'react';
import './SingleFood.css';
import { Button, Card, Col } from 'react-bootstrap';

const SingleFood = (props) => {
    const { strMeal, strInstructions, strMealThumb, strYoutube } = props.food;
    return (
        <div>
            <Col>
                <Card className="searchCardStyle">
                    <Card.Img variant="top" src={strMealThumb}
                        style={{ borderRadius: '10px' }}
                    />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions.slice(0, 70)}
                        </Card.Text>
                        {/* <Card.Title>{balance}</Card.Title> */}
                        <Button variant="outline-primary" >see details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleFood;
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleDishes from '../SingleBreakfast/SingleDishes';

const Lunch = () => {
    const [lunch, setLunch] = useState([]);
    useEffect(() => {
        fetch('./lunch.json')
            .then(res => res.json())
            .then(data => setLunch(data));
    }, []);
    return (
        // className="row row-cols-1 row-cols-sm-2 row-cols-md-3 my-5"
        <Container>
            <Row xs={1} sm={2} md={3} className="g-4">
                {
                    lunch.map(result => <SingleDishes
                        key={result._id}
                        result={result}
                    ></SingleDishes>)
                }
            </Row>
        </Container>
    );
};

export default Lunch;
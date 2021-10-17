import React, { useEffect, useState } from 'react';
import './OurFood.css';
import { Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import SingleFood from '../SingleFood/SingleFood';


const OurFoods = () => {
    const [foods, setFoods] = useState([]);
    const [name, setName] = useState('fish');

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data.meals));
    }, [name]);

    const searchFoodName = e => {
        setName(e.target.value);

    }
    return (
        <div>
            <div className="searchBanner">
                <Container className="w-75">
                    <InputGroup className="w-50">
                        <FormControl
                            placeholder="Search your favourite food"
                            className="inputField"
                            onChange={searchFoodName}
                        />
                    </InputGroup>
                    <h1 className="searchContainer">Best Food Waiting for your belly</h1>
                </Container>
            </div>
            <Container>
                <h1 className="p-3 App">Our Food Collection</h1>
                <Row xs={1} sm={2} md={3} className="g-4">
                    {
                        foods.map(food => <SingleFood
                            key={food.idMeal}
                            food={food}
                        ></SingleFood>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default OurFoods;
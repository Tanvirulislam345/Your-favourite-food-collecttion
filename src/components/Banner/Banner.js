import React from 'react';
import './Banner.css';
import { Carousel, Col, Row } from 'react-bootstrap';
import img1 from '../../images/lunch/lunch5.png';
import img2 from '../../images/Breakfast/breakfast4.png';
import img3 from '../../images/Dinner/dinner2.png';

const Banner = () => {
    return (
        <Carousel fade className="banner py-3 App">
            <Carousel.Item>
                <Row xs={1} sm={2} md={2} className="align-items-center justify-content-center">
                    <Col>
                        <h2 className="title">
                            Today<span> RedOnion </span> <br /><span> Special</span> Breakfast
                        </h2>
                        <p className="text-white text-center ms-3">
                            Eat right, exercise, die anyway.
                            It’s essential for every party to have cake. If there’s no cake, then it’s only a meeting
                        </p>
                        <button className="mt-3 about-btn">Discount</button>
                    </Col>
                    <Col className="p-5">
                        <img
                            className="d-block w-100"
                            src={img2} height="400px"
                            alt="First slide"
                        />
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row xs={1} sm={2} md={2} className="align-items-center justify-content-center">
                    <Col>
                        <h2 className="title">
                            Today<span> RedOnion </span> <br /><span> Special</span> lunch
                        </h2>
                        <p className="text-white text-center ms-3">
                            If you talk about food just as much as you eat it, you're in good company. We've got famous chefs and stars—Julia Child.
                        </p>
                        <button className="mt-3 about-btn">Discount</button>
                    </Col>
                    <Col className="p-5">
                        <img
                            className="d-block w-100"
                            src={img3} height="400px"
                            alt="First slide"
                        />
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row xs={1} sm={2} md={2} className="align-items-center justify-content-center">
                    <Col>
                        <h2 className="title">
                            Today<span> RedOnion </span> <br /><span> Special</span> Dinner
                        </h2>
                        <p className="text-white text-center ms-3">
                            Eat right, exercise, die anyway.
                            It’s essential for every party to have cake. If there’s no cake, then it’s only a meeting
                        </p>
                        <button className="mt-3 about-btn">Discount</button>
                    </Col>
                    <Col className="p-5">
                        <img
                            className="d-block w-100"
                            src={img1} height="400px"
                            alt="First slide"
                        />
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>

    );
};

export default Banner;
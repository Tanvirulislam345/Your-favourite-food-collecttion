import React from 'react';
import Banner from '../Banner/Banner';
import Lunch from '../Dishes/Lunch/Lunch';
import MiddleNav from '../MiddleNav/MiddleNav';
import OurFoods from '../OurFoods/OurFoods';
import OurService from '../OurService/OurService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MiddleNav></MiddleNav>
            <Lunch></Lunch>
            <OurFoods></OurFoods>
            <OurService></OurService>
        </div>
    );
};

export default Home;
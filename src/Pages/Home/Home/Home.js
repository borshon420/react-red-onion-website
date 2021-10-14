import React from 'react';
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';

const Home = () => {
    return (
        <div className="mt-5">
            <h1>This is home</h1>
            <Breakfast></Breakfast>
            <Lunch></Lunch>
        </div>
    );
};

export default Home;
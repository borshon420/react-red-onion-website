import React, { useEffect, useState } from 'react';
import BreakfastDetails from '../BreakfastDetails/BreakfastDetails';
import './Breakfast.css';

const Breakfast = () => {
    const [breakfast, setBreakfast] = useState([])
    useEffect(()=> {
        fetch('breakfast.json')
        .then(res => res.json())
        .then(data => setBreakfast(data))
    }, [])
    return (
        <div className="my-5">
            <h1>Breakfast</h1>
            <div className="breakfast-container w-75">
            {
                breakfast.map(breakfastDetails => <BreakfastDetails
                key={breakfastDetails._id}
                breakfastDetails={breakfastDetails}
                ></BreakfastDetails>)
            }
            </div>
        </div>
        
    );
};

export default Breakfast;
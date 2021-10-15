import React, { useEffect, useState } from 'react';
import LunchDetails from '../LunchDetails/LunchDetails';

const Lunch = () => {
    const [lunch, setLunch] = useState([])
    useEffect(()=>{
        fetch('lunch.json')
        .then(res => res.json())
        .then(data => setLunch(data))
    }, [])
    return (
        <div className="my-5">
            <h1>Lunch</h1>
            <div className="breakfast-container w-75">
                {
                    lunch.map(lunchDetails => <LunchDetails
                    key={lunchDetails._id}
                    lunchDetails={lunchDetails}
                    ></LunchDetails>)
                }
            </div>
        </div>
    );
};

export default Lunch;
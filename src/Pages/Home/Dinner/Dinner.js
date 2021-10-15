import React, { useEffect, useState } from 'react';
import DinnerDetails from '../DinnerDetails/DinnerDetails';

const Dinner = () => {
    const [dinner, setDinner] = useState([])
    useEffect(()=>{
        fetch('dinner.json')
        .then(res => res.json())
        .then(data => setDinner(data))
    }, [])
    return (
        <div className="my-5">
            <h1>Dinner</h1>
            <div className="breakfast-container w-75">
            {
                dinner.map(dinnerDetails => <DinnerDetails
                key={dinnerDetails._id}
                dinnerDetails={dinnerDetails}
                ></DinnerDetails>)
            }
            </div>
            
        </div>
    );
};

export default Dinner;
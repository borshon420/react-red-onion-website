import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import './Home.css';

const Home = () => {
    return (
        <div className="mt-5">
            <div>
                {/* Header section */}
                <div className="header-section">
                    <div className="heading">
                        <h1>Best food waiting for your belly</h1>
                    </div>
                    <div className="banner-input">
                    <InputGroup className="mb-3 w-50 mx-auto ">
                        <FormControl
                            placeholder="Search Food Items"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="btn btn-danger text-white" id="button-addon2">
                        Search
                        </Button>
                    </InputGroup>
                    </div>
                </div>
            </div>
            <Breakfast></Breakfast>
            <Lunch></Lunch>
            <Dinner></Dinner>
        </div>
    );
};

export default Home;
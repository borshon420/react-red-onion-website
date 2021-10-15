import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <div className="mt-5">
            <main>
                {/* banner section */}
                <div className="banner-section">
                    <div className="banner-head">
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
            </main>
        </div>
    );
};

export default Home;
import React from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const {signInUsingGoogle} = useFirebase()
    return (
        <div>
            <h1>Please Login</h1>
            <Button onClick={signInUsingGoogle} variant="warning">Google Sign In</Button>
        </div>
    );
};

export default Login;
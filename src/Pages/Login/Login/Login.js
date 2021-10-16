import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import loginLogo from '../../../images/logo2.png';
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useFirebase();
  return (
    <div className="header-section">
      <div className="login-container">
            <Link to="/">
                <img style={{height: '50px', marginBottom: '30px'}} src={loginLogo} alt="" />
            </Link>
        <div className="w-25 mx-auto">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Button variant="danger" className="w-100 bg-danger text-white mb-3" type="submit">
              Submit
            </Button>
          </Form>
          <Button onClick={signInUsingGoogle} className="w-100 bg-danger text-white mb-3" variant="danger">
          Google Sign In
        </Button>
        </div>
        
      </div>
    </div>
  );
};

export default Login;

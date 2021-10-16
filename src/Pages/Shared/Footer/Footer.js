import React from 'react';
import './Footer.css';
import footerLogo from '../../../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
       
        <div className="footer-contairner">
            <div className="footer-logo">
                <Link to="/">
                <img style={{height: '50px'}} src={footerLogo} alt="" />
                </Link>
            </div>
            <div className="footer-content-1">
                <p>About Online food</p>
                <p>Read Our Blog</p>
                <p>Sign Up to deliver</p>
                <p>Add your restaurant</p>
            </div>
            <div className="footer-content-2">
                <p>Get Help</p>
                <p>Read FAQs</p>
                <p>View all cities</p>
                <p>Restaurants near me</p>
            </div>
            <div className="footer-content-3">
                <p>Privacy Policy.</p>
                <p>Terms of Use</p>
                <p>Pricing</p>
            </div>
        </div>
       
    );
};

export default Footer;
import React from 'react'
import {Link} from 'react-scroll'
import { BrowserRouter as Router, Route, Link as RouterLink } from 'react-router-dom';

import './NavBar.css';
import { BrowserRouter } from 'react-router-dom';

export default function NavBar() {
    return (
        <BrowserRouter>
            <div className="navbar" id='navbar'>
            <div className="nav-links">
                <div className="logo">
                    <img src="logo.png" alt="logo" />
                </div>
                <nav className="nav">
                    <ul>
                        <li>
                            <Link to="homepage" className="link active">Home</Link>
                        </li>

                        <li>
                            <Link to="currency" className="link">About</Link>
                        </li>

                        <li>
                            <Link to="services" className="link">Services</Link>
                        </li>

                        <li>
                            <Link to="steps" className="link">Steps</Link>
                        </li>

                        <li>
                            <Link to="blog" className="link">Blog</Link>
                        </li>

                        <li>
                            <Link to="contacts" className="link">Contacts</Link>
                        </li>
                    </ul>
                </nav> 
                <div className="auth-btn">
                    <RouterLink to="/login" id='login'>Login</RouterLink>
                    <RouterLink to="/register" id='register'>Sign Up</RouterLink>
                </div>
            </div>
        </div>
        </BrowserRouter>
    )
}

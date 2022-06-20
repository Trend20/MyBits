import React from 'react'
import Homepage from '../Homepage/Homepage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './NavBar.css';

export default function NavBar() {
    return (
       <Router>
        <div className="navbar" id='navbar'>
            <div className="nav-links">
                <div className="logo">
                    <img src="logo.png" alt="logo" />
                </div>
                <nav className="nav">
                    <ul>
                        <li>
                            <Link to="/" className="link active">Home</Link>
                        </li>

                        <li>
                            <Link to="/about" className="link">About</Link>
                        </li>

                        <li>
                            <Link to="/services" className="link">Services</Link>
                        </li>

                        <li>
                            <Link to="/features" className="link">Features</Link>
                        </li>

                        <li>
                            <Link to="/blog" className="link">Blog</Link>
                        </li>

                        <li>
                            <Link to="/contacts" className="link">Contacts</Link>
                        </li>
                    </ul>
                </nav> 
            </div>
                <Switch>
                    <Route exact path="/">
                         <Homepage />
                    </Route>

                    <Route path="/about">
                         About
                    </Route>

                    <Route path="/services">
                         Services 
                    </Route>

                    <Route path="/features">
                         Features
                    </Route>

                    <Route path="/blog">
                        Blog
                    </Route>

                    <Route path="/contacts">
                         Contacts
                    </Route>
                </Switch>
        </div>
       </Router>
    )
}

import React from 'react'
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
        <div className="navbar">
            <div className="logo">
                <img src="logo.png" alt="logo" />
            </div>

            <div className="nav-links">
                <nav className="nav">
                    <ul>
                        <li>
                            <Link to="/" className="link active">Home</Link>
                        </li>

                        <li>
                            <Link to="/" className="link">About</Link>
                        </li>

                        <li>
                            <Link to="/" className="link">Services</Link>
                        </li>

                        <li>
                            <Link to="/" className="link">Features</Link>
                        </li>

                        <li>
                            <Link to="/" className="link">Blog</Link>
                        </li>

                        <li>
                            <Link to="/" className="link">Contacts</Link>
                        </li>
                    </ul>
                </nav> 

                <Switch>
                    <Route exact path="/">
                         Home
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
        </div>
       </Router>
    )
}

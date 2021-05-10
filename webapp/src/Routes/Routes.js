import React from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Routes() {
    return (
        <Router>
            <div style={{alignContent:"center"}}>
            <Link to="/home">Home</Link> | 
            <Link to="/about">About</Link> | 
            <Link to="/contactus">Contact Us</Link>
            </div>
            <Route path='/home' />
            <Route path='/about' />
            <Route path='/contactus' />
        </Router>
    )
}

export default Routes

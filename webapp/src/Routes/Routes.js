import React from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Routes() {
    return (
        <Router>
            
            <Route path='/home' />
            <Route path='/about' />
            <Route path='/contactus' />
        </Router>
    )
}

export default Routes

import React from 'react'
import {BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Catalouge from '../Components/Catalouge/Catalouge'
import Header from '../Components/Header/Header';

function Routes() {
    return (
        <Router>
        <Header/>
{/*         
            <Route path='/Catalouge' component={Catalouge}/>
            <Route path='/AddItems' component={Catalouge}/> */}
        </Router>
    )
}

export default Routes

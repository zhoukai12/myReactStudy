import React, { Component } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom'
import NavLeft from './NavLeft'



class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <Router>
                <NavLeft></NavLeft>
            </Router>
        );
    }
}

export default AppRouter;
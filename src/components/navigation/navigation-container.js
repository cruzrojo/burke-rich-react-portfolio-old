import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import moment from "moment";

export default class NavigationContainer extends Component {
    constructor() {
        super();

        // this.state = {

        // }

    }

    render() {
        return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                    </div>
                        
                    <div className="nav-link-wrapper">
                        <NavLink to="/about-me" activeClassName="nav-link-active">About</NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>    
                    </div>
                    
                    <div className="nav-link-wrapper">
                        <NavLink to="/blog" activeClassName="nav-link-active">Blog</NavLink>
                    </div>
                </div>
                <div className="right-side">
                    <div>Burke M Rich</div>
                    <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
                </div>
            </div>
        )
    }
}
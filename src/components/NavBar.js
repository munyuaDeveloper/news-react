import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render() { 
        return (
            <>
                <nav>
                    <div className="nav-wrapper">
                    <a href="#" className="brand-logo">GLOBAL HOT NEWS</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li> <Link to="/about">About us</Link></li>
                        <li> <Link to="/contact">Contact us</Link></li>
                    </ul>
                    </div>
                </nav>
        
            </>
        );
    }
}
 
export default NavBar;
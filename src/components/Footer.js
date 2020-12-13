import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer class="page-footer">
            <div class="container">
              <div class="row">
                <div class="col l6 s12">
                  <h5 class="white-text">Footer Content</h5>
                  <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
                <div class="col l4 offset-l2 s12">
                  <h5 class="white-text">Quick Links</h5>
                  <ul>
                  <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li> <Link to="/about">About us</Link></li>
                        <li> <Link to="/contact">Contact us</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="container">
              © 2014 Copyright Text
              <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
              </div>
            </div>
          </footer>
         );
    }
}
 
export default Footer;
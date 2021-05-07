import '../App.css';
import React, {Component} from "react";
import NavBar from './NavBar';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact'
import Footer from './Footer';
import ProjectDetail from './ProjectDetail';
import ProjectList from './ProjectList';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <Router>
                <div className="App">
                    <NavBar />
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/projects" component={ProjectList} />
                    <Route path="/project/:id" component={ProjectDetail} />
                    <Footer />
                </div>
                
            </Router>
            
         );
    }
}
 
export default App;
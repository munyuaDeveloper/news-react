import React, { Component } from 'react'
import NewsList from './NewsList'
import SideWidget from './SideWidget'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            news1: {
                type: 'top-headlines',
                query: 'sources=bbc-news'
            },
            news2: {
                type: 'everything',
                query: 'domains=techcruch.com&language=en'
            },
            news3: {
                type: 'everything',
                query: 'domains=comicbookmovie.com&language=en'
            }
         }
    }
    render() { 
        return ( 
            <div className="row main_content">
                        <div className="col s9">
                        <div className="row">
                            <NewsList news={this.state.news1}  />
                            <NewsList news={this.state.news2}  />
                        </div>
                        
                        </div>
                        <div className="col s3">
                        <SideWidget news={this.state.news3}  />
                        </div>
                    </div>
         );
    }
}
 
export default Home;
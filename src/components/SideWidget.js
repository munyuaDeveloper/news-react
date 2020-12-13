import axios from 'axios';
import React, {Component} from 'react'
import SingleSideNews from './SingleSideNews.'

class SideWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sideNews: [],
        }
    }

    componentDidMount() {
        const type = this.props.news.type
        const source = this.props.news.query
        const url = `http://newsapi.org/v2/${type}?${source}&apiKey=d5a834d796b348e1ba40f7cb68c867e6`;
        
        axios.get(url)
        .then((response) => {
            this.setState({
              sideNews: response.data.articles  
            })
            
        })
        .catch((error)=> console.log(error))
    }

    renderItems() {
        return this.state.sideNews.map((item) => (
            <SingleSideNews key={item.url} item={item}/>
        ))
    }

    render() {
        return (
            <>
                    {this.renderItems()}
            </>
        )
    }
}

export default SideWidget

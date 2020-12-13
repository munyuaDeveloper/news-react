import React, {Component} from 'react'
import SingleNews from "./SingleNews";



class NewsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: [],
        }
    }

    componentDidMount() {
        const type = this.props.news.type
        const source = this.props.news.query
        const url = `http://newsapi.org/v2/${type}?${source}&apiKey=d5a834d796b348e1ba40f7cb68c867e6`;
        // const url = `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d5a834d796b348e1ba40f7cb68c867e6`;
        fetch(url)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                this.setState({
                    news: data.articles
                })
            })
            .catch((error)=> console.log(error))
    }

    renderItems() {
        return this.state.news.map((item) => (
            <SingleNews key={item.url} item={item}/>
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

export default NewsList

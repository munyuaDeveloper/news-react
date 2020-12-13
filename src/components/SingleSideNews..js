import React, { Component } from 'react'


class SingleSideNews extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return ( 
            <div>
                <a className="red-text red-darken-3" href={this.props.item.url} target="_blank">
                    <h5>{this.props.item.source.name}</h5> 
                    <p>{this.props.item.title}</p>
                </a>
                <div className="divider"></div>
            </div>
         );
    }
}
 
export default SingleSideNews;
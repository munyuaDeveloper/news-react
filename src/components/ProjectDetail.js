import React, { Component } from 'react'
// import {useParams} from 'react-router-dom'
export default class ProjectDetail extends Component {
        state = {
            id: null
        }

        componentDidMount() {
            const id = this.props.match.params.id;
            this.setState({id});
          }

    render() {
        // let { id } = useParams();
        
        console.log('id', this.state.id);
        return (
            <div>
                <p>This is details of {`project ${this.state.id}`}</p>
            </div>
        )
    }
}

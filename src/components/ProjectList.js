import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProjectList extends Component {
    state = {
        projects: [{ name: 'Project 1', id: '1' },
        { name: 'Project 2', id: '2' }]
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.projects.map(project => {
                            return (
                                <tr>
                                    <td>
                                        {project.name}
                                    </td>
                                    <td>{<Link to={`project/${project.id}`}>{project.name}</Link>}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

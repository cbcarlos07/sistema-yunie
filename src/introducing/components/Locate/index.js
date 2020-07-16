import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Locate extends Component{
    render(){
        return (
            <div className="breadcrumb-agile bg-light py-2">
                <ol className="breadcrumb bg-light m-0">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">{this.props.locate}</li>
                </ol>
            </div>
        )
    }
}
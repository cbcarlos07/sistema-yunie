import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Locate extends Component{
    render(){
        return (
            <div class="breadcrumb-agile bg-light py-2">
                <ol class="breadcrumb bg-light m-0">
                <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{this.props.locate}</li>
                </ol>
            </div>
        )
    }
}
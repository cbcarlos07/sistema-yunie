import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'

export default class Menu extends Component {
    render(){
        return (
            <div className="main-top py-1">
                <div className="container">
                    <div className="nav-content">
                        <h1>
                            <NavLink id="logo" className="logo" to="/" activeClassName="active">
                                <img src={logo} alt="" className="img-fluid" /><span></span> Yunie
                            </NavLink>
                        </h1>
                        
                        <div className="nav_web-dealingsls">
                            <nav>
                                <label for="drop" className="toggle">Menu</label>
                                <input type="checkbox" id="drop" />
                                <ul className="menu">
                                    <li><NavLink to="/" activeClassName="active">Início</NavLink></li>
                                    <li><NavLink to="/about" activeClassName="active">Sobre nós</NavLink></li>
                                    <li><NavLink to="/register" activeClassName="active">Cadastre-se</NavLink></li>
                                    <li><a href="contact.html">Contact Us</a></li>

                                </ul>
                            </nav>
                        </div>
                        
                    </div>
                </div>
            </div>    
        )
    }

}  
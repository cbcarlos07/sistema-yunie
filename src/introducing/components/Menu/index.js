import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/introducing/images/logo.png'
import api from '../../../services/api'
import env from '../../../environments'
import socketIOClient from "socket.io-client";
const  Menu = () => {

    const [ response, setResponse ] = useState(
        {
            logo: {},
            menu: []
        }
    )

    useEffect(()=>{
        const socket = socketIOClient( env.host.dev )
        socket.on('menu', data => {
            buscarDados()
        })
        socket.on('logo', data => {
            buscarDados()
        })
    },[])

    useEffect(()=>{
        buscarDados()
    }, [])



    function buscarDados() {
        api.get('/menu')
           .then( resp => {
               setResponse( resp.data )
           })
    }

    
    return (
        <div className="main-top py-1">
            <div className="container">
                <div className="nav-content">
                    <h1>
                        <NavLink id="logo" className="logo" to="/banner" activeClassName="active">
                            <img src={response.logo.imagem} alt="" className="img-fluid" /><span></span> {response.logo.titulo}
                        </NavLink>
                    </h1>
                    
                    <div className="nav_web-dealingsls">
                        <nav>
                            <label htmlFor="drop" className="toggle">Menu</label>
                            <input type="checkbox" id="drop" />
                            <ul className="menu">
                                {
                                    response.menu.map( item => (
                                        <li key={item.id}>
                                            <NavLink to={item.url} activeClassName="active">{item.descricao}</NavLink>
                                        </li>        
                                    ) )
                                }
                            </ul>
                        </nav>
                    </div>
                    
                </div>
            </div>
        </div>    
    )

}

export default Menu
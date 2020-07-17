import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'



const Menu = props => {
    const location = props.location

    
    return (
        <aside className="main-sidebar">

            <ul className="sidebar-menu" data-widget="tree">
                <li className="header">MAIN NAVIGATION</li>
                <li  className='active'>
                    <Link to="#" >
                        <i className="fa fa-dashboard"></i> <span>Início </span>
                        <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </Link>
                    <ul className="treeview-menu">
                        <li className={location.pathname == '/banner' ? 'active' : '' }><NavLink to="/banner" ><i className="fa fa-circle-o"></i> Banner</NavLink></li>
                        <li className={location.pathname == '/encontra' ? 'active' : '' }><NavLink to="/encontra" ><i className="fa fa-circle-o"></i>Vocẽ encontra</NavLink></li>
                        <li className={location.pathname == '/servicos' ? 'active' : '' }><NavLink to="/servicos" ><i className="fa fa-circle-o"></i>Serviços</NavLink></li>
                    </ul>
                </li>
            </ul>	

        </aside>
    )
}

export default Menu
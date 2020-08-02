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
                        <li className={location.pathname == '/contato' ? 'active' : '' }><NavLink to="/contato" ><i className="fa fa-circle-o"></i>Contato</NavLink></li>
                        <li className={location.pathname == '/sobre' ? 'active' : '' }><NavLink to="/sobre" ><i className="fa fa-circle-o"></i>Sobre Nós</NavLink></li>
                        <li className={location.pathname == '/cabecalho' ? 'active' : '' }><NavLink to="/cabecalho" ><i className="fa fa-circle-o"></i>Cabeçalho</NavLink></li>
                        <li className={location.pathname == '/logo' ? 'active' : '' }><NavLink to="/logo" ><i className="fa fa-circle-o"></i>Logo</NavLink></li>
                        <li className={location.pathname == '/cartao-credito' ? 'active' : '' }><NavLink to="/cartao-credito" ><i className="fa fa-circle-o"></i>Cartão de Crédito</NavLink></li>
                        <li className={location.pathname == '/menu' ? 'active' : '' }><NavLink to="/menu" ><i className="fa fa-circle-o"></i>Menu</NavLink></li>
                        <li className={location.pathname == '/usuario' ? 'active' : '' }><NavLink to="/usuario" ><i className="fa fa-circle-o"></i>Usuário</NavLink></li>
                    </ul>
                </li>
            </ul>	

        </aside>
    )
}

export default Menu

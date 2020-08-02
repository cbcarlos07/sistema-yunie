import React from 'react'
import Locate from '../../components/Locate'
import { Link } from 'react-router-dom'
import './styles.css'
const Login = () => (
    <>
        <Locate locate="Login"/>
        <div className="login-contect py-5">
            <div className="container py-xl-5 py-3">
                <div className="login-body">
                    <div className="login mx-auto">

                        <div className="row middle-flex">
                                <Link to="/cliente" className="btn login-button-2 mb-4 col-md-6">
                                    <span className="fa fa-sign-in mr-2"></span>Cliente
                                </Link>
                            
                                        
                            
                                <Link to="/estabelecimento" className="btn  login-button-2 submit mb-4 col-md-6">
                                    <span className="fa fa-sign-in mr-2"></span><span className="login-pagina">Estabelecimento</span>
                                </Link>
                            

                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    </>
)

export default Login
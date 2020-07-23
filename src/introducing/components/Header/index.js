import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socketIOClient from "socket.io-client";
import api from '../../../services/api';
import env from '../../../environments';

const Header = () => {

	const [response, setResponse] = useState({contato: {}, cabecalho: []})

	useEffect(() => {
        const socket = socketIOClient(env.host);
        socket.on("header", data => {
            buscarDados()  
		});
		socket.on("contato", data => {
            buscarDados()  
        });
	  }, []);

	useEffect(()=>{
		buscarDados()
	},[])  
	  
	function buscarDados(){
		api.get(`/header`)
		   .then( resp => {
				setResponse( resp.data )
		   })
	}


	return (
		<header id="home">
			
			<div className="top-bar py-2 border-bottom">
				<div className="container">
					<div className="row middle-flex">
						<div className="col-xl-7 col-md-5 top-social-agile mb-md-0 mb-1 text-lg-left text-center">
							<div className="row">
								<div className="col-xl-3 col-6 header-top_w3layouts">
									<p className="text-da">
										<span className="fa fa-map-marker mr-2"></span>{response.contato.cidade}
									</p>
								</div>
								<div className="col-xl-3 col-6 header-top_w3layouts">
									<p className="text-da">
										<span className="fa fa-phone mr-2"></span>{response.contato.telefone}
									</p>
								</div>
								<div className="col-xl-6"></div>
							</div>
						</div>
						<div className="col-xl-5 col-md-7 top-social-agile text-md-right text-center pr-sm-0 mt-md-0 mt-2">
							<div className="row middle-flex">
								<div className="col-lg-5 col-4 top-w3layouts p-md-0 text-right">
									
									<Link to="/login" className="btn login-button-2 text-uppercase text-wh">
										<span className="fa fa-sign-in mr-2"></span>Entrar</Link>
									
								</div>
								<div className="col-lg-7 col-8 social-grid-w3">
									
									<ul className="top-right-info">
										<li>
											<p>Siga-nos:</p>
										</li>
										{
											response.cabecalho.map( item => (
												<li className={item.logo} key={item.id}>
													<Link to={item.url}>
														<span className={`fa fa-${item.logo}`}></span>
													</Link>
												</li>
											) )
										}
									
										
										
									</ul>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
import React, { useState, useEffect } from 'react'

import socketIOClient from "socket.io-client";
import { api } from '../../../services/api';
import env from '../../../environments';
import { Link } from 'react-router-dom';

const Footer = () => {
	const [response, setResponse] = useState({
		logo: {}, 
		contato: {}, 
		redes: [],
		credito: []
	})
	const [paragraph, setParagraph] = useState()
	useEffect(() => {
        const socket = socketIOClient(env.host.dev);
        socket.on("logo", data => {
            buscarDados()  
		});
		socket.on("contato", data => {
            buscarDados()  
		});
		socket.on("cartao", data => {
            buscarDados()  
        });
	  }, []);

	useEffect(()=>{
		buscarDados()
	},[])  
	  
	function buscarDados(){
		api.get(`/footer`)
		   .then( resp => {
			let newText = resp.data.logo.descricao.replace(/<br\s*[\/]?>/gi, "\n");
			setParagraph( newText )
			setResponse( resp.data )
		   })
	}


	return (
	<>
    <footer className="py-5">
		<div className="container py-xl-4">
            <div className="row footer-top">
                <div className="col-lg-4 footer-grid_section_1its footer-text">
                    <h2>
                        <a className="logo text-wh" href="index.html">
                            <img src={response.logo.imagem} alt="" className="img-fluid" /><span></span> {response.logo.titulo}
                        </a>
                    </h2>

						<p className="mt-lg-4 mt-3 mb-lg-5 mb-4">{paragraph}</p>

                        <ul className="top-right-info">
						<li>
							<p>Siga-nos:</p>
						</li>
						{
							response.redes.map( rede => (
								<li className={rede.logo} key={rede.id}>
									<a href={rede.url}>
										<span className={`fa fa-${rede.logo}`}></span>
									</a>
								</li>
							))
						}
						
					</ul>


                </div>
                <div className="col-lg-4 footer-grid_section_1its my-lg-0 my-sm-4 my-4">
                    <div className="footer-title">
						<h3>Entre em contato</h3>
					</div>
                    <div className="footer-text mt-4">
						<p>Local:  {response.contato.cidade} </p>
						<p className="my-2">Telefone: {response.contato.telefone}</p>
						<p>Email : <a href={`mailto:${response.contato.email}`}>{response.contato.email}</a></p>
					</div>
                    <div className="footer-title mt-4 pt-md-2">
						<h3>Formas de pagamento</h3>
					</div>
					<ul className="list-unstyled payment-links mt-4">
						{
							response.credito.map( c => (
								<li key={c.id}>
									<a href="#"><img src={c.imagem} alt="" /></a>
								</li>
							))
						}
						
					</ul>
                </div>
	
            </div>
        </div>
	</footer>

	<div className="cpy-right text-center py-3">
		<p>© 2020 Yunie. Todos os direitos reservados | Design by
			<Link to="/login-site"> W3layouts.</Link>
		</p>
	</div>

	<a href="#home" className="move-top text-center">
        <span className="fa fa-level-up" aria-hidden="true"></span>
    </a>
	</>

      
   )

}


export default Footer
import React, { useState, useEffect } from 'react'
import Locate from '../../components/Locate'
import { api } from '../../../services/api'
import socketIOClient from "socket.io-client";
import './styles.css'
import env from '../../../environments'
const About = ()=>{
	const [response, setResponse] = useState({titulo: ''})	
	const [paragraph, setParagraph] = useState()
	useEffect(()=>{
		buscarDados()
	},[])
	useEffect(() => {
        const socket = socketIOClient(env.host.dev);
        socket.on("sobrenos", data => {
            buscarDados()  
        });
      }, []);

	function buscarDados(){
		api.get('/sobre-nos')
		   .then( resp =>{
			let newText = resp.data.detalhe.replace(/<br\s*[\/]?>/gi, "\n");
			   setParagraph( newText )
			   setResponse(resp.data)
		   })
	}


        return (
			<>
           
			
			<Locate locate="Sobre nós"/>

			<section className="w3ls-bnrbtm py-5" id="about">
				<div className="container py-xl-5 py-lg-3">
					<div className="title-section text-center mb-md-5 mb-4">
						<h3 className="w3ls-title mb-3">{response.titulo} <span>{response.subtitulo}</span></h3>
						<p className="titile-para-text mx-auto">{response.descricao}</p>
					</div>

					<div className="row">

						<div className="col-lg-6 pr-xl-5 mt-xl-2 mt-lg-0">
							
						<p className="sub-para">{paragraph}</p>	

						</div>
						<div className="col-lg-6 text-center mt-lg-0 mt-4">
							<img src={response.imagem} alt="about" className="img-fluid" />
						</div>

					</div>
				</div>
			</section>

			</>
        )   
}

export default About
import React, { useState, useEffect } from 'react'
import c1 from '../../../assets/introducing/images/c1.png'
import c2 from '../../../assets/introducing/images/c2.png'
import c3 from '../../../assets/introducing/images/c3.png'
import Locate from '../../components/Locate'
import api from '../../../services/api'
import socketIOClient from "socket.io-client";
import env from '../../../environments'

const Contact = () => {
    const [response, setResponse] = useState({})
    const [formData, setFormData] = useState({
        nome: '', email: '', telefone: '', mensagem: ''
    })
    
    useEffect(() => {
        const socket = socketIOClient(env.host);
        socket.on("contato", data => {
            buscarDados()  
        });
      }, []);

    useEffect(()=>{
        buscarDados()
    }, [])

    function handleInputChange(event){
        const { name, value } = event.target
        setFormData({...formData, [name]: value})
	}
	
	async function handleSubmit(event) {
        event.preventDefault()
        const {nome, email,  mensagem} = formData
        if( (nome === '') || (email === '') || mensagem ==='' ) {
            if( nome === '' ){
                alert('Por favor preencha o nome')
                return
            }

            if( email === '' ){
                alert('Por favor preencha o email')
                return
            }

            if( mensagem === '' ){
                alert('Por favor preencha a mensagem')
                return
            }
        }
        
		
		await api.post('/yunie/v1/contato/envio',formData)
        
        alert('Mensavem enviada com sucesso!')
        const obj = { nome: '', email: '', telefone: '', mensagem : '' }
        setFormData( obj )
		
	}

    function buscarDados(){
        api.get('/yunie/v1/contato/1')
        .then( resp =>{
            
            setResponse( resp.data )
        })
    }
    return (
        <>
        
        <div className="container">
        <Locate locate="Contato"/>

                <section className="ab-info-main py-5" id="contact">
                    <div className="container py-xl-5 py-lg-3">
                        <div className="title-section text-center mb-md-5 mb-4">
                            <h3 className="w3ls-title mb-3">{response.titulo} <span>{response.subtitulo}</span></h3>
                            <p className="titile-para-text mx-auto">{response.descricao}</p>
                        </div>
                        <div className="row ">
                            
                            <div className="col-md-5 address">
                                <h3 className="footer-title mb-4 pb-lg-2">Nosso endereço</h3>
                                <div className="row address-info-w3ls">
                                    <div className="col-3 address-left">
                                        <img src={c1} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-9 address-right mt-2">
                                        <h5 className="address mb-2">Cidade</h5>
                                        <p>{response.cidade}</p>
                                    </div>
                                </div>
                                <div className="row address-info-w3ls my-2">
                                    <div className="col-3 address-left">
                                        <img src={c2} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-9 address-right mt-2">
                                        <h5 className="address mb-2">Email</h5>
                                        <p>
                                            <a href={`mailto:${response.email}`}> {response.email}</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="row address-info-w3ls">
                                    <div className="col-3 address-left">
                                        <img src={c3} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-9 address-right mt-2">
                                        <h5 className="address mb-2">Telefone</h5>
                                        <p>{response.telefone}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-7 contact-right mt-lg-0 mt-5">
                                <form method="post" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6 form-group pr-lg-2">
                                            <input 
                                              type="text" 
                                              className="form-control" 
                                              name="nome" 
                                              placeholder="Nome"
                                              onChange={handleInputChange}
                                              required=""
                                              value={formData.nome} />
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-6 form-group pl-lg-2">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            name="email" 
                                            placeholder="E-mail" 
                                            required=""
                                            onChange={handleInputChange}
                                            value={formData.email} />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="telefone" 
                                            placeholder="Telefone (opcional)" 
                                            required=""
                                            onChange={handleInputChange}
                                            value={formData.telefone} />
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                            name="mensagem" 
                                            className="form-control" 
                                            placeholder="Message" 
                                            required=""
                                            onChange={handleInputChange}
                                            value={formData.mensagem}>
                                                
                                        </textarea>
                                    </div>
                                    <button type="submit" className="btn submit-contact-main ml-auto">Enviar</button>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </section>
        </div>

        </>    
    )
}

export default Contact
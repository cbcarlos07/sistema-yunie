import React, { useState, useEffect } from 'react'

import './style.css'

import socketIOClient from "socket.io-client";
import api from '../../../services/api'
import env from '../../../environments'


const Home = () =>{
    const [response, setResponse] = useState(
            {
                banner: {}, 
                encontra: {titulo: '', subtitulo: '', descricao: '', items: []},
                servicos: {titulo: '', subtitulo: '', descricao: '', items: [{},{},{},{}]}
            });
    


    useEffect(() => {
        const socket = socketIOClient(env.host.dev);
        socket.on("change", data => {
            buscarDados()  
          
        });
      }, []);

      useEffect(()=>{
        buscarDados()
      },[])

      function buscarDados(){
        api.get('/home')
           .then( resp => {
               setResponse(resp.data)
           })  
        
      }

    
        return (
            <>

            
                <div className="baneer-w3ls">
                    <div className="row no-gutters">
                        <div className="col-xl-5 col-lg-6">
                            <div className="banner-left-w3">
                                <div className="container">
                                    <div className="banner-info_agile_w3ls">
                                    
                                        <h5>{response.banner.titulo}</h5>
                                        <h3 className="text-da mb-4 col-xs-12 compras">{response.banner.subtitulo} <br /><span>{response.banner.descricao}</span> </h3>
                                        <p>{response.banner.slogan}</p>
                                       
                                        <div className="input-wrapper">
                                            <label htmlFor="stuff" className="fa fa-search input-icon"></label>
                                            <input id="stuff" className="form-control text-condominio"placeholder="Informe seu condomínio"/>
                                            
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 callbacks_container">
                            
                            <div className="csslider infinity" id="slider1">
                                <input type="radio" name="slides" checked="checked" id="slides_1" onChange={() => {}}/>
                                <input type="radio" name="slides" id="slides_2" />
                                <input type="radio" name="slides" id="slides_3" />
                                <ul className="banner_slide_bg ">
                                    <li>
                                        <div className="banner-top1 ">
                                            <img src={response.banner.imagem1} className="banner-1"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="banner-top2">
                                            <img src={response.banner.imagem2} className="banner-2"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="banner-top3">
                                            <img src={response.banner.imagem3} className="banner-3"/>
                                        </div>
                                    </li>
                                </ul>
                                <div className="arrows">
                                    <label htmlFor="slides_1"></label>
                                    <label htmlFor="slides_2"></label>
                                    <label htmlFor="slides_3"></label>
                                </div>
                                <div className="navigation">
                                    <div>
                                        <label htmlFor="slides_1"></label>
                                        <label htmlFor="slides_2"></label>
                                        <label htmlFor="slides_3"></label>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                
                
                <section className="blog_w3ls py-5">
                    <div className="container pb-xl-5 pb-lg-3">
                        <div className="title-section text-center mb-md-5 mb-4">
                            <p className="w3ls-title-sub">{response.encontra.titulo}</p>
                            <h3 className="w3ls-title">{response.encontra.subtitulo}<span> {response.encontra.descricao}</span></h3>
                        </div>
                        <div className="row">
                           
                           {
                               
                                response.encontra.items.map(item => (

                                    <div className="col-lg-4 col-md-6" key={item.id}>
                                            <div className="card border-0 med-blog">
                                                <div className="card-header p-0">
                                                    <a href="menu.html">
                                                        <img className="card-img-bottom" src={item.imagem} alt="Card image cap" />
                                                    </a>
                                                </div>
                                                <div className="card-body border border-top-0">
                                                    <h5 className="blog-title card-title m-0"><a href="menu.html">{item.titulo}</a></h5>
                                                    <p className="mt-3">{item.descricao}</p>
                                                    <a href="menu.html" className={`btn button-w3ls mt-4 mb-3 ${item.status == 0 ? 'disabled' : ''}`}>{item.botao}
                                                        <span className="fa fa-caret-right ml-1" aria-hidden="true"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                   ))
                               
                           }
                            


                        </div>
                    </div>
                </section>
	
                
				<section className="middle py-5" id="services">
					<div className="container py-xl-5 py-lg-3">
						<div className="title-section text-center mb-md-5 mb-4">
							<p className="w3ls-title-sub">{response.servicos.titulo}</p>
							<h3 className="w3ls-title mb-3">{response.servicos.subtitulo} <span>{response.servicos.descricao}</span></h3>
						</div>
						<div className="row grids-w3 py-xl-5 py-lg-4 pt-lg-0 pt-4">
							<div className="col-lg-5 w3pvt-lauits_banner_bottom_left">
								<div className="row">
									<div className="col-8 wthree_banner_bottom_grid_right text-right">
										<h4 className="mb-3"><a href="login.html">{response.servicos.items[0].titulo}</a></h4>
										<p>{response.servicos.items[0].descricao}</p>
									</div>
									<div className="col-4 wthree_banner_bottom_grid_left text-lg-right text-center">
										<img src={response.servicos.items[0].imagem} alt="" className="img-fluid" />
									</div>
								</div>
							</div>
							<div className="col-lg-2 w3pvt-lauits_banner_bottom_left">

							</div>
							<div className="col-lg-5 w3pvt-lauits_banner_bottom_left mt-lg-0 mt-4">
								<div className="row">
									<div className="col-4 wthree_banner_bottom_grid_left text-lg-right text-center">
										<img src={response.servicos.items[1].imagem} alt="" className="img-fluid" />
									</div>
									<div className="col-8 wthree_banner_bottom_grid_right">
										<h4 className="mb-3"><a href="login.html">{response.servicos.items[1].titulo}</a></h4>
										<p>{response.servicos.items[1].descricao}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row grids-w3 py-xl-5 py-lg-4 mt-lg-0 mt-4">
							<div className="col-lg-4 w3pvt-lauits_banner_bottom_left">
								<div className="row">
									<div className="col-8 wthree_banner_bottom_grid_right text-right pl-lg-0">
										<h4 className="mb-3"><a href="login.html">{response.servicos.items[2].titulo}</a></h4>
										<p>{response.servicos.items[2].descricao}</p>
									</div>
									<div className="col-4 wthree_banner_bottom_grid_left text-lg-right text-center pr-lg-0">
										<img src={response.servicos.items[2].imagem} alt="" className="img-fluid" />
									</div>
								</div>
							</div>
							<div className="col-lg-4 w3pvt-lauits_banner_bottom_left">

							</div>
							<div className="col-lg-4 w3pvt-lauits_banner_bottom_left mt-lg-0 mt-4">
								<div className="row">
									<div className="col-4 wthree_banner_bottom_grid_left text-lg-right text-center pl-lg-0">
										<img src={response.servicos.items[3].imagem} alt="" className="img-fluid" />
									</div>
									<div className="col-8 wthree_banner_bottom_grid_right pr-lg-0">
										<h4 className="mb-3"><a href="login.html">{response.servicos.items[3].titulo}</a></h4>
										<p>{response.servicos.items[2].descricao}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="img-blog-2">
						<img src={response.servicos.imagem} alt="" className="img-fluid" />
					</div>
				</section>

            </>    
        )
    
}

export default Home
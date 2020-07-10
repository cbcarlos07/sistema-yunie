import React, { Component } from 'react'

import blog1 from '../../../assets/introducing/images/blog1.jpg'
import blog2 from '../../../assets/introducing/images/blog2.jpg'
import blog3 from '../../../assets/introducing/images/blog3.jpg'

import s1 from '../../../assets/introducing/images/s1.png'
import s2 from '../../../assets/introducing/images/s2.png'
import s3 from '../../../assets/introducing/images/s3.png'
import s4 from '../../../assets/introducing/images/s4.png'
import img from '../../../assets/introducing/images/img.png'
import './style.css'
export default class Main extends Component{
    render(){
        return (
            <>
                <div className="baneer-w3ls">
                    <div className="row no-gutters">
                        <div className="col-xl-5 col-lg-6">
                            <div className="banner-left-w3">
                                <div className="container">
                                    <div className="banner-info_agile_w3ls">
                                        <h5>Faça suas compras</h5>
                                        <h3 className="text-da mb-4 compras">Próximo ao seu condomínio <br /><span>Seu pedido em até 30 minutos</span> </h3>
                                        <p>Suas compras a um clique</p>
                                       
                                        <div class="input-wrapper">
                                            <label for="stuff" class="fa fa-search input-icon"></label>
                                            <input id="stuff" className="form-control text-condominio"placeholder="Informe seu condomínio"/>
                                            
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 callbacks_container">
                            
                            <div className="csslider infinity" id="slider1">
                                <input type="radio" name="slides" checked="checked" id="slides_1" />
                                <input type="radio" name="slides" id="slides_2" />
                                <input type="radio" name="slides" id="slides_3" />
                                <ul className="banner_slide_bg">
                                    <li>
                                        <div className="banner-top1"></div>
                                    </li>
                                    <li>
                                        <div className="banner-top2"></div>
                                    </li>
                                    <li>
                                        <div className="banner-top3"></div>
                                    </li>
                                </ul>
                                <div className="arrows">
                                    <label for="slides_1"></label>
                                    <label for="slides_2"></label>
                                    <label for="slides_3"></label>
                                </div>
                                <div className="navigation">
                                    <div>
                                        <label for="slides_1"></label>
                                        <label for="slides_2"></label>
                                        <label for="slides_3"></label>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                
                
                <section className="blog_w3ls py-5">
                    <div className="container pb-xl-5 pb-lg-3">
                        <div className="title-section text-center mb-md-5 mb-4">
                            <p className="w3ls-title-sub">Você</p>
                            <h3 className="w3ls-title">Encontra na <span>Yunie</span></h3>
                        </div>
                        <div className="row">
                            
                            <div className="col-lg-4 col-md-6">
                                <div className="card border-0 med-blog">
                                    <div className="card-header p-0">
                                        <a href="menu.html">
                                            <img className="card-img-bottom" src={blog1} alt="Card image cap" />
                                        </a>
                                    </div>
                                    <div className="card-body border border-top-0">
                                        <h5 className="blog-title card-title m-0"><a href="menu.html">Mercado</a></h5>
                                        <p className="mt-3">Um mercado completo, com mais de 500 itens ao seu dispor.</p>
                                        <a href="menu.html" className="btn button-w3ls mt-4 mb-3">Compre agora
                                            <span className="fa fa-caret-right ml-1" aria-hidden="true"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                                <div className="card border-0 med-blog">
                                    <div className="card-header p-0">
                                        <a href="menu.html">
                                            <img className="card-img-bottom" src={blog2} alt="Card image cap" />
                                        </a>
                                    </div>
                                    <div className="card-body border border-top-0">
                                        <h5 className="blog-title card-title m-0"><a href="menu.html">Pizzaria</a></h5>
                                        <p className="mt-3">Pizzarias com o melhor cardápio da cidade.</p>
                                        <a href="menu.html" className="button-w3ls mt-4 mb-3">Em breve
                                            <span className="fa fa-caret-right ml-1" aria-hidden="true"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                                <div className="card border-0 med-blog">
                                    <div className="card-header p-0">
                                        <a href="menu.html">
                                            <img className="card-img-bottom" src={blog3} alt="Card image cap" />
                                        </a>
                                    </div>
                                    <div className="card-body border border-top-0">
                                        <h5 className="blog-title card-title m-0"><a href="menu.html">Pet Shop</a></h5>
                                        <p className="mt-3">Tudo de melhor para cuidar do seu animal de aplicação.</p>
                                        <a href="menu.html" className="button-w3ls mt-4 mb-3">Em breve
                                            <span className="fa fa-caret-right ml-1" aria-hidden="true"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
 
                        </div>
                    </div>
                </section>
	

				<section className="middle py-5" id="services">
					<div className="container py-xl-5 py-lg-3">
						<div className="title-section text-center mb-md-5 mb-4">
							<p className="w3ls-title-sub">Nosso Trabalho</p>
							<h3 className="w3ls-title mb-3">Excelentes <span>Serviços</span></h3>
						</div>
						<div className="row grids-w3 py-xl-5 py-lg-4 pt-lg-0 pt-4">
							<div className="col-lg-5 w3pvt-lauits_banner_bottom_left">
								<div className="row">
									<div className="col-8 wthree_banner_bottom_grid_right text-right">
										<h4 className="mb-3"><a href="login.html">Taxa Justa</a></h4>
										<p>Taxa de entrega com valor justo</p>
									</div>
									<div className="col-4 wthree_banner_bottom_grid_left text-lg-right text-center">
										<img src={s1} alt="" className="img-fluid" />
									</div>
								</div>
							</div>
							<div className="col-lg-2 w3pvt-lauits_banner_bottom_left">

							</div>
							<div className="col-lg-5 w3pvt-lauits_banner_bottom_left mt-lg-0 mt-4">
								<div className="row">
									<div className="col-4 wthree_banner_bottom_grid_left text-lg-right text-center">
										<img src={s2} alt="" className="img-fluid" />
									</div>
									<div className="col-8 wthree_banner_bottom_grid_right">
										<h4 className="mb-3"><a href="login.html">Compras rápidas</a></h4>
										<p>Suas compras em até 30 minutos. Exceto produtos feitos na hora.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row grids-w3 py-xl-5 py-lg-4 mt-lg-0 mt-4">
							<div className="col-lg-4 w3pvt-lauits_banner_bottom_left">
								<div className="row">
									<div className="col-8 wthree_banner_bottom_grid_right text-right pl-lg-0">
										<h4 className="mb-3"><a href="login.html">Atendimento Exclusivo</a></h4>
										<p>Atendimento exclusivo para moradores de condomínio.</p>
									</div>
									<div className="col-4 wthree_banner_bottom_grid_left text-lg-right text-center pr-lg-0">
										<img src={s3} alt="" className="img-fluid" />
									</div>
								</div>
							</div>
							<div className="col-lg-4 w3pvt-lauits_banner_bottom_left pr-0">

							</div>
							<div className="col-lg-4 w3pvt-lauits_banner_bottom_left mt-lg-0 mt-4">
								<div className="row">
									<div className="col-4 wthree_banner_bottom_grid_left text-lg-right text-center pl-lg-0">
										<img src={s4} alt="" className="img-fluid" />
									</div>
									<div className="col-8 wthree_banner_bottom_grid_right pr-lg-0">
										<h4 className="mb-3"><a href="login.html">24/7 Support</a></h4>
										<p>Morbi viverra lacus commodo felis semper lectus feugiat.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="img-blog-2">
						<img src={img} alt="" className="img-fluid" />
					</div>
				</section>

            </>    
        )
    }
}
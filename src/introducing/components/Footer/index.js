import React from 'react'

import logo from '../../../assets/introducing/images/logo.png'
import pay2 from '../../../assets/introducing/images/pay2.png'
import pay5 from '../../../assets/introducing/images/pay5.png'
import pay1 from '../../../assets/introducing/images/pay1.png'
import pay4 from '../../../assets/introducing/images/pay4.png'


const Footer = () => (
	<>
    <footer className="py-5">
		<div className="container py-xl-4">
            <div className="row footer-top">
                <div className="col-lg-4 footer-grid_section_1its footer-text">
                    <h2>
                        <a className="logo text-wh" href="index.html">
                            <img src={logo} alt="" className="img-fluid" /><span></span> Yunie
                        </a>
                    </h2>

                    <p className="mt-lg-4 mt-3 mb-lg-5 mb-4">Sed ut perspiciatis unde omnis iste natus errorhjhsit lupt
						atem
						accursit lupt atem accu
						dfdsa
						ntium doloremque laudan tium accu santium dolore.</p>

                        <ul className="top-right-info">
						<li>
							<p>Follow As:</p>
						</li>
						<li className="facebook-w3">
							<a href="#facebbok">
								<span className="fa fa-facebook-f"></span>
							</a>
						</li>
						<li className="twitter-w3">
							<a href="#twitter">
								<span className="fa fa-twitter"></span>
							</a>
						</li>
						<li className="google-w3">
							<a href="#google">
								<span className="fa fa-google-plus"></span>
							</a>
						</li>
						<li className="dribble-w3">
							<a href="#dribble">
								<span className="fa fa-dribbble"></span>
							</a>
						</li>
					</ul>


                </div>
                <div className="col-lg-4 footer-grid_section_1its my-lg-0 my-sm-4 my-4">
                    <div className="footer-title">
						<h3>Entre em contato</h3>
					</div>
                    <div className="footer-text mt-4">
						<p>Local: Manaus, Amazonas, Brasil</p>
						<p className="my-2">Telefone: +55 (92) 9 8250-2212</p>
						<p>Email : <a href="mailto:atendimento@yunie.com">E-mail: atendimento@yunie.com</a></p>
					</div>
                    <div className="footer-title mt-4 pt-md-2">
						<h3>Formas de pagamento</h3>
					</div>
					<ul className="list-unstyled payment-links mt-4">
						<li>
							<a href="login.html"><img src={pay2} alt="" /></a>
						</li>
						<li>
							<a href="login.html"><img src={pay5} alt=""/></a>
						</li>
						<li>
							<a href="login.html"><img src={pay1} alt=""/></a>
						</li>
						<li>
							<a href="login.html"><img src={pay4} alt=""/></a>
						</li>
					</ul>
                </div>
                <div className="col-lg-4 footer-grid_section_1its">
					<div className="footer-title">
						<h3>Request Info</h3>
					</div>
					<div className="info-form-right mt-4 p-0">
						<form action="#" method="post">
							<div className="row">
								<div className="col-lg-6 form-group mb-2 pr-lg-1">
									<input type="text" className="form-control" name="Name" placeholder="Name" required=""/>
								</div>
								<div className="col-lg-6 form-group mb-2 pl-lg-1">
									<input type="text" className="form-control" name="Phone" placeholder="Phone"
										required="" />
								</div>
							</div>
							<div className="form-group mb-2">
								<input type="email" className="form-control" name="Email" placeholder="Email" required="" />
							</div>
							<div className="form-group mb-2">
								<textarea name="Comment" className="form-control" placeholder="Comment"
									required=""></textarea>
							</div>
							<button type="submit" className="btn submit-contact ml-auto">Submit</button>
						</form>
					</div>
				</div>
            </div>
        </div>
	</footer>

	<div className="cpy-right text-center py-3">
		<p>© 2019 Tasty Burger. All rights reserved | Design by
			<a href="http://w3layouts.com"> W3layouts.</a>
		</p>
	</div>

	<a href="#home" className="move-top text-center">
        <span className="fa fa-level-up" aria-hidden="true"></span>
    </a>
	</>

      
)


export default Footer
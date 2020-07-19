import React from 'react'
import Locate from '../../components/Locate'
import inner_bg from '../../../assets/introducing/images/inner-bg.jpg'
const Register = () => (
	<>
	
	<Locate locate="Cadastro"/>

	<div className="login-contect py-5">
		<div className="container py-xl-5 py-3">
			<div className="login-body">
				<div className="login p-4 mx-auto">
					<h5 className="text-center mb-4">Cadastre conosco</h5>
					<form action="#" method="post">
						<div className="form-group">
							<label>Seu Nome</label>
							<input type="text" className="form-control" name="name" placeholder="" required="" />
						</div>
						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control" name="email" placeholder="" required="" />
						</div>

						<div className="row">
							<div className="col-lg-6 form-group pr-lg-2">
								
								<label>Casa/Apto</label>
								<input className="form-control" name="email" placeholder="Número " required="" />
								
							</div>

							
							 
						</div>
						<div className="col-lg-6 form-group pr-lg-2">
								
									<label>Quadra/Bloco/Torre</label>
									<input className="form-control" name="email" placeholder="Número" required="" />
								
							</div>

						

						<button type="submit" className="btn submit mb-4">Registre-se</button>
						<p className="text-center">
							<a href="#" className="text-da">Ao registrar-se em nosso sistema, você aceita nossos termos de uso</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	</div>
	
	</>
)
	
export default Register
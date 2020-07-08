import React from 'react'
import Locate from '../../components/Locate'

const Register = () => (
	<>
	<div className="main-banner-2">
	
	</div>
	
	<Locate locate="Cadastro"/>

	<div className="login-contect py-5">
		<div className="container py-xl-5 py-3">
			<div className="login-body">
				<div className="login p-4 mx-auto">
					<h5 className="text-center mb-4">Register Now</h5>
					<form action="#" method="post">
						<div className="form-group">
							<label>Seu Name</label>
							<input type="text" className="form-control" name="name" placeholder="" required="" />
						</div>
						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control" name="email" placeholder="" required="" />
						</div>

						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control" name="email" placeholder="" required="" />
						</div>
						
						<div className="col-xs-6">
							<div className="form-group">
								<label>Número da Casa/Apto</label>
								<input  className="form-control" name="email" placeholder="" required="" />
							</div>	 
						</div>

						<div className="col-xs-6">
							<div className="form-group">
								<label>Número da Quadra/Bloco/Torre</label>
								<input className="form-control" name="email" placeholder="" required="" />
							</div>
						</div>
						

						

						<button type="submit" className="btn submit mb-4">Register</button>
						<p className="text-center">
							<a href="#" className="text-da">By clicking Register, I agree to your terms</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	</div>
	
	</>
)
	
export default Register
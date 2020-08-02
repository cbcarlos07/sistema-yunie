import React, { useState, useEffect } from 'react'

import api from '../../../../services/api'
import './styles.css'
import { useHistory } from 'react-router-dom'
import md5 from 'md5'
const CartaoCreditoCadastro = ({ match }) => {
	const [formData, setFormData] = useState({
        nome: '', email: '', senha: '', senha1: ''
	})
	
	const [type, setType] =  useState('password')
	const [type1, setType1] =  useState('password')
    
	
	const history = useHistory()
	const [title, setTitle] = useState()
    const id = match.params.id || 0

	useEffect(()=>{
        setTitle('Cadastrar Usuário')
        if( id != 0 ){
			setTitle('Alterar Usuário')
            api.get(`/yunie/v1/usuario/${id}`)
               .then( response =>{
				setFormData( response.data )
				
               })
        }
	},[])

	function changeType(){
		setType( type == 'password' ? 'text' : 'password' )
	}

	function changeType1(){
		setType1( type1 == 'password' ? 'text' : 'password' )
	}
	
	
	function handleInputChange(event){
        const { name, value } = event.target

        setFormData({...formData, [name]: value})
	}
	
	async function handleSubmit(event) {
		event.preventDefault()
		const {senha, senha1} = formData
		if( senha != senha1 ) {
			alert('As senhas não conferem')
			return 
		}
		formData.senha = md5( senha )
		delete formData.senha1
        id == 0 ? await api.post('/yunie/v1/usuario',formData) : 
                  await api.put(`/yunie/v1/usuario/${id}`,formData)
        
		alert('Salvo com sucesso!')
		history.push('/usuario')
	}

	return (
		<>	
			<div className="box box-primary">
				<div className="box-header with-border">
				<h3 className="box-title">{title}</h3>
				</div>
				
				<form role="form" onSubmit={handleSubmit}>
					<div className="box-body">
						<div className="form-group">
							<label >Nome</label>
							<input 
								className="form-control" 
								placeholder="Descrição"
								name="nome"
								id="nome"
								onChange={handleInputChange}
								value={formData.nome} 
								required/>
						</div>

						<div className="form-group">
							<label >E-mail</label>
							<input 
								className="form-control" 
								placeholder="E-mail"
								name="email"
								id="email"
								type="email"
								onChange={handleInputChange}
								value={formData.email} 
								required/>
								
						</div>

						<div className="form-group ">
							<label >Senha</label>
							<div className="row">

							<input 
								type={type}
								className="form-control col-md-8" 
								placeholder="Senha"
								name="senha"
								id="senha"
								onChange={handleInputChange}
								value={formData.senha} 
								required/>
								
								<a href="#" 
									className="col-md-1 view-pass" 
									onClick={changeType}>
										<i className="fa  fa-eye " ></i>
								</a>
							</div>
						</div>
						<div className="form-group ">
							<label >Confirme a Senha</label>
							<div className="row">

							<input 
								type={type1}
								className="form-control col-md-8" 
								placeholder="Confirme a Senha"
								name="senha1"
								id="senha1"
								onChange={handleInputChange}
								value={formData.senha1} />
								<a href="#" 
									className="col-md-1 view-pass" 
									onClick={changeType1}>
										<i className="fa  fa-eye " ></i>
								</a>
							</div>
						</div>
					

						
						
					</div>
					

					<div className="box-footer">
						<button type="submit" className="btn btn-primary">Salvar</button>
					</div>
				</form>
			</div>
			
			
		</>
	)
}

export default CartaoCreditoCadastro
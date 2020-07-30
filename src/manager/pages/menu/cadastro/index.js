import React, { useState, useEffect } from 'react'

import api from '../../../../services/api'
import './styles.css'
import { useHistory } from 'react-router-dom'
import Dropzone from '../../../components/dropzone'

const CartaoCreditoCadastro = ({ match, location }) => {
	const [formData, setFormData] = useState({
		descricao: '',
		url: ''
    })
	const history = useHistory()
	const [title, setTitle] = useState('')
    const id = match.params.id || 0

	useEffect(()=>{
        setTitle('Cadastrar Menu')
        if( id != 0 ){
			setTitle('Alterar Menu')
            api.get(`/yunie/v1/menu/${id}`)
               .then( response =>{
					setFormData( response.data )
				
               })
        }
	},[])
	
	function handleInputChange(event){
        const { name, value } = event.target

        setFormData({...formData, [name]: value})
	}
	
	async function handleSubmit(event) {
		event.preventDefault()
		
		
        id == 0 ? await api.post('/yunie/v1/menu',formData) : 
                  await api.put(`/yunie/v1/menu/${id}`,formData)
        
		alert('Salvo com sucesso!')
		history.push('/menu')
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
							<label >Descrição</label>
							<input 
								className="form-control" 
								placeholder="Descrição"
								name="descricao"
								id="descricao"
								onChange={handleInputChange}
								value={formData.descricao} />
						</div>

						<div className="form-group">
							<label >URL</label>
							<input 
								className="form-control" 
								placeholder="URL"
								name="url"
								id="url"
								onChange={handleInputChange}
								value={formData.url} />
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
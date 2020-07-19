import React, { useState, useEffect } from 'react'
import api from '../../../services/api'


const Contato = () => {
	
	
	const [formData, setFormData] = useState({
        titulo: '',
        subtitulo: '',
		descricao: '',
        cidade: '',
        email: '',
        telefone: ''
	})
	
	useEffect(()=>{
		api.get('/yunie/v1/contato/1')
		   .then( response =>{
			   
			   setFormData( response.data )
			  
		   })
	},[])
	
	function handleInputChange(event){
        const { name, value } = event.target
        setFormData({...formData, [name]: value})
	}
	
	async function handleSubmit(event) {
		event.preventDefault()
		
		await api.put('/yunie/v1/contato/1',formData)
        
        alert('Salvo com sucesso!')
		
	}

	return (
		<>	

			<div className="box box-primary">
				<div className="box-header with-border">
					<h3 className="box-title">Tela Contato</h3>
				</div>
				
				<form role="form" onSubmit={handleSubmit}>
					<div className="box-body">
						<div className="form-group">
							<label >Título</label>
							<input 
								className="form-control" 
								placeholder="Informe o título"
								name="titulo"
								id="titulo"
								onChange={handleInputChange}
								value={formData.titulo} />
						</div>
						<div className="form-group">
							<label >Subtítulo</label>
							<input 
								className="form-control" 
								placeholder="Descreve o subtítulo" 
								name="subtitulo"
								id="subtitulo"
								onChange={handleInputChange}
								value={formData.subtitulo} />
						</div>
						
						<div className="form-group">
							<label >Descrição</label>
							<input 
								className="form-control" 
								placeholder="Descrição" 
								name="descricao"
								id="descricao"
								onChange={handleInputChange}
								value={formData.descricao}
							/>
						</div>
                        <div className="row">

                            <div className="form-group col-xs-6">
                                <label>Cidade</label>
                                <input 
                                    className="form-control" 
                                    placeholder="Cidade"
                                    name="cidade"
                                    id="cidade"
                                    onChange={handleInputChange} 
                                    value={formData.cidade}/>
                            </div>
                            <div className="form-group col-xs-6">
                                <label>E-mail</label>
                                <input 
                                    className="form-control" 
                                    placeholder="E-mail"
                                    name="email"
                                    id="email"
                                    type="email"
                                    onChange={handleInputChange} 
                                    value={formData.email}/>
                            </div>
                        </div>
                        <div className="form-group">
                                <label>Telefone</label>
                                <input 
                                    className="form-control" 
                                    placeholder="Telefone"
                                    name="telefone"
                                    id="telefone"
                                    onChange={handleInputChange} 
                                    value={formData.telefone}/>
                            </div>

						
						
					</div>
					

					<div className="box-footer">
						<button type="submit" className="btn btn-primary">Submit</button>
					</div>
				</form>
			</div>
			
			
		</>
	)
}

export default Contato
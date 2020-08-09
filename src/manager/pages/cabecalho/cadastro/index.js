import React, { useState, useEffect } from 'react'

import { api } from '../../../../services/api'
import './styles.css'
import { useHistory } from 'react-router-dom'


const CabecalhoCadastro = ({ match, location }) => {
	const [formData, setFormData] = useState({
        descricao: '',
		logo: '',
        url: '',        
        status: false
    })
    const [logo, setLogo] = useState('')
    const history = useHistory()
    const id = match.params.id || 0

	useEffect(()=>{
        
        if( id != 0 ){

            api.get(`/yunie/v1/header/${id}`)
               .then( response =>{
                   setFormData( response.data )
               })
        }
	},[])
	
	function handleInputChange(event){
        const { name, value } = event.target
        if( name == 'descricao' ) {
            const simbol = `fa-${value.toLowerCase()}`
            setLogo( simbol )
            formData.logo = simbol
        }
        if( name == 'status' ){
            formData.status = value == 'on' ? 1 : 0 
        }


        setFormData({...formData, [name]: value})
	}
	
	async function handleSubmit(event) {
		event.preventDefault()
		
        id == 0 ? await api.post('/yunie/v1/header',formData) : 
                  await api.put(`/yunie/v1/header/${id}`,formData)
        
		alert('Salvo com sucesso!')
		history.push('/cabecalho')
	}

	return (
		<>	
			<div className="box box-primary">
				<div className="box-header with-border">
					<h3 className="box-title">Você encontra nda Yunie</h3>
				</div>
				
				<form role="form" onSubmit={handleSubmit}>
					<div className="box-body">
						<div className="form-group">
							<label >Descrição</label>
							<input 
								className="form-control" 
								placeholder="Facebook, Instagram, Youtube-play"
								name="descricao"
								id="descricao"
								onChange={handleInputChange}
								value={formData.descricao} />
						</div>
						<div className="form-group">
							<label >Logo:</label>
                            <span className="redes"><i className={`fa ${logo}`}></i></span>
							<input 
								className="form-control" 
								placeholder="Informe a logo" 
								name="logo"
                                id="logo"
                                type="hidden"
								onChange={handleInputChange}
								value={logo}
							/>
						</div>
                        <div className="row">
                            <div className="form-group col-md-6 col-xs-12">
                                <label>URL</label>
                                <input 
                                    className="form-control" 
                                    placeholder="Informe a URL"
                                    name="url"
                                    id="url"
                                    onChange={handleInputChange} 
                                    value={formData.url}/>
                            </div>

                            <div className="form-group col-md-6 col-xs-12 status">
                                <strong>Ativo</strong> 
                                <input 
                                        type="checkbox"
                                        name="status"
                                        id="status"
                                        checked={formData.status}
                                        value="1"
                                        onChange={handleInputChange} 
                                        />
                                 
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

export default CabecalhoCadastro
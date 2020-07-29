import React, { useState, useEffect } from 'react'

import api from '../../../../services/api'
import Dropzone from '../../../components/dropzone'

import { useHistory } from 'react-router-dom'


const ItemServicos = ({ match, location }) => {
	const [ selectedFile1, setSelectedFile1 ] = useState()
	const [ img1, setImg1 ] = useState('')
	const [formData, setFormData] = useState({
        titulo: '',
		descricao: '',
    })
    const history = useHistory()
    const id = match.params.id || 0

	useEffect(()=>{
        
        if( id != 0 ){

            api.get(`/yunie/v1/servicos-item/${id}`)
               .then( response =>{
        
                   
                   setFormData( response.data )
                   if( response.data.imagem != null ){
                       let string = `${response.data.imagem}`
                       setImg1( string )
                   }
                   
               })
        }
	},[])
	
	function handleInputChange(event){
        const { name, value } = event.target
        setFormData({...formData, [name]: value})
	}
	
	async function handleSubmit(event) {
		event.preventDefault()
		const {titulo,  descricao, botao, status} = formData
		
        const data = new FormData()
        if( id != 0 ) data.append('id', id)
		data.append('titulo', titulo)
		data.append('descricao', descricao)
		if( selectedFile1 ){
            data.append('imagem', selectedFile1)
		}
		
        id == 0 ? await api.post('/yunie/v1/servicos-item',data) : 
                  await api.put(`/yunie/v1/servicos-item/${id}`,data)
        
		alert('Salvo com sucesso!')
		history.push('/servicos')
	}

	return (
		<>	
			<div className="box box-primary">
				<div className="box-header with-border">
					<h3 className="box-title">Serviços da Yunie</h3>
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
                       
						

						<div className="form-group">
							<label >Imagem </label>
							<Dropzone  onFileUploaded={setSelectedFile1} fileFromUrl={img1}/>
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

export default ItemServicos
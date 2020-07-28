import React, { useState, useEffect } from 'react'
import Dropzone from '../../components/dropzone'
import api from '../../../services/api'
import './styles.css'

const Logo = () => {
	const [ selectedFile, setSelectedFile ] = useState()
	const [ img, setImg ] = useState('')
	const [ paragraph, setParagraph] = useState()
	const [formData, setFormData] = useState({
        titulo: '',
		descricao: ''
	})
	
	useEffect(()=>{
		api.get('/yunie/v1/logo/1')
		   .then( response =>{
				let newText = response.data.descricao.replace(/<br\s*[\/]?>/gi, "\n");
				
				setParagraph( newText )
				setFormData( response.data )
				if( response.data.imagem != null ){
					let string = `${response.data.imagem}`
					setImg( string )
				}
		   })
	},[])
	
	function handleInputChange(event){
        const { name, value } = event.target
        setFormData({...formData, [name]: value})
	}
	
	async function handleSubmit(event) {
		event.preventDefault()
		const {titulo, descricao} = formData
		
		const data = new FormData()
		data.append('titulo', titulo)
		data.append('descricao', descricao.replace(/\r?\n/g, '<br />'))
		if( selectedFile ){
            data.append('imagem', selectedFile)
		}
		await api.put('/yunie/v1/logo/1',data)
		alert('Salvo com sucesso!')
		
	}

	return (
		<>	

			<div className="box box-primary">
				<div className="box-header with-border">
					<h3 className="box-title">Logo</h3>
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
							<label>Descrição</label>
							<textarea
								className="form-control descricao" 
								placeholder="Descrição"
								name="descricao"
								id="descricao"
								onChange={handleInputChange} 
								value={paragraph}
								rows="5">
									
									</textarea>
						</div>

						<div className="form-group">
							<label >Imagem </label>
							<Dropzone  onFileUploaded={setSelectedFile} fileFromUrl={img}/>
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

export default Logo
import React, { useState, useEffect } from 'react'
import Dropzone from '../../components/dropzone'
import { api } from '../../../services/api'
import './styles.css'

const SobreNos = () => {
	const [ selectedFile, setSelectedFile ] = useState()
	const [ img, setImg ] = useState('')
	const [ paragraph, setParagraph] = useState()
	const [formData, setFormData] = useState({
        titulo: '',
        subtitulo: '',
		descricao: '',
		detalhe: ''
	})
	
	useEffect(()=>{
		api.get('/yunie/v1/sobre-nos/1')
		   .then( response =>{
				let newText = response.data.detalhe.replace(/<br\s*[\/]?>/gi, "\n");
				
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
		const {titulo, subtitulo, descricao, detalhe} = formData
		
		const data = new FormData()
		data.append('titulo', titulo)
		data.append('subtitulo', subtitulo)
		data.append('descricao', descricao)
		data.append('detalhe', detalhe.replace(/\r?\n/g, '<br />'))
		if( selectedFile ){
            data.append('imagem', selectedFile)
		}
		await api.put('/yunie/v1/sobre-nos/1',data)
		alert('Salvo com sucesso!')
		
	}

	return (
		<>	

			<div className="box box-primary">
				<div className="box-header with-border">
					<h3 className="box-title">Sobre nós</h3>
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
						<div className="form-group">
							<label>Detalhe</label>
							<textarea
								className="form-control detalhe" 
								placeholder="Detalhe"
								name="detalhe"
								id="detalhe"
								onChange={handleInputChange} 
								value={paragraph}
								rows="5">
									
									</textarea>
						</div>

						<div className="form-group">
							<label >Imagem (640x414)</label>
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

export default SobreNos
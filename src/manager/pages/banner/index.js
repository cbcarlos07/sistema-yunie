import React, { useState, useEffect } from 'react'
import Dropzone from '../../components/dropzone'
import api from '../../../services/api'
import './styles.css'

const Banner = () => {
	const [ selectedFile1, setSelectedFile1 ] = useState()
	const [ selectedFile2, setSelectedFile2 ] = useState()
	const [ selectedFile3, setSelectedFile3 ] = useState()
	const [ img1, setImg1 ] = useState('')
	const [ img2, setImg2 ] = useState('')
	const [ img3, setImg3 ] = useState()
	const [formData, setFormData] = useState({
        titulo: '',
        subtitulo: '',
		descricao: '',
		slogan: ''
	})
	
	useEffect(()=>{
		api.get('/yunie/v1/banner/1')
		   .then( response =>{
			   
			   setFormData( response.data )
			   if( response.data.imagem1 != null ){
				   let string = `${response.data.imagem1}`
				   setImg1( string )
			   }
			   if( response.data.imagem2 != null ){
					let string = `${response.data.imagem2}`
					setImg2( string )
				}

				if( response.data.imagem3 != null ){
					let string = `${response.data.imagem3}`
					setImg3( string )
				}
		   })
	},[])
	
	function handleInputChange(event){
        const { name, value } = event.target
        setFormData({...formData, [name]: value})
	}
	
	async function handleSubmit(event) {
		event.preventDefault()
		const {titulo, subtitulo, descricao, slogan} = formData
		
		const data = new FormData()
		data.append('titulo', titulo)
		data.append('subtitulo', subtitulo)
		data.append('descricao', descricao)
		data.append('slogan', slogan)
		if( selectedFile1 ){
            data.append('imagem1', selectedFile1)
		}
		if( selectedFile2 ){
            data.append('imagem2', selectedFile2)
		}
		if( selectedFile3 ){
            data.append('imagem3', selectedFile3)
		}
		await api.put('/yunie/v1/banner/1',data)
		alert('Salvo com sucesso!')
		
	}

	return (
		<>	
		<div className="container">

				<div className="box box-primary">
					<div className="box-header with-border">
						<h3 className="box-title">Tela Inicial</h3>
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
								<label>Slogan</label>
								<input 
									className="form-control" 
									placeholder="Slogan"
									name="slogan"
									id="slogan"
									onChange={handleInputChange} 
									value={formData.slogan}/>
							</div>

							<div className="form-group">
								<label >Imagem 1 (1280x853)</label>
								<Dropzone  onFileUploaded={setSelectedFile1} fileFromUrl={img1}/>
							</div>

							<div className="form-group">
								<label >Imagem (1280x853)</label>
								<Dropzone  onFileUploaded={setSelectedFile2} fileFromUrl={img2}/>
							</div>

							<div className="form-group">
								<label >Imagem (1280x853)</label>
								<Dropzone  onFileUploaded={setSelectedFile3} fileFromUrl={img3}/>
							</div>
							
						</div>
						

						<div className="box-footer">
							<button type="submit" className="btn btn-primary">Submit</button>
						</div>
					</form>
				</div>
		</div>

			
			
		</>
	)
}

export default Banner
import React, { useState } from 'react'
import Dropzone from './dropzone'

const Banner = () => {
	const [ selectedFile1, setSelectedFile1 ] = useState()
	const [ selectedFile2, setSelectedFile2 ] = useState()
	const [ selectedFile3, setSelectedFile3 ] = useState()
	const [formData, setFormData] = useState({
        titulo: '',
        subtitulo: '',
		descricao: '',
		slogan: ''
    })
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
		data.append('descrico', descricao)
		data.append('slogan', slogan)
		if( selectedFile1 ){
            data.append('image1', selectedFile1)
		}
		if( selectedFile2 ){
            data.append('image2', selectedFile2)
		}
		if( selectedFile3 ){
            data.append('image3', selectedFile3)
		}
		console.log('form', data);
		
	}

	return (
		<>

			<div className="box box-primary">
				<div className="box-header with-border">
					<h3 className="box-title">Quick Example</h3>
				</div>
				
				<form role="form" onSubmit={handleSubmit}>
					<div className="box-body">
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Título</label>
							<input 
								className="form-control" 
								placeholder="Informe o título"
								name="titulo"
								id="titulo"
								onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="Subtítulo">Subtítulo</label>
							<input 
								className="form-control" 
								placeholder="Descreve o subtítulo" 
								name="subtitulo"
								id="subtitulo"
								onChange={handleInputChange}/>
						</div>
						<div className="form-group">
							<label htmlFor="descricao">Descrição</label>
							<input 
								className="form-control" 
								placeholder="Descrição" 
								name="descricao"
								id="descricao"
								onChange={handleInputChange}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="descricao">Slogan</label>
							<input 
								className="form-control" 
								placeholder="Slogan"
								name="slogan"
								id="slogan"
								onChange={handleInputChange} />
						</div>

						<div className="form-group">
							<label htmlFor="descricao">Imagem 1</label>
							<Dropzone  onFileUploaded={setSelectedFile1}/>
						</div>

						<div className="form-group">
							<label htmlFor="descricao">Imagem 2</label>
							<Dropzone  onFileUploaded={setSelectedFile2}/>
						</div>

						<div className="form-group">
							<label htmlFor="descricao">Imagem 3</label>
							<Dropzone  onFileUploaded={setSelectedFile3}/>
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

export default Banner
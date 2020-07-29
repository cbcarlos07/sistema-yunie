import React, { useState, useEffect } from 'react'

import api from '../../../../services/api'
import './styles.css'
import { useHistory } from 'react-router-dom'
import Dropzone from '../../../components/dropzone'

const CartaoCreditoCadastro = ({ match, location }) => {
	const [formData, setFormData] = useState({
        descricao: '',
    })
    const [ selectedFile, setSelectedFile ] = useState()
	const [ img, setImg ] = useState('')
	const history = useHistory()
	const [title, setTitle] = useState('')
    const id = match.params.id || 0

	useEffect(()=>{
        setTitle('Cadastrar Cartão de Crédito')
        if( id != 0 ){
			setTitle('Alterar Cartão de Crédito')
            api.get(`/yunie/v1/cartao-credito/${id}`)
               .then( response =>{
				setFormData( response.data )
				if( response.data.imagem != null ){
					let string = `${response.data.imagem}`
					setImg( string )
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
		const {descricao} = formData
		
        const data = new FormData()
        if( id != 0 ) data.append('id', id)
		data.append('descricao', descricao)
		if( selectedFile ){
            data.append('imagem', selectedFile)
		}
		
        id == 0 ? await api.post('/yunie/v1/cartao-credito',data) : 
                  await api.put(`/yunie/v1/cartao-credito/${id}`,data)
        
		alert('Salvo com sucesso!')
		history.push('/cartao-credito')
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
							<label >Imagem 55x33</label>
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

export default CartaoCreditoCadastro
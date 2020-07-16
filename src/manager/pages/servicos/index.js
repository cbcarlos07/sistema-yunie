import React, { useState, useEffect } from 'react'
import api from '../../../services/api'
import env from '../../../environments'
import { Link } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'

const Services =  () => {
    const [servicos, setServicos] = useState({
        titulo: '',
        subtitulo: '',
        descricao: '',
        item: []
    })
    const [test, setTest] = useState(0)

    useEffect(()=>{
        if( test < 1 ){
            console.log('test', test);
            setTest(1)
            api.get(`${env.endpoint}/servicos/1`)
            .then( response => {
                 setServicos( response.data )
            }) 
        }
    },[test])

    

    function handleInputChange(event){
        const { name, value } = event.target
        setServicos({...servicos, [name]: value})
	}

    async function handleSubmit(e){
        e.preventDefault()
        await api.put(`${env.endpoint}/servicos/1`, servicos)

        alert('Salvo com sucesso')
    }

    async function perguntaRemover(id){
        let alerta = window.confirm('Deseja realmente remover?')
        if( alerta == true){
            await api.delete(`${env.endpoint}/servicos-item/${id}`)
            alert('Removido com sucesso')
            setTest(0)
        }
    }

    return (
        <>
        
                <div className="box box-primary">
                    <div className="box-header with-border">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-xs-2">
                                    <label >Título</label>                                    
                                </div>
                                <div className="col-xs-1">
                                    <input 
                                        className="form-control" 
                                        placeholder="Título"
                                        name="titulo"
                                        value={servicos.titulo}
                                        onChange={handleInputChange}
                                        />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-2">
                                    <label >Sub Título</label>                                    
                                </div>
                                <div className="col-xs-1">
                                    <input 
                                           className="form-control" 
                                           placeholder="Sub Título"
                                           name="subtitulo"
                                           value={servicos.subtitulo}
                                           onChange={handleInputChange}
                                           />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-2">
                                    <label >Descrição</label>                                    
                                </div>
                                <div className="col-xs-1">
                                    <input 
                                      className="form-control" 
                                      placeholder="Descrição"
                                      value={servicos.descricao}
                                      onChange={handleInputChange}
                                      name="descricao"
                                      />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6">
                                    <button className="btn btn-primary" type="submit">Salvar</button>                                    
                                </div>
                                <div className="col-xs-6">
                                    <Link to="/servicos/cadastro" className="btn btn-success pull-right" type="button"><i className="fa fa-plus"></i></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="box-body"></div>
                        <table className="table table-stripped table-hover">
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Descrição</th>
                                    <th>Imagem</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                           {
                               servicos.item.map(item => (
                                   <tr key={item.id}>
                                       <td>{item.titulo}</td>
                                       <td>{item.descricao}</td>
                                        <td>{
                                              item.imagem != '' ?
                                               <img src={item.imagem} width={30} />
                                               : '' 
                                            }
                                        </td>
                                        <td>
                                            <Link to={`/servicos/editar/${item.id}`} className="btn btn-xs btn-success">Editar</Link>
                                            
                                        </td>
                                   </tr>    
                               ))
                           }
                            </tbody>
                        </table>
                    <div className="box-footer"></div>
                </div>    
        </>
    )
}

export default Services
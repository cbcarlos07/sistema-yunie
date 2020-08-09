import React, { useState, useEffect } from 'react'
import { api } from '../../../services/api'
import env from '../../../environments'
import { Link } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'

const Find =  () => {
    const [encontra, setEncontra] = useState({
        titulo: '',
        subtitulo: '',
        descricao: '',
        item: []
    })
    const [test, setTest] = useState(0)

    useEffect(()=>{
        if( test < 1 ){
            setTest(1)
            api.get(`${env.endpoint}/encontra/1`)
            .then( response => {
                 setEncontra( response.data )
            }) 
        }
    },[test])

    

    function handleInputChange(event){
        const { name, value } = event.target
        setEncontra({...encontra, [name]: value})
	}

    async function handleSubmit(e){
        e.preventDefault()
        await api.put(`${env.endpoint}/encontra/1`, encontra)

        alert('Salvo com sucesso')
    }

    async function perguntaRemover(id){
        let alerta = window.confirm('Deseja realmente remover?')
        if( alerta == true){
            await api.delete(`${env.endpoint}/encontra-item/${id}`)
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
                                        value={encontra.titulo}
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
                                           value={encontra.subtitulo}
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
                                      value={encontra.descricao}
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
                                    <Link to="/encontra/cadastro" className="btn btn-success pull-right" type="button"><i className="fa fa-plus"></i></Link>
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
                                    <th>Status </th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                           {
                               encontra.item.map(item => (
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
                                           {
                                               item.status == 1 ? <FiCheck /> : ''
                                           }     
                                        </td>
                                        <td>
                                            <Link to={`/encontra/editar/${item.id}`} className="btn btn-xs btn-success">Editar</Link>
                                            <Link to={`#`} className="btn btn-xs btn-danger" onClick={() => perguntaRemover(item.id)}>Excluir</Link>
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

export default Find
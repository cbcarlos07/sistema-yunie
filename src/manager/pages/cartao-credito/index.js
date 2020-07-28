import React, { useState, useEffect } from 'react'
import api from '../../../services/api'
import env from '../../../environments'
import { Link } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'

const CartaoCredito =  () => {
    const [items, setItems] = useState([])
    const [acao, setAcao] = useState(0)
    useEffect(()=>{
        if( acao < 1 ) {
            setAcao(1)
            api.get(`${env.endpoint}/cartao-credito`)
                .then( response => {
                    setItems( response.data )
                }) 
        }     
    },[acao])



    async function perguntaRemover(id){
        let alerta = window.confirm('Deseja realmente remover?')
        if( alerta == true){
            await api.delete(`${env.endpoint}/cartao-credito/${id}`)

            alert('Removido com sucesso')
            setAcao(0)
        }
    }

    return (
        <>
        
                <div className="box box-primary">
                    <div className="box-header with-border">
                        
                        <div className="row">
                            <div className="col-xs-6">
                                Redes Sociais
                            </div>
                            <div className="col-xs-6">
                                <Link to="/cartao-credito/cadastro" className="btn btn-success pull-right" type="button"><i className="fa fa-plus"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="box-body"></div>
                        <table className="table table-stripped table-hover">
                            <thead>
                                <tr>
                                    <th>Descricao</th>
                                    <th>Logo</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                           {
                               items.map(item => (
                                   <tr key={item.id}>
                                        <td>{item.descricao}</td>
                                        <td><i className={`fa ${item.logo}`}></i></td>
                                        <td>
                                            <Link to={`/cabecalho/editar/${item.id}`} className="btn btn-xs btn-success">Editar</Link>
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

export default CartaoCredito
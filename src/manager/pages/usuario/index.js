import React, { useState, useEffect } from 'react'
import api from '../../../services/api'
import env from '../../../environments'
import { Link } from 'react-router-dom'

const CartaoCredito =  () => {
    const [items, setItems] = useState([])
    const [acao, setAcao] = useState(0)
    useEffect(()=>{
        if( acao < 1 ) {
            setAcao(1)
            api.get(`${env.endpoint}/usuario`)
                .then( response => {
                    setItems( response.data )
                }) 
        }     
    },[acao])



    async function perguntaRemover(id){
        let alerta = window.confirm('Deseja realmente remover?')
        if( alerta == true){
            await api.delete(`${env.endpoint}/usuario/${id}`)

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
                                Usuários
                            </div>
                            <div className="col-xs-6">
                                <Link to="/usuario/cadastro" className="btn btn-success pull-right" type="button"><i className="fa fa-plus"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="box-body"></div>
                        <table className="table table-stripped table-hover">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                           {
                               items.map(item => (
                                   <tr key={item.id}>
                                        <td>{item.nome}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <Link to={`/usuario/editar/${item.id}`} className="btn btn-xs btn-success">Editar</Link>
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
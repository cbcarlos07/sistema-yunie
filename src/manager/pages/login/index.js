import React, { useState } from 'react'
import { api, setAuthToken } from '../../../services/api'

import './styles.css'
import  md5 from 'md5'
import { useHistory, Link } from 'react-router-dom'


const Login = () => {
    const [msg, setMsg] = useState()
    const [formData, setFormData] = useState(
        {email: '', senha: ''}
    )
    const history = useHistory();

    
    const [hasError, setHasError] = useState(false)
    

	function handleInputChange(event){
        const { name, value } = event.target
        
        setFormData({...formData, [name]: value})
	}

    function logar(e) {
        e.preventDefault()

        formData.senha = md5( formData.senha )
        
        
        api.post(`/auth`, formData)
           .then( response =>{
               
               let resp = response.data.result
               
               if( resp.status == false){
                   setHasError( true )
                   setMsg( resp.msg )
               }else{
                    setAuthToken( resp.token )
                    localStorage.setItem("id", resp.id)
                    localStorage.setItem("token", resp.token)
                    history.push("/banner")
               }
               
           })  
    }

    return (
        <>
            <div className="login-box">
                <div className="login-logo">
                        <Link to="/"><b>Yunie</b>APP</Link>
                </div>

  
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    {
                        hasError
                    ? <span className="error text-center">{ msg }</span>
                        : ''

                    }
    
                    <form onSubmit={logar}>
                        <div className="form-group has-feedback ">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Email"
                                name="email"
                                onChange={handleInputChange} />
                            
                        </div>
                        <div className="form-group has-feedback">
                            <input 
                                type="password" 
                                className="form-control" 
                                name="senha"
                                placeholder="Password"
                                onChange={handleInputChange} />
                            
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                <div className="checkbox icheck">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                                   
                                </div>
                            </div>
            
            
                        </div>
                    </form>

            

                </div>
  
            </div>
        </>
    )
}

export default Login
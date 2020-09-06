import React, { useEffect, useState } from 'react'
import Locate from '../../../components/Locate'
import { Base64 } from 'js-base64'
const Cliente = ({match}) => {
    const [local, setLocal] = useState()
    const condominio = match.params.condominio || ""

    useEffect(()=>{

        if( condominio != "" ){
            
            const condLocal = Base64.decode( condominio )
            
            
            setLocal( <h3>Você está em <strong>{condLocal}</strong></h3> )
        }else{
            setLocal("")
        }
    },[])

    return (
        <>
            <Locate locate="Login"/>
            <div className="login-contect py-5">
                <div className="container py-xl-5 py-3">
                    <div className="login-body">
                        <div className="login p-4 mx-auto">
                            <h5 className="text-center mb-4">Sou cliente</h5>
                            { local }
                            <form action="#" method="post">
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input type="text" className="form-control" name="name" placeholder="" required="" />
                                </div>
                                <div className="form-group">
                                    <label className="mb-2">Password</label>
                                    <input type="password" className="form-control" name="password" placeholder="" required="" />
                                </div>
                                <button type="submit" className="btn submit mb-4">Login</button>
                                <p className="forgot-w3ls text-center mb-3">
                                    <a href="#" className="text-da">Forgot your password?</a>
                                </p>
                                <p className="account-w3ls text-center text-da">
                                    Don't have an account?
                                    <a href="register.html">Create one now</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cliente
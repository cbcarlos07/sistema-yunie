
import React from 'react';  
import { Route } from 'react-router-dom';  
import '../assets/manager/css/bootstrap.css'
import '../assets/manager/css/AdminLTE.min.css'
import '../assets/manager/css/_all-skins.css'
import './login.css'


const ManagerLayout = ({ children }) => {
	
	return (                             
		<div className="hold-transition login-page">
			
					
						{children}
			
			
		</div>	  
  );
}
  
  
  const ManagerLayoutLoginRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={matchProps => (  
        <ManagerLayout>  
            <Component {...matchProps} />  
        </ManagerLayout>  
      )} />  
    )  
  };  
  



export default ManagerLayoutLoginRoute
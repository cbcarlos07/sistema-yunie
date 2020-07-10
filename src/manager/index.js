
import React from 'react';  
import { Route, withRouter } from 'react-router-dom';  

import '../assets/manager/css/bootstrap.css'
import '../assets/manager/css/AdminLTE.min.css'
import '../assets/manager/css/_all-skins.css'



import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

const ManagerLayout = ({ children }) => {

	const MenuWithRouter = withRouter( Menu )

	return (                         
    
		<div className="skin-blue fixed sidebar-mini">

			<div className="wrapper">

				<Header />

				<MenuWithRouter />

				<div className="content-wrapper">

					<div className="content">

						{children}

					</div>

				</div>

				<Footer />

			</div>

	

		</div>
		
		
		
	  
  );
}
  
  
  const ManagerLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={matchProps => (  
        <ManagerLayout>  
            <Component {...matchProps} />  
        </ManagerLayout>  
      )} />  
    )  
  };  
  



export default ManagerLayoutRoute

import React from 'react';  
import PropTypes from 'prop-types';
import { Route, withRouter, Redirect } from 'react-router-dom';  
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



function ManagerLayoutRoute({
	redirectTo, isPrivate, component: Component, ...rest
  }) {
	const authenticated = localStorage.getItem('token');
  
	if (!authenticated && isPrivate) return <Redirect to={redirectTo} />;
  
	return <Route {...rest} 
			render={props => 
						(
							<ManagerLayout>
								<Component {...props} />
							</ManagerLayout>
						)
					} />;
  }
  
  ManagerLayoutRoute.propTypes = {
	redirectTo: PropTypes.string,
	isPrivate: PropTypes.bool,
	component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
	  .isRequired,
  };
  
  ManagerLayoutRoute.defaultProps = {
	redirectTo: '/login-site',
	isPrivate: false,
  };
  /*
  const ManagerLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={matchProps => (  
        <ManagerLayout>  
            <Component {...matchProps} />  
        </ManagerLayout>  
      )} isPrivate />  
    )  
  };*/  
  



export default ManagerLayoutRoute
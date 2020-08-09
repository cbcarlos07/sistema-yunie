import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import {  withRouter } from 'react-router-dom';
import Menu from './components/Menu';
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

function RouteWrapper({
  redirectTo, isPrivate, component: Component, ...rest
}) {
  const authenticated = localStorage.getItem('token');

  if (!authenticated && isPrivate) return <Redirect to={redirectTo} />;

  return <Route {...rest} render=
	{props => 
		(
			<ManagerLayout>
				<Component {...props} />
			</ManagerLayout>
		)
	} />;
}

RouteWrapper.propTypes = {
  redirectTo: PropTypes.string,
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  redirectTo: '/login-site',
  isPrivate: false,
};

export default RouteWrapper;
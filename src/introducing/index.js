
import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
import Header from './components/Header';
import Footer from './components/Footer';


import Menu from './components/Menu'


import '../assets/introducing/css/bootstrap.css'
import '../assets/introducing/css/css_slider.css'
import '../assets/introducing/css/style.css'
import '../assets/introducing/css/font-awesome.min.css'

const IntroducingLayout = ({ children }) => (                         
    <>
		<Header />
		<Menu />
		
		{children}
		
		<Footer />
	</>
  );  
  
  const IntroducingLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={matchProps => (  
        <IntroducingLayout>  
            <Component {...matchProps} />  
        </IntroducingLayout>  
      )} />  
    )  
  };  
  



export default IntroducingLayoutRoute
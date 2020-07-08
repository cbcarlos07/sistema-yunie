import React from 'react';
import Header from './introducing/components/Header';
import Footer from './introducing/components/Footer';
import Menu from './introducing/components/Menu';
import Main from './introducing/pages/main';
import Routes from './routes';


import './assets/css/bootstrap.css'
import './assets/css/css_slider.css'
import './assets/css/style.css'
import './assets/css/font-awesome.min.css'



const App = () => (
    <div className="App">
      <Header />
      
      <Routes />
      <Footer />
      
    </div>
  );


export default App;

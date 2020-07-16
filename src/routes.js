import React from 'react'


import IntroLayoutRoute from './introducing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './introducing/pages/main';
import About from './introducing/pages/about';
import Register from './introducing/pages/register';
import Contact from './introducing/pages/contact';
import Login from './introducing/pages/login';
import ManagerLayoutRoute from './manager';
import Home from './manager/pages/banner';
import Find from './manager/pages/find';
import Services from './manager/pages/servicos';
import Cadastro from './manager/pages/find/cadastro'


const  Routes = () => (
    <BrowserRouter>
			<Switch>
				<IntroLayoutRoute exact path="/" component={Main} />
				<IntroLayoutRoute path="/about" component={About} />
				<IntroLayoutRoute path="/register" component={Register} />
				<IntroLayoutRoute path="/contact" component={Contact} />
				<IntroLayoutRoute path="/login" component={Login} />
                <ManagerLayoutRoute path="/banner" component={Home}/>
				<ManagerLayoutRoute exact path="/encontra" component={Find}/>
				<ManagerLayoutRoute  path="/encontra/cadastro" component={Cadastro}/>
				<ManagerLayoutRoute exact path="/encontra/editar/:id" component={Cadastro}/>
				<ManagerLayoutRoute path="/servicos" component={Services}/>
				
			</Switch>
            
		</BrowserRouter>
)

export default Routes
import React from 'react'

import './styles.css'
import IntroLayoutRoute from './introducing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './introducing/pages/main';
import About from './introducing/pages/about';
import Register from './introducing/pages/register';
import Contact from './introducing/pages/contact';
import Login from './introducing/pages/login';
import Cliente from './introducing/pages/login/cliente';
import Estabelecimento from './introducing/pages/login/estabelecimento';

import ManagerLayoutRoute from './manager';
import Home from './manager/pages/banner';
import Find from './manager/pages/find';
import Services from './manager/pages/servicos';
import FindCadastro from './manager/pages/find/cadastro'
import ServicesCadastro from './manager/pages/servicos/cadastro'
import Contato from './manager/pages/contato';
import SobreNos from './manager/pages/sobre-nos';
import Cabecalho from './manager/pages/cabecalho';
import CabecalhoCadastro from './manager/pages/cabecalho/cadastro';
import Logo from './manager/pages/logo';
import CartaoCredito from './manager/pages/cartao-credito';
import CartaoCreditoCadastro from './manager/pages/cartao-credito/cadastro';
import Menu from './manager/pages/menu/'
import MenuCadastro from './manager/pages/menu/cadastro'
import Usuario from './manager/pages/usuario'
import UsuarioCadastro from './manager/pages/usuario/cadastro'

const  Routes = () => (
    <BrowserRouter>
			<Switch>
				<IntroLayoutRoute exact path="/" component={Main} />
				<IntroLayoutRoute path="/about" component={About} />
				<IntroLayoutRoute path="/register" component={Register} />
				<IntroLayoutRoute path="/contact" component={Contact} />
				<IntroLayoutRoute path="/login" component={Login} />
				<IntroLayoutRoute path="/cliente" component={Cliente}/>
				<IntroLayoutRoute path="/estabelecimento" component={Estabelecimento}/>

                <ManagerLayoutRoute path="/banner" component={Home}/>
				<ManagerLayoutRoute exact path="/encontra" component={Find}/>
				<ManagerLayoutRoute path="/encontra/cadastro" component={FindCadastro}/>
				<ManagerLayoutRoute exact path="/encontra/editar/:id" component={FindCadastro}/>
				<ManagerLayoutRoute exact path="/servicos" component={Services}/>
				<ManagerLayoutRoute path="/servicos/cadastro" component={ServicesCadastro}/>
				<ManagerLayoutRoute exact path="/servicos/editar/:id" component={ServicesCadastro}/>
				<ManagerLayoutRoute path="/contato" component={Contato}/>
				<ManagerLayoutRoute path="/sobre" component={SobreNos}/>
				<ManagerLayoutRoute exact path="/cabecalho" component={Cabecalho}/>
				<ManagerLayoutRoute exact path="/cabecalho/cadastro" component={CabecalhoCadastro}/>
				<ManagerLayoutRoute exact path="/cabecalho/editar/:id" component={CabecalhoCadastro}/>
				<ManagerLayoutRoute exact path="/logo" component={Logo}/>
				<ManagerLayoutRoute exact path="/cartao-credito" component={CartaoCredito}/>
				<ManagerLayoutRoute exact path="/cartao-credito/cadastro" component={CartaoCreditoCadastro}/>
				<ManagerLayoutRoute exact path="/cartao-credito/editar/:id" component={CartaoCreditoCadastro}/>
				<ManagerLayoutRoute exact path="/menu" component={Menu}/>
				<ManagerLayoutRoute exact path="/menu/cadastro" component={MenuCadastro}/>
				<ManagerLayoutRoute exact path="/menu/editar/:id" component={MenuCadastro}/>
				<ManagerLayoutRoute exact path="/usuario" component={Usuario}/>
				<ManagerLayoutRoute exact path="/usuario/cadastro" component={UsuarioCadastro}/>
				<ManagerLayoutRoute exact path="/usuario/editar/:id" component={UsuarioCadastro}/>
				
				
			</Switch>
            
		</BrowserRouter>
)

export default Routes
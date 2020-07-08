import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './introducing/pages/main'
import About from './introducing/pages/about'
import Menu from './introducing/components/Menu'
import Register from './introducing/pages/register'
const  Routes = () => (
    <BrowserRouter>
        <Menu />
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
)

export default Routes
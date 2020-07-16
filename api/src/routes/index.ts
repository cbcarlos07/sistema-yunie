
import * as route from 'restify-router'
const Route =  route.Router
const router = new Route()


import initRoutes from './init.route'
import bannerRoute from './banner.route'
import {encontraRoute, encontraRealtime} from './encontra.route'
import env from '../environments/environments'
import itemEncontraRoute from './encontra-item.route'

const routes = deps =>{
    const {server, io} = deps

    router.add('/', initRoutes)
    encontraRealtime( io )
    router.add(`${env.prefix}/encontra/`, encontraRoute)
    
    bannerRoute( {server, io} )
    itemEncontraRoute({server, io})
    router.applyRoutes( server )
}

export default routes
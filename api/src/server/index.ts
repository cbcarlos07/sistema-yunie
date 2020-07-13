import * as restify from 'restify'
import env from '../environments/environments'
import routes from '../routes'
const BannerModel = require( '../db/models/banner.model')
import GenericService from '../service/banner.service'

class Server {
    server: any
    port: any
    connection: any
    constructor(){
        this.port = env.SERVER_PORT
        this.server = restify.createServer()
        this.connection = new GenericService( BannerModel )
    }

    listen(){
        require('../db/database')

        this.server.use(restify.plugins.bodyParser())
        this.connection
            .testConnection()
            .then( () =>{
                
                this.server.listen( this.port, () =>{
                    this.configRoutes()
                    console.log('Servidor Yunie ouvindo na porta ', this.port);
                })
                
            })
            .catch( err => console.log('err',err)) 
    }

    configRoutes(){
        routes( {server: this.server })
    }
}

export default new Server()
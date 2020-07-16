import * as restify from 'restify'
import env from '../environments/environments'
import routes from '../routes'
const BannerModel = require( '../db/models/banner.model')
import GenericService from '../service/generic.service'
import * as bodyParser from 'body-parser'
import cors from '../utils/cors'
import realtime from '../utils/realtime'
import * as socketio from 'socket.io'
class Server {
    server: any
    port: any
    connection: any
    io: SocketIO.Server
    constructor(){
        this.port = env.SERVER_PORT
        this.server = restify.createServer()
        this.connection = new GenericService( BannerModel )
        this.io = socketio.listen( this.server.server )
    }

    configCors(){
        this.server.pre( cors.preflight )
        this.server.use( cors.actual )
        this.server.use( bodyParser.json() )
        this.server.use( bodyParser.urlencoded({extended: true}) )
    }

    realtime(){
        realtime( this.io )
    }

    listen(){
        require('../db/database')

        //this.server.use(restify.plugins.bodyParser())
        this.configCors()
        this.connection
            .testConnection()
            .then( () =>{
                
                this.server.listen( this.port, () =>{
                    
                    this.realtime()
                    this.configRoutes()
                    console.log('Servidor Yunie ouvindo na porta ', this.port);
                })
                
            })
            .catch( err => console.log('err',err)) 
    }

    configRoutes(){
        routes( {server: this.server, io: this.io })
    }
}

export default new Server()
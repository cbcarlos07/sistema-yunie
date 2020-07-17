import env from "../environments/environments"
import servicosController from "../controller/servicos.controller"
import uploads from "../utils/upload"
import * as fs from 'fs'
import servicosItemController from "../controller/servicos-item.controller"
const prefix = `${env.prefix}/servicos`

const servicosRoute = deps => {
    const {server, io} = deps
    server.post( prefix, uploads.single('imagem'), async (req, res, next) =>{
        
        let body = req.body        
        if( req.file != undefined )
            body.imagem = req.file.filename

        try {
            let insert = await servicosController.create( body )
          //  console.log('insert', insert);
            
            res.send( {status: true} )
        } catch (error) {
            res.send( error )
        }
        next()
    })

    server.put( `${prefix}/:id`,uploads.single('imagem'), async (req, res, next) =>{
        const {id} = req.params
        
        const {titulo, subtitulo, descricao} = req.body       
        const body: any  = {
            titulo,
            subtitulo,
            descricao
        }                                
        
        

        let alterar  = await servicosController.findByPk( id )
    
    

        if( req.file != undefined ){
            body.imagem = req.file.filename
            if( alterar.dataValues.imagem != null )  fs.unlinkSync( `./public/${alterar.dataValues.imagem}` ) 
        }    
          


        try {
            let update = await servicosController.update( id, body )
            console.log('update', update);
            
            io.emit('change',{status: true})
            res.send( {status: true} )
        } catch (error) {
            console.log('error alterar', error);
            
            res.send( error )
        }
        next()
    })

    server.del( `${prefix}/:id`, async (req, res, next) =>{
        const {id} = req.params
        
        try {
            res.send( await servicosController.delete( id ) )
        } catch (error) {
            res.send( error )
        }
        next()
    })

    server.get( prefix, async (req, res, next) =>{
        
        try {
            res.send( await servicosController.findAll(  ) )
        } catch (error) {
            res.send( error )
        }
        next()
    })

    server.get( `${prefix}/:id`, async (req, res, next) =>{
        const {id} = req.params
        try {
            let dados = await servicosController.findByPk( id )
            let items = await servicosItemController.findAll()
            let item = items.map( e => {
                e.imagem = `http://${env.IPLOCAL}:${env.SERVER_PORT}/foto/${e.imagem}`
                return e
            })
            let obj = {...dados.dataValues, item}
            res.send( obj )
        } catch (error) {
            res.send( error )
        }
        next()
    })
}

export default servicosRoute
import env from "../environments/environments"
import itemServicosController from "../controller/servicos-item.controller"
import uploads from "../utils/upload"
import * as fs from 'fs'
const prefix = `${env.prefix}/servicos-item`



const itemServicosRoute = deps => {
    const {server, io} = deps
    server.post( prefix, uploads.single('imagem'), async (req, res, next) =>{
        
        const {titulo, descricao, botao, status} = req.body
        const body: any ={
            titulo,
            descricao,
            botao,
            status
        }
        let image = ''
        if( req.file ){
            image = req.file.filename
            body.imagem = image
        }  
        body.status = Number( status )  

        
        
        
        try {
            let insert = await itemServicosController.create( body )          
            console.log('insert',insert);
            
            res.send( {status: true} )
        } catch (error) {
            fs.unlinkSync( `./public/${image}` ) 
            console.log('error', error);
            
            res.send( error )
        }
        next()
    })

    server.put( `${prefix}/:id`,uploads.single('imagem'), async (req, res, next) =>{
        const {id} = req.params
        
        const {titulo, descricao, botao, status} = req.body       
        const body: any  = {
            titulo,
            descricao,
            botao,
            status
        }                                
        
        

        let alterar  = await itemServicosController.findByPk( id )
    


        if( req.file ){
            body.imagem = req.file.filename
            if( alterar.dataValues.imagem != null )  fs.unlinkSync( `./public/${alterar.dataValues.imagem1}` ) 
        }    
        

        try {
            await itemServicosController.update( id, body )
            io.emit('change',{status: true})
            res.send( {status: true} )
        } catch (error) {
            res.send( error )
        }
        next()
    })

    server.del( `${prefix}/:id`, async (req, res, next) =>{
        console.log('remover');
        
        const {id} = req.params
        let alterar  = await itemServicosController.findByPk( id )
        try {
            let remove = await itemServicosController.delete( id )
            console.log('alterar', alterar.dataValues);
            
            if( alterar.dataValues.imagem != undefined )  fs.unlinkSync( `./public/${alterar.dataValues.imagem}` ) 
            
            res.send({status: true}  )
        } catch (error) {
            console.log('error', error);
            
            res.send( error )
        }
        next()
    })

    server.get( prefix, async (req, res, next) =>{
        
        try {
            res.send( await itemServicosController.findAll(  ) )
        } catch (error) {
            res.send( error )
        }
        next()
    })

    server.get( `${prefix}/:id`, async (req, res, next) =>{
        const {id} = req.params
        
        try {
            
            res.send( await itemServicosController.findByPk( id ) )
        } catch (error) {
            res.send( error )
        }
        next()
    })
}

export default itemServicosRoute
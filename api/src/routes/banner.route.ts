import env from "../environments/environments"
import bannerController from "../controller/banner.controller"
import uploads from "../utils/upload"
import * as fs from 'fs'
const prefix = `${env.prefix}/banner`

const bannerRoute = deps => {
    const {server, io} = deps
    server.post( prefix, uploads.fields([
                                    {name: 'imagem1'},
                                    {name: 'imagem2'},
                                    {name: 'imagem3'}
                                ]), async (req, res, next) =>{
        
        let body = req.body        
        if( req.files.imagem1 != undefined )
            body.imagem1 = req.files.imagem1[0].filename
        
        if( req.files.imagem2 != undefined )
            body.imagem2 = req.files.imagem2[0].filename
        
        if( req.files.imagem3 != undefined )
            body.imagem3 = req.files.imagem3[0].filename

        
        
        try {
            let insert = await bannerController.create( body )
          //  console.log('insert', insert);
            
            res.send( {status: true} )
        } catch (error) {
            res.send( error )
        }
        next()
    })

    server.put( `${prefix}/:id`,uploads.fields([
                                        {name: 'imagem1'},
                                        {name: 'imagem2'},
                                        {name: 'imagem3'}
                                    ]), async (req, res, next) =>{
        const {id} = req.params
        
        const {titulo, subtitulo, descricao, slogan} = req.body       
        const body: any  = {
            titulo,
            subtitulo,
            descricao,
            slogan
        }                                
        
        

        let alterar  = await bannerController.findByPk( id )
    


        if( req.files.imagem1 != undefined ){
            body.imagem1 = req.files.imagem1[0].filename
            if( alterar.dataValues.imagem1 != null )  fs.unlinkSync( `./public/${alterar.dataValues.imagem1}` ) 
        }    
        
        if( req.files.imagem2 != undefined ){
            body.imagem2 = req.files.imagem2[0].filename
            if( alterar.dataValues.imagem2 != null )  fs.unlinkSync( `./public/${alterar.dataValues.imagem2}` ) 
        }    
        
        if( req.files.imagem3 != undefined ){
            body.imagem3 = req.files.imagem3[0].filename
            if( alterar.dataValues.imagem3 != null )  fs.unlinkSync( `./public/${alterar.dataValues.imagem3}` ) 
        }    


        try {
            await bannerController.update( id, body )
            io.emit('change',{status: true})
            res.send( {status: true} )
        } catch (error) {
            res.send( error )
        }
        next()
    })

    server.del( `${prefix}/:id`, async (req, res, next) =>{
        const {id} = req.params
        
        try {
            res.send( await bannerController.delete( id ) )
        } catch (error) {
            res.send( error )
        }
        next()
    })

    server.get( prefix, async (req, res, next) =>{
        
        try {
            res.send( await bannerController.findAll(  ) )
        } catch (error) {
            res.send( error )
        }
        next()
    })

    server.get( `${prefix}/:id`, async (req, res, next) =>{
        const {id} = req.params
        try {
            
            res.send( await bannerController.findByPk( id ) )
        } catch (error) {
            res.send( error )
        }
        next()
    })
}

export default bannerRoute
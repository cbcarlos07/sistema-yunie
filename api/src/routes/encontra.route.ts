import * as restifyRouter from 'restify-router'
import encontraController from '../controller/encontra.controller'
import encontraItemController from '../controller/encontra-item.controller'
import env from '../environments/environments'
const Router = restifyRouter.Router
const encontraRoute = new Router()

var io: any
const encontraRealtime = socket => {
    io = socket
}

encontraRoute.post('', async (req, res, next)=>{
    
    try {
        let insert = await encontraController.create( req.body )
        res.json({status: true})
    } catch (error) {
        res.json( error )
    }
    next()
})

encontraRoute.put(':id', async (req, res, next)=>{
    const {id} = req.params
    delete req.body.item
    console.log('body', req.body);
    
    try {
        let update = await encontraController.update( id, req.body )
        
        
        io.emit('change',{status: true} )
        res.json({status: true})
    } catch (error) {
        console.log(error)
        res.json( error )
    }
    next()
})

encontraRoute.get('', async (req, res, next)=>{
    
    try {
        
        res.json( await encontraController.findAll( ) )
    } catch (error) {
        res.json( error )
    }
    next()
})

encontraRoute.get(':id', async (req, res, next)=>{
    const {id} = req.params
    try {      
        let encontra = await encontraController.findByPk( id )
        let items = await encontraItemController.findAll()
        let item = items.map( e => {
            e.imagem = e.imagem != null ?  `http://${env.IPLOCAL}:${env.SERVER_PORT}/foto/${e.imagem}` : ''
            return e
        } )
        let obj = {...encontra.dataValues, item}
        res.json( obj )
        
    } catch (error) {
        res.json( error )
    }
    next()
})


encontraRoute.del(':id', async (req, res, next)=>{
    const {id} = req.params
    try {      
        res.json( await encontraController.delete( id ) )
    } catch (error) {
        res.json( error )
    }
    next()
})

export { encontraRoute , encontraRealtime}
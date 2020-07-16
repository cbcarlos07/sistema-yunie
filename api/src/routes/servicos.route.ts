import * as restifyRouter from 'restify-router'
import servicosController from '../controller/servicos.controller'
import servicosItemController from '../controller/servicos-item.controller'
import env from '../environments/environments'
const Router = restifyRouter.Router
const servicosRoute = new Router()

var io: any
const servicosRealtime = socket => {
    io = socket
}

servicosRoute.post('', async (req, res, next)=>{
    
    try {
        let insert = await servicosController.create( req.body )
        res.json({status: true})
    } catch (error) {
        res.json( error )
    }
    next()
})

servicosRoute.put('/:id', async (req, res, next)=>{
    const {id} = req.params
    delete req.body.item
    console.log('body', req.body);
    
    try {
        let update = await servicosController.update( id, req.body )
        
        
        io.emit('change',{status: true} )
        res.json({status: true})
    } catch (error) {
        console.log(error)
        res.json( error )
    }
    next()
})

servicosRoute.get('/', async (req, res, next)=>{
    
    try {
        
        res.json( await servicosController.findAll( ) )
    } catch (error) {
        res.json( error )
    }
    next()
})

servicosRoute.get('/:id', async (req, res, next)=>{
    const {id} = req.params
    try {      
        let servicos = await servicosController.findByPk( id )
        let items = await servicosItemController.findAll()
        let item = items.map( e => {
            e.imagem = e.imagem != null ?  `http://${env.IPLOCAL}:${env.SERVER_PORT}/foto/${e.imagem}` : ''
            return e
        } )
        let obj = {...servicos.dataValues, item}
        res.json( obj )
        
    } catch (error) {
        res.json( error )
    }
    next()
})


servicosRoute.del('/:id', async (req, res, next)=>{
    const {id} = req.params
    try {      
        res.json( await servicosController.delete( id ) )
    } catch (error) {
        res.json( error )
    }
    next()
})

export { servicosRoute , servicosRealtime}
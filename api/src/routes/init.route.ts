import * as restifyRouter from 'restify-router'
import * as restify from 'restify'
import bannerController from '../controller/banner.controller'
import env from '../environments/environments'
import encontraController from '../controller/encontra.controller'
import encontraItemController from '../controller/encontra-item.controller'
const Router = restifyRouter.Router
const routerInstance = new Router()

routerInstance.get('', (req, res, next)=>{
    res.json({msg: 'API Yunie App'})
    next()
})

routerInstance.get( `foto/*`, restify.plugins.serveStatic({
    directory: './public',
    appendRequestPath: false
}))

routerInstance.get('home', async (req, res, next)=>{

    const banner = await bannerController.findByPk(1)

    banner.imagem1 = `http://${env.IPLOCAL}:${env.SERVER_PORT}/foto/${banner.imagem1}`
    banner.imagem2 = `http://${env.IPLOCAL}:${env.SERVER_PORT}/foto/${banner.imagem2}`
    banner.imagem3 = `http://${env.IPLOCAL}:${env.SERVER_PORT}/foto/${banner.imagem3}`

    const find: any = await encontraController.findByPk(1)
    const encontraItems = await encontraItemController.findAll()
    const items = encontraItems.map( e =>{
        e.imagem = `http://${env.IPLOCAL}:${env.SERVER_PORT}/foto/${e.imagem}`
        return e
    })

    const encontra = {...find.dataValues, items}
    
    const retorno = {
        banner,
        encontra
    }
    
    try {
        res.send( retorno )
        
    } catch (error) {
        res.send(error)
    }
    next()

})

export default routerInstance
import * as restifyRouter from 'restify-router'

const Router = restifyRouter.Router
const routerInstance = new Router()

routerInstance.get('/', (req, res, next)=>{
    res.json({msg: 'API Yunie App'})
    next()
})

export default routerInstance
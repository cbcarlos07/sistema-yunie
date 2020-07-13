import env from "../environments/environments"
import bannerController from "../controller/banner.controller"

const prefix = `${env.prefix}/banner`

const bannerRoute = server => {
    
    server.post( prefix, async (req, res, next) =>{
        console.log(req.body);
        
        try {
            let insert = await bannerController.create( req.body )
            console.log('insert', insert);
            
            res.send( req.body )
        } catch (error) {
            res.send( error )
        }
        next()
    })
}

export default bannerRoute
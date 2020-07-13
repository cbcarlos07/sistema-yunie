
import initRoutes from './init.route'
import bannerRoute from './banner.route'

const routes = deps =>{
    const {server} = deps

    initRoutes.applyRoutes( server )
    bannerRoute( server )

}

export default routes
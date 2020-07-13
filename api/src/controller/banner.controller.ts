const BannerModel = require ('../db/models/banner.model')
import GenericService from '../service/banner.service'
class BannerController {
    
    _model = BannerModel
    _genericService: any = new GenericService( this._model )
    
    constructor(){}
    create(dados: any){
        this._genericService.create( dados )
    }

}

export default new BannerController()
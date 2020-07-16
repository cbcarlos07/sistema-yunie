const EncontraModel = require ('../db/models/encontra.model')
import GenericService from '../service/generic.service'
class EncontraController {
    
    _model = EncontraModel
    _genericService: any = new GenericService( this._model )
    
    constructor(){}
    create(dados: any){
        return this._genericService.create( dados )
    }

    findByPk(id: number){
        return this._genericService.findByPk( id )
    }

    findAll(){
        return this._genericService.findAll( )
    }

    update( id: any,  obj: any ){
       
        return this._genericService.update( id, obj )
    }

    delete( id: any ){
        return this._genericService.destroy( id )
    }

}

export default new EncontraController()
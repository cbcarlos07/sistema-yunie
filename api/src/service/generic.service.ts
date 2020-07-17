
class GenericService{
    model: any
    constructor( _model: any ){
        this.model = _model
    }

    create( dados: any ){
        return this.model.create( dados )
    }

    findByPk(id: number){
        return this.model.findByPk( id )
    }

    findAll(){
        return this.model.findAll()
    }

    update( id: any,  obj: any ){
        
        return this.model.update( obj, {where: {id}} )
    }

    delete( id: any ){
        return this.model.destroy({where : {id}})
    }



    testConnection(){
        return this.model.sequelize.query('SELECT 1')
    }

}

export default GenericService
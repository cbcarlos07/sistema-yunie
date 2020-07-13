
class GenericService{
    model: any
    constructor( _model: any ){
        this.model = _model
    }

    create( dados: any ){
        return this.model.create( dados )
    }


    testConnection(){
        return this.model.sequelize.query('SELECT 1')
    }

}

export default GenericService
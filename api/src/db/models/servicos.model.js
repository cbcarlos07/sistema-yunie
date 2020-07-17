const  { DataTypes, Model } = require ( 'sequelize' )
//import  { Model } from 'sequelize-typescript'


class ServicosModel extends Model {
    static init(sequelize){
        super.init({
            titulo:    DataTypes.STRING,
            subtitulo: DataTypes.STRING,
            descricao: DataTypes.STRING,
            imagem:    DataTypes.STRING
        },{
            tableName: 'site_servicos',
            sequelize
        })
    }
}

module.exports = ServicosModel

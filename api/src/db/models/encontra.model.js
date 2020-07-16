const  { DataTypes, Model } = require ( 'sequelize' )
//import  { Model } from 'sequelize-typescript'


class EncontraModel extends Model {
    static init(sequelize){
        super.init({
            titulo:    DataTypes.STRING,
            subtitulo: DataTypes.STRING,
            descricao: DataTypes.STRING
        },{
            tableName: 'site_encontra',
            sequelize
        })
    }
}

module.exports = EncontraModel

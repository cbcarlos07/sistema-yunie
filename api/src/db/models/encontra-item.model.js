const  { DataTypes, Model } = require ( 'sequelize' )
//import  { Model } from 'sequelize-typescript'


class EncontraItemModel extends Model {
    static init(sequelize){
        super.init({
            titulo:    DataTypes.STRING,
            descricao: DataTypes.STRING,
            botao:     DataTypes.STRING,
            status:    DataTypes.BOOLEAN,
            imagem:    DataTypes.STRING,
        },{
            tableName: 'site_encontra_item',
            sequelize
        })
    }
}

module.exports = EncontraItemModel

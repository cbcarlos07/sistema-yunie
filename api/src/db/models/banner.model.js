const  { DataTypes, Model } = require ( 'sequelize' )
//import  { Model } from 'sequelize-typescript'


class BannerModel extends Model {
    static init(sequelize){
        super.init({
            titulo:    DataTypes.STRING,
            subtitulo: DataTypes.STRING,
            descricao: DataTypes.STRING,
            slogan:    DataTypes.STRING,
            imagem1:   DataTypes.STRING,
            imagem2:   DataTypes.STRING,
            imagem3:   DataTypes.STRING
        },{
            tableName: 'site_banner',
            sequelize
        })
    }
}

module.exports = BannerModel

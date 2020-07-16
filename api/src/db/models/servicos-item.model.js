const  { DataTypes, Model } = require ( 'sequelize' )


class ServicosItemModel extends Model {
    static init(sequelize){
        super.init({
            titulo:    DataTypes.STRING,
            descricao: DataTypes.STRING,
            imagem:    DataTypes.STRING,
        },{
            tableName: 'site_servicos_item',
            sequelize
        })
    }
}

module.exports = ServicosItemModel

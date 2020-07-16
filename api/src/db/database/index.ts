

const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const BannerModel = require ('../models/banner.model')
const EncontraModel = require('../models/encontra.model')
const EncontraItemModel = require('../models/encontra-item.model')
const ServicosModel = require('../models/servicos.model')
const ServicosItemModel = require('../models/servicos-item.model')
const connection = new Sequelize( dbConfig )

BannerModel.init( connection )
EncontraModel.init( connection )
EncontraItemModel.init( connection )
ServicosModel.init( connection )
ServicosItemModel.init( connection )
export default connection
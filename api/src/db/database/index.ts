

const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const BannerModel = require ('../models/banner.model')

const connection = new Sequelize( dbConfig )

BannerModel.init( connection )

export default connection
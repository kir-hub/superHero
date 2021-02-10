const sequelize = require('../db/index')
const {DataTypes} = require('sequelize')

const Superhero = sequelize.define('superhero', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    nickname: {type: DataTypes.STRING, allowNull: false, unique: true},
    real_name: {type: DataTypes.STRING, allowNull: false},
    origin_description: {type: DataTypes.STRING, allowNull: false},
    superpowers: {type: DataTypes.STRING, allowNull: false},
    catch_phrase: {type: DataTypes.STRING, allowNull: false},
    images: {type: DataTypes.STRING, allowNull: false},
})

module.exports = Superhero
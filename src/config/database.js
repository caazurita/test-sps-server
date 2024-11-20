const { Sequelize } = require("sequelize");
const setupModels = require("../db/models");


const URI = 'sqlite:memory:';
const sequelize = new Sequelize(URI, {
    dialect: "sqlite",
    logging: false,
    storage: "./database.sqlite",
    dialectOptions: {
        useNullAsDefault: true
    }
})
sequelize.sync()
setupModels(sequelize)

module.exports = sequelize
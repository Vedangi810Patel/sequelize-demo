const Sequelize = require('sequelize');

const dbName = "employee_db";
const dbUser = "root";
const dbPass = "";

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: "localhost",
    port: 3306,
    dialect: "mysql"
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//model-table 
db.employees = require("./employee_model")(sequelize, Sequelize);

module.exports = db;


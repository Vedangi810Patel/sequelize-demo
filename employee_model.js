module.exports = (sequelize, Sequelize) => {
    const employees = sequelize.define('employee', {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        gender: {
            type: Sequelize.STRING
        },
        experiance: {
            type: Sequelize.INTEGER
        }
    });
    return employees;
}
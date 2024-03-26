const db = require('./db_config');
const Employee = db.employees;

function findAllEmployees(req, res) {
    Employee.findAll().then((data) => {
        req.send(data);
        // console.log(json(data));
    }).catch(err => {
        res.send(err);
    });
}

function createEmplolyee(req, res) {

}

module.exports = {
    findAllEmployees,
    createEmplolyee
};
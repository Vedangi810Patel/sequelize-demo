const db = require('./db_config');
const Employee = db.employees;

function createEmployee(req, res) {
    // try {
    //     if (!req.body.name || !req.body.email || !req.body.gender || !req.body.experience) {
    //         return res.status(400).send("Bad Request");
    //     }

    //     const empployeeObject = {
    //         name : req.body.name,
    //         email: req.body.email,
    //         gender: req.body.gender,
    //         experiance: req.body.experiance
    //     }
    //     // Logic to create employee
    // } catch (err) {
    //     res.status(500).send(err.message);
    // }

    // Employee.create(Employee).then((data) => {
    //     res.send(data);
    // }).catch( (err) => {
    //     throw new Error (err.message);
    // });
}

async function findAllEmployees() {
    try {
        const data = await Employee.findAll();
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = {
    createEmployee,
    findAllEmployees
};

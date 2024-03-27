// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const controller = require('./employee_controller');

// app.use(bodyParser.json());

// const db = require('./db_config');

// //create table if not exist
// db.sequelize.sync();

// app.get('/', (req, res) => {
//     res.send("Home Page !");
// });

// app.get('/AllEmployees', async (req, res) => {
//     controller.findAllEmployees(req, res);
// });

// app.listen(3000);

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./employee_controller');

app.use(bodyParser.json());

const db = require('./db_config');

// Create table if not exist
db.sequelize.sync();

app.get('/', (req, res) => {
    res.send("Home Page !");
});

// app.post('/createEmployee', async (req, res) => {
//     controller.createEmployee(req, res);
// })

app.get('/AllEmployees', async (req, res) => {
    try {
        const employees = await controller.findAllEmployees();
        res.json(employees);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

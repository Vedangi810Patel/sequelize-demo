const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./employee_controller');

app.use(bodyParser.json());

const db = require('./db_config');

//create table if not exist
db.sequelize.sync();

app.get('/', (req, res) => {
    res.send("Home Page !");
});

app.get('/AllEmployees', (req, res) => {
    controller.findAllEmployees(req, res);
});

app.listen(3000);
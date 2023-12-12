const express = require('express');
const Employee = require('../database/models/Employee.js');
const Task = require('../database/models/Task.js');

const router = express.Router();

// Define the /employees route
router.get('/employees', (req, res) => {
  console.log('GET /employees');
  Employee.findAll()
    .then(employees => {
      res.json(employees);
    })
    .catch(err => {
      console.warn(err);
      res.json(err);
    });
});

// Define the /employees/:id route
router.get('/employees/:id', (req, res) => {
  Employee.findByPk(req.params.id)
    .then(employee => {
      res.json(employee);
    })
    .catch(err => {
      console.warn(err);
      res.json(err);
    });
});

// Define the /employees POST route
router.post('/employees', (req, res) => {
  Employee.create(req.body)
    .then(employee => {
      res.json(employee);
    })
    .catch(err => {
      console.warn(err);
      res.json(err);
    });
});

// Define the /employees/:id PUT route
router.put('/employees/:id', (req, res) => {
  Employee.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(employee => {
      res.json(employee);
    })
    .catch(err => {
      console.warn(err);
      res.json(err);
    });
});

// Define the /employees/:id DELETE route
router.delete('/employees/:id', (req, res) => {
  Employee.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(employee => {
      res.json(employee);
    })
    .catch(err => {
      console.warn(err);
      res.json(err);
    });
});

// Define the /employees/:id/tasks route
router.get('/employees/:id/tasks', (req, res) => {
  Employee.findByPk(req.params.id, {
    include: [{
      model: Task,
      as: 'tasks'
    }]
  })
    .then(employee => {
        console.log(employee)
      res.json(employee.tasks);
    })
    .catch(err => {
      console.warn(err);
      res.json(err);
    });
});


module.exports = router;
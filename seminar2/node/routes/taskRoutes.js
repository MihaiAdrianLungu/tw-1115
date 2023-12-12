const express = require('express');
const Task = require('../database/models/Task.js');

const router = express.Router();

// Define the /tasks route
router.get('/tasks', (req, res) => {
  console.log('GET /tasks');
  Task.findAll()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      console.warn(err);
      res.json(err);
    });
});

// Define the /tasks/:id route
router.get('/tasks/:id', (req, res) => {
  Task.findByPk(req.params.id)
    .then(task => {
      res.json(task);
    })
    .catch(err => {
      console.warn(err);
      res.json(err);
    });
});

// Define the /tasks POST route
router.post('/tasks', (req, res) => {
  Task.create(req.body)
    .then(task => {
      res.json(task);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});


// Define the /tasks/:id PUT route
router.put('/tasks/:id', (req, res) => {
  Task.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(task => {
      res.json(task);
    })
    .catch(err => {
      console.warn(err);
      res.json(err);
    });
});

// Define the /tasks/:id DELETE route
router.delete('/tasks/:id', (req, res) => {
  Task.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(task => {
      res.json(task);
    })
    .catch(err => {
      console.warn(err);
      res.json(err);
    });
});

module.exports = router;
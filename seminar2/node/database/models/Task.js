const {Sequelize, sequelize} = require('../server.js');

const Task = sequelize.define('task', {
    description: Sequelize.STRING,
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    employeeId: {
        type: Sequelize.INTEGER,
        references: { // Add this
          model: 'employees', // Reference to 'employee' model
          key: 'id',
          as: 'employeeId'
        }
    },
});

module.exports = Task;
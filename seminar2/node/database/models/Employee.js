const { Sequelize, sequelize } = require('../server.js');

const Employee = sequelize.define('employee', {
  firstName: Sequelize.STRING,
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  birthYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1900
    }
  }, 
  salary: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 1000,
    validate: {
      min: 1000
    }
  }
})

module.exports = Employee
const express = require('express');
const path = require('path');

const employeeRoutes = require('./routes/employeeRoutes.js');
const taskRoutes = require('./routes/taskRoutes.js');

const Employee = require('./database/models/Employee.js');
const Task = require('./database/models/Task.js');

Employee.hasMany(Task);

const app = express();
// app.use(cors());
app.use(express.json());  // Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the React app

app.get('/', (req,res) => res.send('Hello World!'));

app.use(employeeRoutes);
app.use(taskRoutes);

app.listen(8080, async () => {
  try {
    console.log('Example app listening on port 8080!');
  } catch (error) {
    console.warn('Unable to connect to db')
    console.warn(error)
  }
});
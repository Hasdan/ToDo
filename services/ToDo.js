const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// The queries sent to MySQL are inside db.query(``)

// Get all information from the database
async function getMultiple() {
  const rows = await db.query(
    `SELECT task_id, task_name, task_finished 
    FROM ToDoList`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

// Create a new field
// Amalgamate true/false with 1/0
async function create(task){
    ans = 257;
    if (task.finished == "true" || task.finished == 1) {
        ans = 1;
    } 
    if (task.finished == "false" || task.finished == 0) {
        ans = 0;
    }
  const result = await db.query(
    `INSERT INTO ToDoList
    (task_name, task_finished) 
    VALUES
    ("${task.name}", "${ans}")`
  );

  let message = 'Error in creating task';

  if (result.affectedRows) {
    message = 'Task created';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create
}
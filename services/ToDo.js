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
  const result = await db.query(
    `INSERT INTO ToDoList
    (task_name, task_finished) 
    VALUES
    ("${task.name}", ${task.finished})`
  );

  let message = 'Error in creating task';

  if (result.affectedRows) {
    message = 'Task created';
  }

  return {message};
}

async function update(id, task){
  const result = await db.query(
    `UPDATE ToDoList 
    SET task_finished=${task.finished}
    WHERE task_id=${id}` 
  );
 
  let message = 'Error in updating task';
 
  if (result.affectedRows) {
    message = 'Task updated successfully';
  }
 
  return {message};
}

module.exports = {
  getMultiple,
  create,
  update
}
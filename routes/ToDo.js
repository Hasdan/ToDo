const express = require('express');
const router = express.Router();
const ToDos = require('../services/ToDo');

// GET all tasks
router.get('/', async function(req, res, next) {
  try {
    res.json(await ToDos.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting items`, err.message);
    next(err);
  }
});

// POST new task
// [WARNING]: POST finished value as either 0 or 1 instead of true/false, mysql converts BOOLEAN into TINYINT, which will not accept true/false
router.post('/', async function(req, res, next) {
  try {
    res.json(await ToDos.create(req.body));
  } catch (err) {
    console.error(`Error while creating task`, err.message);
    next(err);
  }
});

// PUT request to update a task by id
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await ToDos.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating task`, err.message);
    next(err);
  }
});

  module.exports = router;
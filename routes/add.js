const express = require("express");
const router = express.Router();

module.exports = (tasks, taskIdCounter) => {
  router.post("/add", (req, res) => {
    const newTask = req.body.task;
    const newTaskObj = { id: taskIdCounter++, task: newTask, completed: false };
    tasks.push(newTaskObj);
    res.redirect("/");
  });

  return router;
};

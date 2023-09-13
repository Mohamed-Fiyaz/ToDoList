const express = require("express");
const router = express.Router();

module.exports = (tasks) => {
  router.post("/complete/:id", (req, res) => {
    const taskId = req.params.id;
    const task = tasks.find((task) => task.id === Number(taskId));

    if (task && !task.completed) {
      task.completed = true;
    }

    res.redirect("/");
  });

  return router;
};

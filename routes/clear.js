const express = require("express");
const router = express.Router();

module.exports = (tasks) => {
  router.post("/clear", (req, res) => {
    tasks.length = 0;
    res.redirect("/");
  });

  return router;
};

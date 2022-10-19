const express = require("express");
const router = express.Router();
const { User } = require("../db/models");

router.get("/", (req, res, next) => {
  User.findAll().then((users) => res.send(users));
});

router.get("/:id", (req, res, next) => {
  User.findByPk(req.params.id).then((user) => res.send(user));
});

router.post("/", (req, res, next) => {
  User.create(req.body).then((user) => res.status(201).send(user));
});

module.exports = router;

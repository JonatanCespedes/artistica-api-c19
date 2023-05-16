const express = require("express");
const router = express.Router();
const { getUsers, getUserById } = require("../controllers/user.controller");

router
    .get("/", getUsers)
    .get("/:id", getUserById)


module.exports = router;
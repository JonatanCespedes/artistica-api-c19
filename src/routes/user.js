const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  login,
} = require("../controllers/user.controller");
const { userRegisterValidationRules } = require("../validations/registerUser.validator");
const validate = require("../validations/index.validator");

router
  .get("/", getUsers)
  .get("/:id", getUserById)
  .post("/login", login)
  .post("/register", userRegisterValidationRules(), validate, createUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

module.exports = router;

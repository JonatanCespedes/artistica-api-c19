const { check, body } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models");
const { getUserByEmail } = require("../services/user.service");

const userLoginValidationRules = () => {
  return [
    check("email").isEmail().withMessage("Invalid email"),
    check("pass").notEmpty().withMessage("Password is required"),
    body("custom").custom(async (value, { req }) => {
      try {
        const user = await getUserByEmail(value);

        if (!bcrypt.compareSync(req.body.pass, user.dataValues.pass)) {
          return Promise.reject();
        }
      } catch (error) {
        return Promise.reject("Invalid Email or Password");
      }
    }),
  ];
};

module.exports = userLoginValidationRules;

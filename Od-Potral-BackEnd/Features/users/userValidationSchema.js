const Joi = require("joi");

// Joi validation schema for user creation
const userValidation = Joi.object({
  name: Joi.string().required(),
  rollNo: Joi.string().required(),
  year: Joi.number().integer().required(),
  batch: Joi.when("role", {
    is: "student",
    then: Joi.string().required(),
    otherwise: Joi.string().optional(),
  }),
  department: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string().valid("student", "faculty").default("student"),
  Mentor: Joi.string().optional(),
});

module.exports = userValidation;

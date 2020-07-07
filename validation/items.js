const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateItemInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";
  data.description = validText(data.description) ? data.description : "";
  data.category = validText(data.category) ? data.category : "";
  data.rate = validText(data.rate) ? data.rate : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }

  if (!Validator.isLength(data.title, { min: 0, max: 1000 })) {
    errors.title = "Description must be less than 1000 characters";
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = "Category field is required";
  }

  if (Validator.isEmpty(data.rate)) {
    errors.rate = "Rate field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

if (process.env.NODE_ENV === "production") {
  module.exports = require("../frontend/src/keys_prod");
} else {
  module.exports = require("./keys_dev");
}

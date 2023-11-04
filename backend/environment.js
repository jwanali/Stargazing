const path = require("path");
require("dotenv").config();

const ENV = process.env.NODE_ENV || "labber";
const PATH = path.resolve(__dirname, `./.env.${ENV}`);

require("dotenv").config({ path: PATH });

module.exports = ENV;

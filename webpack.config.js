var path = require("path");
module.exports = {
  entry: {
    app: ["./index.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  }
};

const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        loaders: ["pug-plain-loader"],
        // include: path.resolve(__dirname, "../")
      }
    ]
  }
};
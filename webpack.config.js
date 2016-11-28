var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./build/js/custom.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "./production/js/custom.min.js",
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".js"]
  },

  module: {
    loaders: [

    ],

    preLoaders: [

    ]
  },

  plugins: [

  ],
}
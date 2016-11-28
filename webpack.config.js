var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./build/js/index.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "./dashboard/js/bundle.min.js",
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
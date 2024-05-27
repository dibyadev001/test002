// webpack.functions.js
const path = require('path');

module.exports = {
  entry: './functions/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'functions'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

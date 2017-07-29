module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: __dirname + '/dist/js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
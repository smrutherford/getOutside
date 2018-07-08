const path = require('path');

const bundlePath = path.join(__dirname, 'public/');

module.exports = {
  entry: ['./client/index.jsx', `${bundlePath}style.css`],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['react', 'es2015', 'env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: bundlePath,
    filename: 'bundle.js',
  },
};

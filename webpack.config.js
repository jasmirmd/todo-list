const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const cssRule = { test: /\.css$/i, use: ['style-loader', 'css-loader'] };
const fontRule = { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource' };

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [ cssRule, fontRule ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    watchFiles: ['src/*.html'],
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true
      }
    }
  },
};
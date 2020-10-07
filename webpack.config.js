'use strict';

'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'dev'),
  entry: {
    bundle: './js/app',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  externals: {
    jquery: 'jQuery'
  },
  resolve: {
    alias: {
      'jquery.appear': path.resolve(__dirname, 'node_modules/jquery.appear/jquery.appear.js'),
      'jquery-countto': path.resolve(__dirname, 'node_modules/jquery-countto/jquery.countTo.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true
            }
          }
        ]
      }
    ]
  },
  plugins: [],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  devtool: 'cheap-inline-module-source-map',
  devServer: {
    contentBase: false,
    host: '0.0.0.0',
    port: 9000,
    proxy: {
      '*': 'http://localhost:8080'
    }
  }
};
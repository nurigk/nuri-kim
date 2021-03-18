const webpack = require('webpack');
const path = require('path');

const config = {
  entry: [
    'react-hot-loader/patch',
    './components/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath:"/nuri-kim/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test:  /\.(jpg|jpeg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.(svg|gif)$/i,
        use: 'file-loader'
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    contentBase: './dist'
  },
  // plugins: [
  //   new webpack.DefinePlugin({ // <-- key to reducing React's size
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production')
  //     }
  //   }),
  //   new webpack.optimize.DedupePlugin(), //dedupe similar code
  //   new webpack.optimize.UglifyJsPlugin(), //minify everything
  //   new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
  // ],
};

module.exports = config;
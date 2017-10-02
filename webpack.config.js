const path = require('path');

const config = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
      test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['env', {
                            "useBuiltIns": "usage",
                            "debug": true,
                            "modules": false,
                            "targets": {
                                "browsers": [
                                    "Chrome >= 58",
                                    "Explorer >= 11"
                                ]
                            }
                        }]]
                    }
                }
    }
    ]
  }
};

module.exports = config;
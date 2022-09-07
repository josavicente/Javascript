const htmlWebpack       = require('html-webpack-plugin')
const MiniCssExtract    = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const cssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');

module.exports = {
      mode: 'production',
/* Cleaning the dist folder before each build. */
      output: {
            clean: true,
            filename: 'main.[contenthash].js'
      },
      /* Telling webpack to use the html-loader to load html files. */
      module:{
            rules:[
                  {
                        test: /\.html$/,
                        loader: 'html-loader',
                        options: {
                              sources:false
                        }
                  },
                  {
                        test: /\.css$/,
                        exclude: /styles.css$/,
                        use: [ 'style-loader', 'css-loader'  ]
                  },
                  {
                        test: /styles.css$/,
                        use: [ MiniCssExtract.loader, 'css-loader' ]


                  },
                  {
                        test: /\.(png|jpe?g|gif)$/i,
                        use: [
                        {
                              loader: 'file-loader',
                        },
                        ],
                  },
                  {
                        test: /\.m?js$/,
                        exclude: /node_modules/,
                        use: {
                              loader: "babel-loader",
                              options: {
                              presets: ['@babel/preset-env']
                        }
                        }
                  }
            ]
      },
      optimization: {
            minimize: true,
            minimizer: [
                  new cssMinimizer(),
                  new Terser(),
            ]
      },
/* Creating a new html file in the dist folder. */
      plugins: [
            new htmlWebpack({
                  title: 'Webpack App',
                  // filename: 'index.html',
                  template: './src/index.html'
            }),
            new MiniCssExtract({
                  filename: 'main.[fullhash].css',
                  ignoreOrder: false
            }),
            new CopyPlugin({
                  patterns: [
                        { from: "src/assets", to: "assets/" }
                  ],
            }),
      ],
}
const htmlWebpack       = require('html-webpack-plugin')
const MiniCssExtract    = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
      mode: 'development',
/* Cleaning the dist folder before each build. */
      output: {
            clean: true
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
      optimization: {},
/* Creating a new html file in the dist folder. */
      plugins: [
            new htmlWebpack({
                  title: 'Webpack App',
                  // filename: 'index.html',
                  template: './src/index.html'
            }),
            new MiniCssExtract({
                  filename: 'styles.css',
                  ignoreOrder: false
            }),
            new CopyPlugin({
                  patterns: [
                        { from: "src/assets", to: "assets/" },
                  ],
            }),
      ],
}
const htmlWebpack       = require('html-webpack-plugin')
const MiniCssExtract    = require("mini-css-extract-plugin");

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
            })
      ],
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ["@babel/preset-env", "@babel/preset-react"]
            }
         },
         {
            test: /.scss$/,
            use: [
               {
                  loader: "style-loader"
               },
               {
                  loader: "css-loader"
               },
               {
                  loader: "sass-loader"
               }
            ]
         },
         {
             test: /\.css$/,
             loader: 'style-loader!css-loader'
         },

      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}

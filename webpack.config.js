let path = require('path');
let webpack = require('webpack');
require('vue-loader')
require('babel-loader')

module.exports = {
	entry: './src/index.js',
  	output: {
    	filename: 'dynamic-form.js',
    	path: path.resolve(__dirname, 'dist')
  	},
  	module:{
  		rules:[
  			{
          test: /\.vue$/, 
          use: 'vue-loader'
        },
        {
          test: /\.js$/,
          use: 'babel-loader'
        }
  		]
  	}
}
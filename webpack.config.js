'use strict'

const path              = require('path')
const webpack           = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge             = require('webpack-merge')
const validate          = require('webpack-validator')
const parts             = require('./libs/parts')

const paths = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
}

var config

const common = {
	entry: {
		app: paths.app + '/app.js'
	},
	output: {
		path: paths.build,
    	filename: '[name].js'
	},
  	plugins: [
		new HtmlWebpackPlugin({
			template: paths.app + '/index.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true
			}
		})
	]
}

switch(process.env.npm_lifecycle_event) {
	case 'build':
		config = merge(
			common,
			{
				devtool: 'source-map'
			},
			parts.setupCSS(paths.app + '/css')
		)
    	break
	default:
    	config = merge(
			common,
			{
				devtool: 'eval-source-map'
			},
			parts.setupCSS(paths.app + '/css'),
			parts.devServer({
	    		host: process.env.HOST,
	        	port: process.env.PORT
	    	})
		)
}

module.exports = validate(config)

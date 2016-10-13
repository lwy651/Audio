import webpack from 'webpack';

module.exports = {
	entry:{
		index:'./index.jsx'
	},
	output:{
		path:'./dist',
		filename:'[name].js'
	},
	module:{
		loaders:[
			{
				test:/\.jsx$/,
				exclude:/node_modules/,
				loader:'babel',
				query:{
					"presets":["es2015","react"]
				}
			}
		]
	}
};
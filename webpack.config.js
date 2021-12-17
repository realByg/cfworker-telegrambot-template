const path = require('path')

module.exports = {
	mode: 'production',
	entry: './main.js',
	node: {
		fs: 'empty',
	},
	output: {
		filename: 'worker.js',
		path: path.join(__dirname, 'dist'),
	},
	performance: {
		hints: false,
	},
	resolve: {
		extensions: ['.ts', '.js', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.mjs$/,
				include: /node_modules/,
				type: 'javascript/auto',
			},
			{
				test: /\.(ts|js)?$/,
				include: /(node_modules\\@cfworker\\web|bot)/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-typescript'],
					plugins: [
						'@babel/plugin-proposal-class-properties',
						'@babel/plugin-transform-runtime',
						'@babel/plugin-proposal-optional-chaining',
						'@babel/plugin-proposal-nullish-coalescing-operator',
						'@babel/plugin-transform-modules-commonjs',
					],
				},
			},
		],
	},
}

const path = require('path');
const webpack = require('webpack');

const isDev = true;

/**
 * @type {webpack.Configuration}
 */
module.exports = {
	cache: true,
	context: path.resolve(__dirname),
	mode: isDev ? 'development' : 'production',
	devtool: isDev ? 'cheap-module-source-map' : false,
	node: {
		// fs: 'empty'
	},
	entry: {
		main: path.resolve(__dirname, 'src/main.ts')
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	},
	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.(ts|tsx)$/,
				include: path.resolve(__dirname, 'src'),
				use: [{ loader: 'ts-loader' }]
			},
			{
				test: /\.md$/i,
				use: [{ loader: 'raw-loader' }]
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: '/',
		filename: 'js/[name].js',
		chunkFilename: 'js/[name].chunk.js'
	},
	plugins: [
		new webpack.DefinePlugin({
			__DEV__: isDev
		})
	],
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	}
};

const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: 'production',
	output: {
		filename: 'validator.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'emailValidator',
		libraryTarget: 'window',
	},
	devtool: 'source-map',
};